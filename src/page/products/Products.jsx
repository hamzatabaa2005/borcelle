import { useEffect, useState } from "react"
import ContainerLayout from "../../layout/ContainerLayout"
import MainLayout from "../../layout/MainLayout"
import { DropDown } from "../../components/BrandBtn"
import { IoGrid } from "react-icons/io5";
import { ArrowDown, ArrowUp, ArrowUpDown, Menu, X } from "lucide-react";
import { Accordion } from "../../components/Accordion";
import { Pagination } from "../../components/Pagination";
import { Breadcrumb } from "../../components/BreadCrumb";
import { ProductService } from "../../services/ProductService";
import { CategoryService } from "../../services/CategoryService";
import { ProductListSection } from "./components/ProductListSection";
import { useNavigate, useParams } from "react-router";


// STYLE: small "x" chip used in the active-filters row
const Chip = ({ label, onRemove }) => (
    <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100 py-1 ps-3 pe-2 text-sm dark:border-gray-600 dark:bg-gray-700">
        {label}
        <button onClick={onRemove} aria-label={`Remove ${label}`} className="cursor-pointer text-gray-500 hover:text-pink-600"><X className="h-4 w-4" /></button>
    </span>
)

export const Products = () => {
    const [grid, setGrid] = useState(true)

    const [width, setWidth] = useState(window.innerWidth)

    const params = useParams()
    const [order, setOrder] = useState(null)
    const navigateTo = useNavigate()

    addEventListener('resize', () => {
        setWidth(window.innerWidth)
        if (width < 768) {
            setGrid(true)
        }
    })

    const [productsData, setProducts] = useState(null)
    const [category, setCategory] = useState(null)
    const [categoryID, setCategoryID] = useState(null)
    const [orderBy, setOrderBy] = useState(null)
    const [price, setPrice] = useState({ from: 0, to: 100000 })
    const [range, setRange] = useState({ from: "", to: "" }) // NEW: min/max inputs in the price filter

    useEffect(() => {
        ProductService.GetProductsByCategoryAndSearch(categoryID || "", params.Search || "")
            .then(products => {
                setProducts(products.data)
            })

    }, [categoryID, params.Search])



    useEffect(() => {

        CategoryService.GetCategory()
            .then(category => {
                setCategory(category.data)
            })
    }, [])

    useEffect(() => {
        if (params?.CatID) {

            setCategoryID(params.CatID);
        }
        else { setCategoryID(null); }
    }, [params?.CatID]);


    function handelOrder() {
        const sort = order ? (order == "desc" ? "asc" : "desc") : "asc"
        setOrder(sort)

        ProductService.filterProduct(categoryID || "", orderBy || "", sort, price.from || "", price.to || "").then(products => {
            setProducts(products.data)
        })
    }

    function handelOrderBy(e) {
        setOrderBy(e.target.value)
        ProductService.filterProduct(categoryID || "", e.target.value, order || "", price.from || "", price.to || "").then(products => {
            setProducts(products.data)
        })
    }

    function handelPrice(priceRange) {
        setPrice({ from: priceRange.from, to: priceRange.to })
        ProductService.filterProduct(categoryID || "", orderBy || "", order || "asc", priceRange.from, priceRange.to).then(products => {
            setProducts(products.data)
        })
    }

    function handleReset() {
        setCategoryID(null)
        setOrder(null)
        setOrderBy(null)
        navigateTo('/products')
        setPrice({ from: 0, to: 100000 })
        ProductService.GetProducts().then(products => {
            setProducts(products.data)
        })
    }

    // NEW: values derived from the existing state (no new API calls)
    const activeCategory = category?.find(c => String(c.id) === String(categoryID))
    const priceActive = price.from !== 0 || price.to !== 100000
    const count = Array.isArray(productsData) ? productsData.length : 0
    const sortLabels = { name: "Name", price: "Price", created_at: "Newest", most_purchased: "Most purchased" }

    return (
        <MainLayout>

            <ContainerLayout>

                <Breadcrumb />

                <div className="grid md:grid-cols-12 md:gap-10 ">

                    {/* STYLE: filters become one rounded card with a "Filters" header and a Reset link */}
                    <div className="md:block md:col-span-3 hidden w-full self-start rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden text-black dark:text-white mt-28">
                        <div className="flex items-center justify-between bg-white px-5 py-4 dark:bg-gray-800">
                            <span className="text-lg font-bold">Filters</span>
                            <button onClick={handleReset} className="cursor-pointer text-sm font-semibold text-pink-700 hover:underline">Reset</button>
                        </div>

                        <Accordion header="Category" headerStyle={"rounded-t-md"} defaultOpen>
                            {category ? category.map((item, index) => (
                                <button key={index} value={item.id} className={`text-start ps-2 py-2  hover:bg-pink-300/30 block rounded-md w-full ${String(categoryID) === String(item.id) ? "bg-pink-300/30 font-semibold" : ""}`} onClick={(e) => { setCategoryID(e.target.value) }}>{item.name}</button>
                            )
                            ) : <></>}
                        </Accordion>
                        <Accordion header="Price Range" defaultOpen>
                            {/* NEW: min / max inputs, they call your existing handelPrice */}
                            <div className="flex items-center gap-2 pb-3">
                                <input type="number" min="0" placeholder="Min" value={range.from} onChange={(e) => setRange({ ...range, from: e.target.value })} className="w-full rounded-md border border-gray-300 px-2 py-1 dark:border-gray-600 dark:bg-gray-700" />
                                <span>–</span>
                                <input type="number" min="0" placeholder="Max" value={range.to} onChange={(e) => setRange({ ...range, to: e.target.value })} className="w-full rounded-md border border-gray-300 px-2 py-1 dark:border-gray-600 dark:bg-gray-700" />
                            </div>
                            <button className="mb-2 w-full cursor-pointer rounded-md bg-pink-700 py-1.5 text-sm text-white hover:bg-pink-800" onClick={() => handelPrice({ from: Number(range.from) || 0, to: Number(range.to) || 100000 })}>Apply</button>
                            <button className="text-start ps-2 py-2  hover:bg-pink-300/30 block rounded-md w-full" onClick={() => handelPrice({ from: 0, to: 500 })}>from 0 to 500</button>
                            <button className="text-start ps-2 py-2  hover:bg-pink-300/30 block rounded-md w-full" onClick={() => handelPrice({ from: 500, to: 2500 })} >from 500 to 2500</button>
                            <button className="text-start ps-2 py-2  hover:bg-pink-300/30 block rounded-md w-full" onClick={() => handelPrice({ from: 2500, to: 9999 })}>from 2500 to 9999</button>
                        </Accordion>
                        <Accordion header="Brand " >
                            {/* {category.map(item => (

                            )
                            )} */}
                        </Accordion>
                        <Accordion header="Feature">
                            {/* {category.map(item => (

                            )
                            )} */}
                        </Accordion>
                        <Accordion header="condition">
                            {/* {category.map(item => (

                            )
                            )} */}
                        </Accordion>
                        <Accordion header="rating" headerStyle={"rounded-b-md"}>
                            {/* {category.map(item => (

                            )
                            )} */}
                        </Accordion>

                    </div>

                    <div className="md:col-span-9 dark:text-white">

                        {/* STYLE: heading with real name + count, clearer sort controls, active-filter chips */}
                        <div className="flex flex-wrap justify-between items-center gap-3 pb-3">
                            <div className="flex items-baseline gap-3">
                                <h1 className="text-2xl font-bold">{activeCategory ? activeCategory.name : "All products"}</h1>
                                <span className="text-gray-500 dark:text-gray-300">{count} items</span>
                            </div>
                            <div className="flex gap-3 items-center">
                                <DropDown
                                    title={<span>Sort by: <b>{orderBy ? sortLabels[orderBy] : "Default"}</b></span>}
                                    styleDrop="h-10 w-52"
                                >
                                    <button className=" p-2 cursor-pointer hover:bg-gray-300 flex justify-start w-full" onClick={handelOrderBy} value={"name"} >Name</button>
                                    <button className=" p-2 cursor-pointer hover:bg-gray-300 flex justify-start w-full" onClick={handelOrderBy} value={"price"} >Price</button>
                                    <button className=" p-2 cursor-pointer hover:bg-gray-300 flex justify-start w-full" onClick={handelOrderBy} value={"created_at"} >Newest</button>
                                    <button className=" p-2 cursor-pointer hover:bg-gray-300 flex justify-start w-full" onClick={handelOrderBy} value={"most_purchased"} >Most purchased</button>
                                </DropDown>

                                <button onClick={handelOrder} aria-label="Change sort direction" title={order ? (order == "asc" ? "Ascending" : "Descending") : "Default order"} className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-gray-300 dark:border-gray-600">
                                    {order == "asc" ? <ArrowUp className="h-5" /> : order == "desc" ? <ArrowDown className="h-5" /> : <ArrowUpDown className="h-5" />}
                                </button>

                                <div className="md:flex hidden border border-gray-300 dark:border-gray-600 rounded-md overflow-hidden ">
                                    <label htmlFor="grid" className={` flex items-center justify-center text cursor-pointer  ${grid ? "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300" : ""} w-10 h-10 `}>
                                        <input type="radio" name="layout" id="grid" onClick={() => { setGrid(true) }} hidden />
                                        <IoGrid />
                                    </label>
                                    <label htmlFor="one" className={` flex items-center justify-center cursor-pointer  ${!grid ? "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300" : ""} w-10 h-10 `}>
                                        <input type="radio" name="layout" id="one" onClick={() => { setGrid(false) }} hidden />
                                        <Menu />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 min-h-9 mb-3">
                            {activeCategory && <Chip label={activeCategory.name} onRemove={() => setCategoryID(null)} />}
                            {priceActive && <Chip label={`$${price.from} – $${price.to}`} onRemove={() => handelPrice({ from: 0, to: 100000 })} />}
                            {(activeCategory || priceActive) && <button onClick={handleReset} className="cursor-pointer text-sm font-semibold text-pink-700 hover:underline">Clear all</button>}
                        </div>

                        <ProductListSection productsData={productsData} grid={grid} />

                        <div className="flex justify-end">
                            <Pagination />
                        </div>

                    </div>



                </div>
            </ContainerLayout >

        </MainLayout >
    )
}