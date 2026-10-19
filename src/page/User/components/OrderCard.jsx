import { Ban, Eye } from "lucide-react"
import { GrDocumentText } from "react-icons/gr"
import { DefaultBtn } from "../../../components/BrandBtn"
import { OrderService } from "../../../services/OrderService"
import { useContext, useState } from "react"
import { UserContext } from "../../../context/UserContext/UserContext"
import { Modal } from "../../../components/Modal"

const Field = ({ label, value }) => (
    <div >
        <p className=" text-gray-500 dark:text-gray-400">{label} :</p>
        <p className=" text-gray-800 dark:text-white wrap-break-word">{value}</p>
    </div>
)

const statusStyle = {
    PENDING: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    CANCELLED: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
}

const Badge = ({ value }) => (
    <span className={`rounded-2xl py-1 px-2 text-sm capitalize ${statusStyle[value] ?? "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200"}`}>
        {value ?? "-"}
    </span>
)


export const OrderCard = ({ id, discount,
    shipping,
    grand_total,
    total,
    subtotal,
    comment,
    status,
    payment_status,
    payment_type }) => {

    const { user } = useContext(UserContext)
    const [showModal, setShowModal] = useState(false)
    const [error, setError] = useState(null)
    const [Loading, setLoading] = useState(false)
    const [orderStatus, setOrderStatus] = useState(status)

    function CancelOrder() {
        setError(null)
        setLoading(true)
        OrderService.CancelOrder(id, user.token)
            .then(data => {
                setOrderStatus("CANCELLED")
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
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="rounded-full p-2 bg-pink-700 text-white"> <GrDocumentText /> </div>
                    <div>
                        <h2 className="font-bold">Order #{id}</h2>
                        <p className="text-gray-700 capitalize">{payment_type}</p>
                    </div>
                </div>

                <Badge value={orderStatus} />

            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-5 pt-4 border-t border-b my-3 border-gray-100 dark:border-gray-700">
                <Field label="Total" value={total} />
                <Field label="Discount" value={discount > 0 ? `- ${discount}` : "0"} />
                <Field label="Shipping" value={shipping > 0 ? shipping : "Free"} />
                <Field label="Payment" value={payment_status} />
                <Field label="Grand total" value={grand_total} />
            </div>

            {error && <p className="bg-amber-200 rounded-md text-center px-2 py-4 mb-3 break-all">{error.message}</p>}

            <div className="flex justify-end items-center gap-2">
                <DefaultBtn title={Loading ? "Canceling..." : "Cancel"} icon={<Ban />} btnStyle={"rounded-md before:rounded-md disabled:opacity-50 disabled:cursor-not-allowed"} disabled={orderStatus !== "PENDING" || Loading} onClick={CancelOrder} />
                <DefaultBtn title={"Show"} icon={<Eye />} btnStyle={"rounded-md before:rounded-md"} onClick={() => { setShowModal(!showModal) }} />
            </div>
            <Modal showModal={showModal} >
                <div className="flex items-center justify-center rounded-xl   bg-white  dark:bg-gray-900 dark:text-white  ">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
                        <div className="flex justify-between items-center">
                            <h1 className="font-bold text-xl text-gray-800 dark:text-white">Order #{id}</h1>
                            <Badge value={orderStatus} />
                        </div>

                        <div className="grid md:grid-cols-2 gap-x-4 gap-y-3 mt-5 pt-4 border-t border-gray-100 dark:border-gray-700">
                            <Field label="Payment type" value={payment_type} />
                            <Field label="Payment status" value={payment_status} />
                            <Field label="Subtotal" value={subtotal} />
                            <Field label="Total" value={total} />
                            <Field label="Discount" value={discount > 0 ? `- ${discount}` : "0"} />
                            <Field label="Shipping" value={shipping > 0 ? shipping : "Free"} />
                            <Field label="Grand total" value={grand_total} />
                            <Field label="Comment" value={comment} />
                        </div>

                        <div className="flex justify-end gap-3 mt-6">
                            <DefaultBtn type="button" title="Close" btnStyle="rounded-md before:rounded-md my-2" onClick={() => {
                                setShowModal(!showModal)
                            }} />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}