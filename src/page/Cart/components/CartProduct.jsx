import { useContext, useEffect, useState } from "react"
import { DefaultBtn } from "../../../components/BrandBtn"
import { Counter } from '../../../components/Counter'
import { CiMenuKebab } from "react-icons/ci";
import { CartService } from "../../../services/CartService";
import { UserContext } from "../../../context/UserContext/UserContext";
import { CartContext } from "../../../context/CartContext/CartContext";
export const CartProduct = ({ img, desc, size, seller, price, quantity = 0, id, containerId }) => {
    const [count, setCount] = useState(quantity);
    const [showMenu, setShowMenu] = useState(0);
    const { user } = useContext(UserContext)
    const { setCart } = useContext(CartContext)



    function addProductQuantity() {
        const newCount = count + 1;
        setCount(newCount)

        CartService.AddToCart(id, newCount, user.token).then().catch().finally(() => {

            CartService.GetCart(user.token
            ).then(product => {
                setCart(product.data)
            })
        })

    }
    function MinusProductQuantity() {
        if (count === 1)
            return;
        const newCount = count - 1;
        setCount(newCount)

        CartService.AddToCart(id, newCount, user.token).then().catch().finally(() => {

            CartService.GetCart(user.token
            ).then(product => {
                setCart(product.data)
            })
        })
    }

    function DeleteProduct() {
        CartService.DeleteFromCart(containerId, user.token).then()
        CartService.GetCart(user.token
        ).then(product => {

            setCart(product.data)
        }).catch().finally(() => {
            CartService.GetCart(user.token
            ).then(product => {
                setCart(product.data)

            })
        })
    }
    return (
        <div className="md:flex  justify-between border-b border-gray-300 dark:border-gray-600 p-5 dark:text-white">
            <div className="flex space-between gap-2">
                <div className="shrink-0 h-full w-32 border-2 border-gray-200 dark:border-gray-600 overflow-hidden rounded-md ">
                    {img && <img src={img} alt={desc} className="w-full h-full object-cover object-center" />}
                </div>
                <div className="space-y-1">
                    <p>{desc}</p>
                    <div>
                        <p className="text-gray-500 dark:text-white">size:{size}</p>
                        <p className="text-gray-500 dark:text-white">{seller}</p>
                    </div>
                    <div className="lg:flex hidden w-82 gap-5 mt-3">
                        <DefaultBtn title={"Remove "} btnStyle={"shadow-none border border-gray-200 rounded-md text-pink-600 w-32 ms-2 before:rounded-md dark:bg-gray-700"} onClick={DeleteProduct} />
                        <DefaultBtn title={"Save for later"} btnStyle={"shadow-none border border-gray-200 rounded-md text-pink-600 w-32 ms-2 before:rounded-md  dark:bg-gray-700"} />
                    </div>

                </div>

                <button onClick={() => {
                    setShowMenu(!showMenu)
                }} className="relative   text-gray-800 hover:text-pink-600 md:hidden ms-auto dark:text-white"> <CiMenuKebab className="text-2xl" />

                    {showMenu ?
                        <div className="flex flex-col p-4 gap-4 absolute -top-24 -right-16  h-32 border border-gray-300 dark:border-gray-600 rounded-md bg-white/70 dark:text-white">
                            <DefaultBtn title={"Remove "} btnStyle={"shadow-none border border-gray-200 rounded-md text-pink-600 w-32 ms-2 before:rounded-md dark:bg-gray-700"} onClick={DeleteProduct} />
                            <DefaultBtn title={"Save for later"} btnStyle={"shadow-none border border-gray-200 rounded-md text-pink-600 w-32 ms-2 before:rounded-md dark:bg-gray-700"} />

                        </div>
                        :
                        <></>}

                </button>

            </div>

            <div className="md:block flex justify-between items-center md:mt-0 mt-4 ">
                <p className="order-1 md:mb-4 md:order-0">{price * quantity}$</p>
                <Counter count={count} setCount={setCount} onClick1={MinusProductQuantity} onClick2={addProductQuantity} />
            </div>
        </div >
    )
}