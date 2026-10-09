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
import { useParams } from "react-router";


export const Products = () => {
    const [grid, setGrid] = useState(true)

    const [width, setWidth] = useState(window.innerWidth)

    const params = useParams()

    addEventListener('resize', () => {
        setWidth(window.innerWidth)
        if (width < 768) {
            setGrid(true)
        }
    })
    const [productsData, setProducts] = useState(null)
    const [category, setCategory] = useState(null)
    const [categoryID, setCategoryID] = useState(params.CatID != "All" && params.CatID)

    useEffect(() => {
        ProductService.GetProductsByCategory(categoryID)
            .then(products => {
                setProducts(products.data)
            })

    }, [categoryID])
    useEffect(() => {
        CategoryService.GetCategory()
            .then(category => {
                setCategory(category.data)
            })
    }, [])
    return (
        <MainLayout>

            <ContainerLayout>

                <Breadcrumb />

                <div className="grid md:grid-cols-12 md:gap-10">

                    <div className="md:block md:col-span-3 hidden w-full rounded-md  text-black dark:text-white mt-20">

                        <Accordion header="Category" headerStyle={"rounded-t-md"} >
                            {category ? category.map((item, index) => (
                                <button key={index} value={item.id} className="text-start ps-2 py-2  hover:bg-pink-300/30 block rounded-md w-full" onClick={(e) => { setCategoryID(e.target.value) }}>{item.name}</button>
                            )
                            ) : <></>}
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
                        <Accordion header="Price Range">
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

                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" id="Verified" className="accent-pink-700 w-4 h-4" />
                                    <label htmlFor="Verified">Verified only</label>
                                </div>
                                <DropDown
                                    title="Feature"
                                    styleDrop="h-8 w-32"
                                >
                                    <div className=" p-2 cursor-pointer hover:bg-gray-300 " >login</div>
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
            </ContainerLayout>

        </MainLayout>
    )
}
