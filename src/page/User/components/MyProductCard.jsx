import { Eye, SquarePen, Trash2Icon } from "lucide-react"
import { useNavigate } from "react-router"
import { BrandAreaInput, BrandBtn, BrandInput, DefaultBtn } from "../../../components/BrandBtn"
import { ProductService } from "../../../services/ProductService"
import { useContext, useState } from "react"
import { UserContext } from "../../../context/UserContext/UserContext"
import { Modal } from "../../../components/Modal"
import { LuDollarSign, LuTag } from "react-icons/lu"
const Field = ({ label, value }) => (
    <div >
        <p className=" text-gray-500 dark:text-gray-400">{label} :</p>
        <p className=" text-gray-800 dark:text-white wrap-break-word">{value || "???"}</p>
    </div>
)


export const MyProductCard = ({ id, name, description,
    image,
    price,
    category,
    category_id,
    categories = [],
    onChange }) => {

    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)
    const [error, setError] = useState(null)
    const [Loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: name,
        description: description,
        price: price,
        category_id: category_id
    })

    const categoryName = category?.name ?? categories.find(item => String(item.id) === String(form.category_id))?.name

    function DeleteProduct() {
        ProductService.DeleteProduct(id, user.token)
            .then(data => {
                console.log(data)
                onChange && onChange()
            })
            .catch(err => {
                console.log(err)
            })
    }

    function handleChange(key) {
        return (e) => setForm({ ...form, [key]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        setError(null)
        setLoading(true)
        const { name, description, price, category_id } = form;

        ProductService.UpdateProduct(id, name, description, price, category_id, user.token)
            .then((data) => {
                console.log(data)

                setShowModal(false)
                onChange && onChange()
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })

    }
    return (
        <div className="border-2 border-pink-700 rounded-xl dark:text-white p-5">
            <div className="h-48 w-full rounded-md overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img src={image} alt={name} loading="lazy" className="w-full h-full object-center object-cover" />
            </div>
            <div className="mt-3">
                <h2 className="font-bold text-lg">{name}</h2>
                <p className="text-gray-700 dark:text-gray-300 line-clamp-2">{description}</p>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-5 pt-4 border-t border-b my-3 border-gray-100 dark:border-gray-700">
                <Field label="Price" value={price} />
                <Field label="Category" value={categoryName} />

            </div>
            <div className="flex justify-end items-center gap-2">
                <DefaultBtn title={"delete"} icon={<Trash2Icon />} btnStyle={"rounded-md before:rounded-md"} onClick={DeleteProduct} />
                <DefaultBtn title={"Edit"} icon={<SquarePen />} btnStyle={"rounded-md before:rounded-md"} onClick={() => { setShowModal(!showModal) }} />
                <DefaultBtn title={"Show"} icon={<Eye />} btnStyle={"rounded-md before:rounded-md"} onClick={() => { navigate(`/product/${id}`) }} />
            </div>
            <Modal showModal={showModal} >
                <div className="flex items-center justify-center rounded-xl   bg-white  dark:bg-gray-900 dark:text-white  ">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
                        <form onSubmit={handleSubmit} >
                            <h1 className="font-bold text-xl text-gray-800 dark:text-white">{"Edit product"}</h1>

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
                                    <select className="bg-white focus:outline-none rounded-lg px-3 py-2 w-full border border-gray-300 dark:bg-gray-700 dark:text-white "
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
        </div>
    )
}