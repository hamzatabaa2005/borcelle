import { useContext, useEffect, useState } from "react"
import { ProductService } from "../../services/ProductService"
import { CategoryService } from "../../services/CategoryService"
import { UserContext } from "../../context/UserContext/UserContext"
import ContainerLayout from "../../layout/ContainerLayout"
import { NavLayout } from "../../layout/NavLayout"
import { Divider } from "../../components/Divider"
import { BrandAreaInput, BrandBtn, BrandInput, DefaultBtn } from "../../components/BrandBtn"
import { Modal } from "../../components/Modal"
import { ImgInput } from "../Auth/components/ImgInput"
import { LuDollarSign, LuTag } from "react-icons/lu"
import { MyProductCard } from "./components/Myproductcard"

export const MyProducts = () => {

    const { user } = useContext(UserContext)
    const [products, setProducts] = useState(null)
    const [categories, setCategories] = useState([])

    function loadProducts() {
        ProductService.GetMyProducts(user.token).then(
            data => {
                setProducts(data.data)
            }
        )
    }

    useEffect(() => {

        loadProducts()

        CategoryService.GetCategory().then(
            data => {
                setCategories(data.data)
            }
        )

    }, [])

    const [showModal, setShowModal] = useState(false)
    const [error, setError] = useState(null)
    const [Loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: "",
        description: "",
        price: "",
        category_id: "",
        img: "",
        imgFile: null
    })


    function handleChange(key) {
        return (e) => setForm({ ...form, [key]: e.target.value })
    }

    function handleImg(e) {
        const file = e.target.files[0];
        if (file) {
            const link = URL.createObjectURL(file);
            setForm({ ...form, img: link, imgFile: file });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        setError(null)
        setLoading(true)
        const { name, description, price, category_id, imgFile } = form;

        ProductService.AddProduct(name, description, price, imgFile, category_id, user.token)
            .then((data) => {
                setShowModal(false)
                setForm({ name: "", description: "", price: "", category_id: "", img: "", imgFile: null })
                loadProducts()
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div className="min-h-screen dark:bg-gray-900 ">
            <ContainerLayout >

                <NavLayout>

                    <Divider title="Products" />
                    < div className="grid grid-cols-2 gap-6 my-5" >
                        {
                            products ? products.map(item => (
                                <MyProductCard key={item.id} {...item} categories={categories} onChange={loadProducts} />
                            )) : <></>}
                        <div className="flex h-full justify-center items-center">
                            <DefaultBtn type="button" title="Add new product" btnStyle="rounded-md before:rounded-md my-2" onClick={() => {
                                setShowModal(!showModal)
                            }} />
                        </div>
                    </div >
                    <Modal showModal={showModal} >
                        <div className="flex items-center justify-center rounded-xl   bg-white  dark:bg-gray-900 dark:text-white  ">
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
                                <form onSubmit={handleSubmit} >
                                    <h1 className="font-bold text-xl text-gray-800 dark:text-white">{"Add product"}</h1>

                                    <div className="grid md:grid-cols-2 gap-4 mt-4">

                                        <div className="flex flex-col gap-1">
                                            <BrandInput placeholder="Product name *" divStyle="w-full" inputStyle={"border border-gray-300"} icon={<LuTag />}
                                                value={form.name} onChange={handleChange("name")} required />
                                        </div>

                                        <div className="flex flex-col gap-1">
                                            <BrandInput placeholder="Price *" type="number" inputMode="decimal" divStyle="w-full" inputStyle={"border border-gray-300"} icon={<LuDollarSign />}
                                                value={form.price} onChange={handleChange("price")} required />
                                        </div>

                                        <div className="flex flex-col gap-1">
                                            <select className="bg-white focus:outline-none rounded-lg px-3 py-2 w-full border border-gray-300 dark:bg-gray-700 dark:text-white"
                                                value={form.category_id} onChange={handleChange("category_id")} required>
                                                <option value="">Category *</option>
                                                {categories.map(item => (
                                                    <option key={item.id} value={item.id}>{item.name}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="md:col-span-2">
                                            <BrandAreaInput placeholder="Description *" divStyle="w-full" inputStyle={"border border-gray-300"}
                                                value={form.description} onChange={handleChange("description")} required />
                                        </div>

                                        <div className="md:col-span-2 flex justify-center">
                                            <ImgInput onChange={handleImg} img={form.img} />
                                        </div>
                                    </div>

                                    {error && <p className="bg-amber-200 rounded-md text-center px-2 py-4 mt-4 break-all">{error.message}</p>}

                                    <div className="flex justify-end gap-3 mt-6">
                                        <DefaultBtn type="button" title="Cancel" btnStyle="rounded-md before:rounded-md my-2" onClick={() => {
                                            setShowModal(!showModal)
                                        }} />
                                        <BrandBtn title={Loading ? "Saving..." : "Save"} btnStyle="rounded-md before:rounded-md" disabled={Loading} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Modal>


                </NavLayout>


            </ContainerLayout>
        </div>
    )

}