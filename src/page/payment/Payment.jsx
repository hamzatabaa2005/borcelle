import { BrandBtn, BrandInput, DefaultBtn } from "../../components/BrandBtn"
import { LogLayout } from "../../layout/LogLayout"
import { IoReload } from "react-icons/io5"
import { Product } from "./Product"
import { Modal } from "../../components/Modal"
import { useState } from "react"
import verify from "/src/assets/verify.png"

const initialProducts = [
    {
        id: 1,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6iYqpg7MNrx_jeWmJQTlW9LK3kVgAO6BGvKJjez308Q&s=10",
        title: "Backed Bread",
        desc: "Special GoPro cameras",
        price: 600,
        count: 2,
    },
    {
        id: 2,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6iYqpg7MNrx_jeWmJQTlW9LK3kVgAO6BGvKJjez308Q&s=11",
        title: "Greeze Face Wipe",
        desc: "Special GoPro cameras",
        price: 600,
        count: 2,
    },
    {
        id: 3,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6iYqpg7MNrx_jeWmJQTlW9LK3kVgAO6BGvKJjez308Q&s=12",
        title: "GoPro Cameras",
        desc: "Special GoPro cameras",
        price: 600,
        count: 2,
    },


];

const Payment = () => {
    const [showModal, setShowModal] = useState(false)


    const handelVerification = () => {
        setShowModal(!showModal)

    }



    return (

        <LogLayout NavExist={true} >

            <div className=" flex flex-col items-center justify-center
            text-white  gap-3 h-full
            ">

                <div className="space-y-3">
                    <h2 className="text-xl"> Payment Method</h2>
                    <p className="text-gray-300">pick your payment method </p>

                    <div className="flex flex-col mt-15 gap-5">


                        <div className="inline-flex justify-between">

                            <label className="ml-2 text-white-600 cursor-pointer text-sm" htmlFor="cash">
                                Cash
                            </label>
                            <label className="relative flex items-center cursor-pointer" htmlFor="cash">
                                <input
                                    name="payment"
                                    type="radio"
                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-pink-300 checked:border-pink-400 transition-all"
                                    id="cash"
                                    checked
                                />
                                <span className="absolute bg-pink-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                            </label>

                        </div>
                        <div className="inline-flex justify-between">

                            <label className="ml-2 text-white-600 cursor-pointer text-sm" htmlFor="syriatel">
                                syrialtel
                            </label>
                            <label className="relative flex items-center cursor-pointer" htmlFor="syriatel">
                                <input
                                    name="payment"
                                    type="radio"
                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-pink-300 checked:border-pink-400 transition-all"
                                    id="cash"
                                    checked
                                />
                                <span className="absolute bg-pink-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                            </label>

                        </div>
                        <div className="inline-flex justify-between">

                            <label className="ml-2 text-white-600 cursor-pointer text-sm" htmlFor="mtn">
                                Mtn
                            </label>
                            <label className="relative flex items-center cursor-pointer" htmlFor="mtn">
                                <input
                                    name="payment"
                                    type="radio"
                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-pink-300 checked:border-pink-400 transition-all"
                                    id="cash"
                                    checked
                                />
                                <span className="absolute bg-pink-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                            </label>

                        </div>


                        <div className="flex flex-col gap-3">
                            <label htmlFor="discountCode"> Discount Code</label>
                            <div className="flex gap-5">
                                <BrandInput placeholder={"enter code"} inputStyle={"text-black"} />
                                <DefaultBtn title={"Check"} icon={<IoReload />} btnStyle={"text-pink-800 rounded-md shadow-none before:rounded-md"} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="flex flex-col  px-4 h-full py-3 md:dark:bg-gray-900 dark:text-white">

                <div className="border-b border-gray-200 pb-2 ">
                    <div className="border-b border-gray-200 pb-2">
                        {initialProducts.map(item => (

                            <Product
                                key={item.id}
                                img={item.img} title={item.title}
                                desc={item.desc}
                                quantity={item.count}
                                price={item.price} />

                        ))}
                    </div>
                    <p className="flex justify-between md:text-black text-white">
                        Total: <span>110.000</span>
                    </p>
                    <p className="flex justify-between text-gray-400 md:text-black ">
                        Discount: <span>0</span>
                    </p>
                    <p className="flex justify-between text-gray-400 md:text-black ">
                        tax: <span>4.000</span>
                    </p>
                </div>

                <div className="space-y-2 py-2
                text-white md:text-black">
                    <p className="flex justify-between ">
                        Total: <span className="text-3xl text-pink-700">110.000</span>
                    </p>

                    <BrandBtn title={"confirm Payment"} btnStyle={"rounded-md w-full"} onClick={handelVerification} />

                    <Modal showModal={showModal} >
                        <div className=" relative bg-white before:absolute before:z-10 before:bg-pink-700 before:inset-s-0 before:inset-e-0 before:inset-bs-0 before:h-10 before:w-full rounded-md before:rounded-t-md dark:bg-gray-900 dark:text-white">
                            <img src={verify} alt="verify paid" className="absolute  inset-s-30 -inset-bs-18 z-20" />
                            <div className="flex flex-col items-center justify-center h-62 w-100 px-10 ">
                                <p className="border-b mt-24 border-gray-200 pb-3">you have successfully paid for your
                                    order</p>
                                <BrandBtn title={"continue"} btnStyle={"rounded-md w-full mt-5"} onClick={handelVerification} />
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>


        </LogLayout >

    )
}

export default Payment