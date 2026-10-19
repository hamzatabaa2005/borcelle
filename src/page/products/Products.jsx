import { useEffect, useState } from "react"
import ContainerLayout from "../../layout/ContainerLayout"
import MainLayout from "../../layout/MainLayout"
import { DropDown } from "../../components/BrandBtn"
import { IoGrid } from "react-icons/io5";
import { Menu } from "lucide-react";
import { Accordion } from "../../components/Accordion";
import { Pagination } from "../../components/Pagination";
import { Breadcrumb } from "../../components/BreadCrumb";
import { ProductService } from "../../services/ProductService";
import { CategoryService } from "../../services/CategoryService";
import { ProductListSection } from "./components/ProductListSection";
import { useNavigate, useParams } from "react-router";
import { BiReset } from "react-icons/bi";


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

    return (
        <MainLayout>

            <ContainerLayout>

                <Breadcrumb />

                <div className="grid md:grid-cols-12 md:gap-10 ">

                    <div className="md:block md:col-span-3 hidden w-full rounded-md  text-black dark:text-white mt-20">

                        <Accordion header="Category" headerStyle={"rounded-t-md"} >
                            {category ? category.map((item, index) => (
                                <button key={index} value={item.id} className="text-start ps-2 py-2  hover:bg-pink-300/30 block rounded-md w-full" onClick={(e) => { setCategoryID(e.target.value) }}>{item.name}</button>
                            )
                            ) : <></>}
                        </Accordion>
                        <Accordion header="Price Range">
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

                        <div className="flex justify-between items-center p-3">
                            <div>  12,911 items in <span className="font-bold">Mobile accessory</span> </div>
                            <div className="flex gap-3 items-center">

                                <button className="bg-pink-600 w-5 h-5 flex justify-center items-center rounded-full" onClick={handleReset}> <BiReset /></button>
                                <div className="flex gap-2 items-center" onClick={handelOrder}>
                                    <input type="checkbox" id="Verified" className="accent-pink-700 w-4 h-4" checked={order == "asc"} />
                                    <label htmlFor="Verified">order : {order == "desc" ? "asc" : "desc"}</label>
                                </div>
                                <DropDown
                                    title={orderBy ? orderBy : "orderBy"}
                                    styleDrop="h-8 w-32"
                                >
                                    <button className=" p-2 cursor-pointer hover:bg-gray-300 flex justify-start w-full" onClick={handelOrderBy} value={"name"} >name</button>
                                    <button className=" p-2 cursor-pointer hover:bg-gray-300 flex justify-start w-full" onClick={handelOrderBy} value={"price"} >price</button>
                                    <button className=" p-2 cursor-pointer hover:bg-gray-300 flex justify-start w-full" onClick={handelOrderBy} value={"created_at"} >created_at</button>
                                    <button className=" p-2 cursor-pointer hover:bg-gray-300 flex justify-start w-full" onClick={handelOrderBy} value={"most_purchased"} >most_purchased</button>
                                </DropDown>

                                <div className="md:flex hidden border border-gray-300 rounded-md overflow-hidden ">
                                    <label htmlFor="grid" className={` flex items-center justify-center text cursor-pointer  ${grid ? "bg-gray-400/50" : ""} w-6 h-6 `}>
                                        <input type="radio" name="layout" id="grid" onClick={() => { setGrid(true) }} hidden />
                                        <IoGrid />
                                    </label>
                                    <label htmlFor="one" className={` flex items-center justify-center cursor-pointer  ${!grid ? "bg-gray-400/50" : ""} w-6 h-6 `}>
                                        <input type="radio" name="layout" id="one" onClick={() => { setGrid(false) }} hidden />
                                        <Menu />
                                    </label>
                                </div>


                            </div>
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
