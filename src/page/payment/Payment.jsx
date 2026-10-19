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

// const initialProducts = [
//     {
//         id: 1,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6iYqpg7MNrx_jeWmJQTlW9LK3kVgAO6BGvKJjez308Q&s=10",
//         title: "Backed Bread",
//         desc: "Special GoPro cameras",
//         price: 600,
//         count: 2,
//     },
//     {
//         id: 2,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6iYqpg7MNrx_jeWmJQTlW9LK3kVgAO6BGvKJjez308Q&s=11",
//         title: "Greeze Face Wipe",
//         desc: "Special GoPro cameras",
//         price: 600,
//         count: 2,
//     },
//     {
//         id: 3,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6iYqpg7MNrx_jeWmJQTlW9LK3kVgAO6BGvKJjez308Q&s=12",
//         title: "GoPro Cameras",
//         desc: "Special GoPro cameras",
//         price: 600,
//         count: 2,
//     },
//     {
//         id: 4,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6iYqpg7MNrx_jeWmJQTlW9LK3kVgAO6BGvKJjez308Q&s=12",
//         title: "GoPro Cameras",
//         desc: "Special GoPro cameras",
//         price: 600,
//         count: 2,
//     },
//     {
//         id: 5,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6iYqpg7MNrx_jeWmJQTlW9LK3kVgAO6BGvKJjez308Q&s=12",
//         title: "GoPro Cameras",
//         desc: "Special GoPro cameras",
//         price: 600,
//         count: 2,
//     },
//     {
//         id: 6,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6iYqpg7MNrx_jeWmJQTlW9LK3kVgAO6BGvKJjez308Q&s=12",
//         title: "GoPro Cameras",
//         desc: "Special GoPro cameras",
//         price: 600,
//         count: 2,
//     },


// ];

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

        AddressService.GetAddress(user.token).then(data => {

            setAddress(data.data)
        })
    }, [])

    const handelVerification = () => {
        setErr(null)
        OrderService.CreateOrder(user.token, SelectedAddress ? SelectedAddress.id : Default(address)[0].id, undefined, paymentType, coupon).then(
            data => {
                setCart(null)
                setShowModal(!showModal)
            }
        ).catch(err => {
            setErr(err.message)
        })

    }

    function Default(address) {
        return (address ? address.map((item, index, address) => {
            if (item.is_default) return item
            else if (index === address.length) return null
        }) : "address")
    }
    const totalPrice = cart
        ? cart.reduce((sum, item) => sum + Number(item.product.price) * item.quantity, 0)
        : 0
    return (

        <LogLayout NavExist={true} >

            <div className="relative">
                <div className=" flex flex-col items-center justify-center
            text-white  gap-3 h-full md:fixed inset-s-1/7
            ">

                    <div className="space-y-3">
                        <h2 className="text-xl"> Payment Method</h2>
                        <p className="text-gray-300">pick your payment method </p>

                        <div className="flex flex-col mt-15 gap-5">


                            <div className="inline-flex items-center gap-2 justify-between">
                                <label className="text-white text-sm cursor-pointer" htmlFor="cash">
                                    Cash
                                </label>

                                <label className="relative flex items-center cursor-pointer" htmlFor="cash">
                                    <input
                                        name="payment"
                                        type="radio"
                                        value="CASH"
                                        id="cash"
                                        defaultChecked
                                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-pink-300 checked:border-pink-400 transition-all"
                                        onChange={(e) => { setPaymentType(e.target.value) }}
                                    />
                                    <span className="pointer-events-none absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-800 opacity-0 transition-opacity duration-200 peer-checked:opacity-100" />
                                </label>
                            </div>
                            <div className="inline-flex items-center gap-2 justify-between">
                                <label className="text-white text-sm cursor-pointer" htmlFor="syriatel">
                                    Syriatel
                                </label>

                                <label className="relative flex items-center cursor-pointer" htmlFor="syriatel">
                                    <input
                                        name="payment"
                                        type="radio"
                                        value="Syriatel"
                                        id="syriatel"
                                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-pink-300 checked:border-pink-400 transition-all"
                                        onChange={(e) => { setPaymentType(e.target.value) }}
                                    />
                                    <span className="pointer-events-none absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-800 opacity-0 transition-opacity duration-200 peer-checked:opacity-100" />
                                </label>
                            </div>
                            <div className="inline-flex  items-center gap-2 justify-between">
                                <label className="text-white text-sm cursor-pointer" htmlFor="mtn">
                                    Mtn
                                </label>

                                <label className="relative flex items-center cursor-pointer " htmlFor="mtn">
                                    <input
                                        name="payment"
                                        type="radio"
                                        value="MTN"
                                        id="mtn"
                                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-pink-300 checked:border-pink-400 transition-all"
                                        onChange={(e) => { setPaymentType(e.target.value) }}
                                    />
                                    <span className="pointer-events-none absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-800 opacity-0 transition-opacity duration-200 peer-checked:opacity-100" />
                                </label>
                            </div>







                            <DropDown
                                title={SelectedAddress ? ` ${SelectedAddress.name},${SelectedAddress.street}` : "address"}
                                styleDrop='text-black  h-11   justify-between border-s-[2px] border-white w-42  w-full '
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

                            <div className="flex flex-col gap-3">
                                <label htmlFor="discountCode"> Discount Code</label>
                                <div className="flex gap-5">
                                    <BrandInput placeholder={"enter code"} inputStyle={"text-black"} onInput={(e) => { setCoupon(e.target.value) }} />
                                    <DefaultBtn title={"Check"} icon={<IoReload />} btnStyle={"text-pink-800 rounded-md shadow-none before:rounded-md"} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-col  px-4 h-full py-3 md:dark:bg-gray-900 dark:text-white">

                <div className="border-b border-gray-200 pb-2 ">
                    <div className="border-b border-gray-200 pb-2">
                        {cart ? cart.map(item => (

                            <Product
                                key={item.id}
                                img={item.product.image} title={item.product.name}
                                quantity={item.quantity}
                                price={item.product.price} />

                        )) : <></>}
                    </div>
                    <p className="flex justify-between md:text-black text-white dark:text-white">
                        Total: <span>{totalPrice}</span>
                    </p>
                    <p className="flex justify-between text-gray-400 md:text-black dark:text-white">
                        Discount: <span>{coupon ? "25 % " : " 0"}</span>
                    </p>
                    <p className="flex justify-between text-gray-400 md:text-black dark:text-white">
                        tax: <span>{totalPrice ? 4.000 : 0}</span>
                    </p>
                </div>

                <div className="space-y-2 py-2
                text-white md:text-black dark:text-white">
                    <p className="flex justify-between ">
                        Total: <span className="text-3xl text-pink-700">{totalPrice}</span>
                    </p>

                    <BrandBtn title={"confirm Payment"} btnStyle={"rounded-md w-full"} onClick={handelVerification} />
                    {err ? <div className="w-full text-red-600">{err} </div> : <></>}
                    <Modal showModal={showModal} >
                        <div className=" relative bg-white before:absolute before:z-10 before:bg-pink-700 before:inset-s-0 before:inset-e-0 before:inset-bs-0 before:h-10 before:w-full rounded-md before:rounded-t-md dark:bg-gray-900 dark:text-white">
                            <img src={verify} alt="verify paid" className="absolute  inset-s-30 -inset-bs-18 z-20" />
                            <div className="flex flex-col items-center justify-center h-62 w-100 px-10 ">
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