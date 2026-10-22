import { BrandBtn, BrandInput, DefaultBtn, DropDown } from "../../components/BrandBtn"
import { LogLayout } from "../../layout/LogLayout"
import { IoReload } from "react-icons/io5"
import { Product } from "./Product"
import { Modal } from "../../components/Modal"
import { useContext, useEffect, useState } from "react"
import verify from "/src/assets/verify.png"
import { CartContext } from "../../context/CartContext/CartContext"
import { AddressService } from "../../services/AddressService"
import { UserContext } from "../../context/UserContext/UserContext"
import { OrderService } from "../../services/OrderService"
import { useNavigate } from "react-router"
import { Lock } from "lucide-react"

const Payment = () => {
    const { user } = useContext(UserContext)
    const { cart, setCart } = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)
    const [err, setErr] = useState(null)
    const [address, setAddress] = useState(null)
    const [SelectedAddress, setSelectedAddress] = useState(null)
    const [coupon, setCoupon] = useState(undefined)
    const [paymentType, setPaymentType] = useState("CASH")

    const navigateTo = useNavigate()

    useEffect(() => {
        if (user?.token) {
            AddressService.GetAddress(user.token).then(data => {
                setAddress(data.data)
            }).catch(error => {
                console.error("Failed to fetch addresses:", error)
            })
        }
    }, [user?.token])

    const getAddressId = () => {
        if (SelectedAddress?.id) {
            return SelectedAddress.id
        }
        if (Array.isArray(address) && address.length > 0) {
            const defaultAddress = address.find(item => item.is_default)
            return defaultAddress ? defaultAddress.id : address[0].id
        }
        return null
    }

    const handelVerification = () => {
        setErr(null)

        const addressId = getAddressId()

        if (!addressId) {
            setErr("Please select a delivery address.")
            return
        }

        OrderService.CreateOrder(user.token, addressId, undefined, paymentType, coupon)
            .then(data => {
                setCart(null)
                setShowModal(true)
            })
            .catch(err => {
                setErr(err.message || "Something went wrong")
            })
    }

    const totalPrice = cart
        ? cart.reduce((sum, item) => sum + Number(item.product.price) * item.quantity, 0)
        : 0


    return (

        <LogLayout NavExist={true} >

            <div className="relative ">
                {/* STYLE (responsive): no more md:fixed / inset-s-1/7 (it made the form overlap the summary around 768px and get cut off on short screens).
                    The block is now a normal centered column: px-6 py-10 on phones, full screen height from md up */}
                <div className=" flex flex-col items-center justify-center
            text-white  gap-3 px-6 py-10 md:min-h-screen
            ">


                    {/* STYLE (responsive): w-full + max-w-84 - fills the phone width, never wider than 21rem */}
                    <div className="space-y-3 w-full max-w-84">
                        <h2 className="text-2xl font-bold"> Payment Method</h2>
                        <p className="text-sm text-gray-300">pick your payment method </p>

                        <div className="flex flex-col mt-6">


                            <div className="flex flex-row-reverse items-center gap-3  py-4 border-t">
                                <label className="flex-1 text-white text-base cursor-pointer" htmlFor="cash">
                                    Cash
                                </label>

                                <label className="relative flex items-center cursor-pointer" htmlFor="cash">
                                    <input
                                        name="payment"
                                        type="radio"
                                        value="CASH"
                                        id="cash"
                                        defaultChecked
                                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-white/70 checked:border-white transition-all"
                                        onChange={(e) => { setPaymentType(e.target.value) }}
                                    />
                                    <span className="pointer-events-none absolute top-1/2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-400 opacity-0 transition-opacity duration-200 peer-checked:opacity-100" />
                                </label>
                            </div>
                            <div className="flex flex-row-reverse items-center gap-3  py-4 ">
                                <label className="flex-1 text-white text-base cursor-pointer" htmlFor="syriatel">
                                    Syriatel
                                </label>

                                <label className="relative flex items-center cursor-pointer" htmlFor="syriatel">
                                    <input
                                        name="payment"
                                        type="radio"
                                        value="Syriatel"
                                        id="syriatel"
                                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-white/70 checked:border-white transition-all"
                                        onChange={(e) => { setPaymentType(e.target.value) }}
                                    />
                                    <span className="pointer-events-none absolute top-1/2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-400 opacity-0 transition-opacity duration-200 peer-checked:opacity-100" />
                                </label>
                            </div>
                            <div className="flex flex-row-reverse items-center gap-3  py-4 ">
                                <label className="flex-1 text-white text-base cursor-pointer" htmlFor="mtn">
                                    Mtn
                                </label>

                                <label className="relative flex items-center cursor-pointer " htmlFor="mtn">
                                    <input
                                        name="payment"
                                        type="radio"
                                        value="MTN"
                                        id="mtn"
                                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-white/70 checked:border-white transition-all"
                                        onChange={(e) => { setPaymentType(e.target.value) }}
                                    />
                                    <span className="pointer-events-none absolute top-1/2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-400 opacity-0 transition-opacity duration-200 peer-checked:opacity-100" />
                                </label>
                            </div>


                            <span className="mt-7 mb-2 text-sm text-gray-300">Delivery address</span>
                            <DropDown
                                title={SelectedAddress ? ` ${SelectedAddress.name},${SelectedAddress.street}` : "address"}
                                styleDrop='text-black h-12 justify-between rounded-lg border-s-[2px] border-white w-42 w-full'
                                styleMenu='text-black  border-pink-500 max-h-12 !w-full overflow-y-scroll [&::-webkit-scrollbar]:w-1
                    [&::-webkit-scrollbar-thumb]:bg-pink-400
                    [&::-webkit-scrollbar-thumb]:rounded-lg'>

                                {
                                    address ? address.map(item => (
                                        <button className="flex w-full p-2 hover:bg-pink-500" key={item.id} onClick={() => {
                                            setSelectedAddress(item)
                                        }}>{item.name},{item.street}</button>
                                    )) : <></>
                                }


                            </DropDown>

                            <div className="flex flex-col gap-2 mt-7">
                                <label htmlFor="discountCode" className="text-sm text-gray-300"> Discount Code</label>
                                <div className="flex gap-3">
                                    <BrandInput placeholder={"enter code"} divStyle={"flex-1"} inputStyle={"text-black h-12"} onInput={(e) => { setCoupon(e.target.value) }} />
                                    <DefaultBtn title={"Check"} icon={<IoReload />} btnStyle={"h-12 rounded-lg border border-white bg-transparent! text-white! shadow-none before:rounded-lg"} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-col px-6 py-6 md:h-auto md:self-start md:w-[calc(100%-2rem)] lg:w-full md:max-w-xl md:mx-auto md:my-8 md:p-5 lg:p-8 md:rounded-2xl md:border md:border-gray-200 md:bg-white md:shadow-md md:dark:border-gray-700 md:dark:bg-gray-800 dark:text-white ">

                <div className="flex items-baseline justify-between border-b border-gray-200 pb-4 md:text-black text-white dark:border-gray-700 dark:text-white">
                    <h2 className="text-2xl font-bold">Order summary</h2>
                    <span className="text-gray-300 md:text-gray-500 dark:text-gray-400">{cart ? cart.length : 0} items</span>
                </div>

                <div className="pb-2">
                    <div className="border-b border-gray-200 dark:border-gray-700 pb-2">
                        {cart ? cart.map(item => (

                            <Product
                                key={item.id}
                                img={item.product.image} title={item.product.name}
                                quantity={item.quantity}
                                price={item.product.price} />

                        )) : <></>}
                    </div>
                    <div className="mt-4 space-y-2 rounded-xl p-4 md:bg-gray-50 md:dark:bg-gray-700/40">
                        <p className="flex justify-between md:text-black text-white dark:text-white">
                            Subtotal: <span>{totalPrice}$</span>
                        </p>
                        <p className="flex justify-between text-gray-400 md:text-black dark:text-white">
                            Discount: <span className="font-semibold text-green-300 md:text-green-700">{coupon === "may26" ? `${(totalPrice * 0.25)}$ ` : " 0$"}</span>
                        </p>
                        <p className="flex justify-between text-gray-400 md:text-black dark:text-white">
                            Tax: <span>{totalPrice ? 4.000 : 0}$</span>
                        </p>
                    </div>
                </div>

                <div className="space-y-4 pt-5
                text-white md:text-black dark:text-white">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-xl font-bold">Total</p>
                            <p className="text-sm text-gray-300 md:text-gray-500 dark:text-gray-400">Paying with {paymentType === "CASH" ? "Cash" : paymentType}</p>
                        </div>
                        <span className="text-3xl lg:text-4xl font-bold text-pink-700">{totalPrice}$</span>
                    </div>

                    <BrandBtn title={<span className="flex items-center justify-center gap-2"><Lock className="h-5 w-5" />confirm Payment</span>} btnStyle={"rounded-lg w-full text-lg"} onClick={handelVerification} />
                    {err ? <div className="w-full rounded-md bg-red-50 p-3 text-sm text-red-600">{err} </div> : <></>}
                    <p className="text-center text-sm text-gray-300 md:text-gray-500 dark:text-gray-400">Your payment information is protected</p>
                    <Modal showModal={showModal} >
                        <div className=" relative bg-white before:absolute before:z-10 before:bg-pink-700 before:inset-s-0 before:inset-e-0 before:inset-bs-0 before:h-10 before:w-full rounded-md before:rounded-t-md dark:bg-gray-900 dark:text-white">
                            <img src={verify} alt="verify paid" className="absolute  inset-s-1/2 -translate-x-1/2 -inset-bs-18 z-20" />
                            <div className="flex flex-col items-center justify-center h-62 w-100 max-w-[90vw] px-10 ">
                                <p className="border-b mt-24 border-gray-200 pb-3">you have successfully paid for your
                                    order</p>
                                <BrandBtn title={"continue"} btnStyle={"rounded-md w-full mt-5"} onClick={() => { navigateTo('/orders') }} />
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>


        </LogLayout >

    )
}

export default Payment