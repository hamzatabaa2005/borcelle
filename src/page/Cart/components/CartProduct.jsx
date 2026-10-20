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
        <div className="md:flex justify-between items-center border-b border-gray-300 dark:border-gray-600 p-5 dark:text-white">

            <div className="flex gap-4 w-full">
                <div className="shrink-0 h-28 w-28 md:h-32 md:w-32 border-2 border-gray-200 dark:border-gray-600 overflow-hidden rounded-md">
                    {img && <img src={img} alt={desc} className="w-full h-full object-cover object-center" />}
                </div>

                <div className="flex flex-col justify-between flex-grow space-y-1">
                    <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{desc ? desc.slice(0, 100) + (desc.length > 100 ? "..." : "") : ""}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-300">Size: {size}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-300">{seller}</p>
                    </div>

                    <div className="lg:flex hidden gap-3 mt-3">
                        <DefaultBtn
                            title={"Remove"}
                            btnStyle={"shadow-none border border-gray-200 rounded-md text-pink-600 px-4 py-1 before:rounded-md dark:bg-gray-700"}
                            onClick={DeleteProduct}
                        />
                        <DefaultBtn
                            title={"Save for later"}
                            btnStyle={"shadow-none border border-gray-200 rounded-md text-pink-600 px-4 py-1 before:rounded-md dark:bg-gray-700"}
                        />
                    </div>
                </div>

                <div className="relative md:hidden">
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="text-gray-800 hover:text-pink-600 dark:text-white p-1"
                        aria-label="Menu"
                    >
                        <CiMenuKebab className="text-2xl" />
                    </button>

                    {showMenu && (
                        <div className="flex flex-col p-3 gap-2 absolute top-8 right-0 z-30 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 shadow-md">
                            <DefaultBtn
                                title={"Remove"}
                                btnStyle={"shadow-none border border-gray-200 rounded-md text-pink-600 w-28 before:rounded-md dark:bg-gray-700"}
                                onClick={DeleteProduct}
                            />
                            <DefaultBtn
                                title={"Save for later"}
                                btnStyle={"shadow-none border border-gray-200 rounded-md text-pink-600 w-28 before:rounded-md dark:bg-gray-700"}
                            />
                        </div>
                    )}
                </div>
            </div>

            <div className="flex md:flex-col justify-between items-center md:items-end md:mt-0 mt-4 pt-3 md:pt-0 border-t md:border-t-0 border-gray-200 dark:border-gray-700">
                <p className="text-lg font-bold order-0 md:mb-4">
                    {price * quantity}$
                </p>
                <Counter
                    count={count}
                    setCount={setCount}
                    onClick1={MinusProductQuantity}
                    onClick2={addProductQuantity}
                />
            </div>
        </div>
    )
}