import { useContext, useState } from "react"
import { Counter } from "./Counter"
import { TrashIcon } from "lucide-react"
import { UserContext } from "../context/UserContext/UserContext"
import { CartService } from "../services/CartService"
import { CartContext } from "../context/CartContext/CartContext"

export const CartProduct = ({ img, title, desc, price, quantity = 1, id, containerId }) => {
    const { setCart } = useContext(CartContext)

    const [count, setCount] = useState(quantity);
    const { user } = useContext(UserContext)

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
        CartService.DeleteFromCart(containerId, user.token).then().catch(err => { console.log(err) }).finally(() => {

            CartService.GetCart(user.token
            ).then(product => {
                setCart(product.data)
            })
        })
    }
    return (
        <div className="relative grid grid-cols-[6rem_1fr_auto] items-start py-4 border-b border-gray-200 dark:border-gray-700 dark:text-white gap-4">
            <div className="relative w-full aspect-square"><img src={img} alt={title} className="w-full h-full object-cover object-center rounded-md border border-gray-200 dark:border-gray-700" />
                <span className="absolute -top-2 -inset-e-2 flex w-6 h-6 items-center justify-center rounded-full border-2 border-pink-700 bg-white text-xs font-semibold text-pink-700">{count}</span></div>
            <div className="min-w-0 space-y-2">
                <p className="text-base font-semibold leading-snug line-clamp-2">{title}</p>
                <p className="text-gray-500 dark:text-white">{desc ? desc : ""}</p>
                <div className="flex items-center gap-3">
                    <Counter count={count} setCount={setCount} onClick1={MinusProductQuantity} onClick2={addProductQuantity} />
                    <button className="text-red-500 hover:text-red-600 cursor-pointer" onClick={DeleteProduct}>
                        <TrashIcon />
                    </button>
                </div>
            </div>
            <div className="flex justify-end text-pink-700 text-lg font-semibold">
                {price * quantity}$
            </div>
        </div>
    )
}
