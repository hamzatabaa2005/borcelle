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
                console.log(product)
                setCart(product.data)
            })
        })
    }
    return (
        <div className="relative grid grid-cols-3 my-2 dark:text-white gap-3">
            <div className="w-full h-full overflow-hidden rounded-md "><img src={img} alt={title} className="w-full h-full object-cover object-center" />
                <span className="absolute top-0 inset-e-2 flex w-6 h-6  items-center justify-center rounded-full border-2 border-pink-700 text-pink-700">{count}</span></div>
            <div >
                <p className="text-xl font-bold ">{title}</p>
                <p className="text-gray-500 dark:text-white">{desc ? desc : ""}</p>
                <div className="flex gap-2 ">
                    <Counter count={count} setCount={setCount} onClick1={MinusProductQuantity} onClick2={addProductQuantity} />
                    <button className="text-red-500 cursor-pointer" onClick={DeleteProduct}>
                        <TrashIcon />
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-end
            text-pink-700 text-2xl">
                {price * quantity}$
            </div>
        </div>
    )
}
