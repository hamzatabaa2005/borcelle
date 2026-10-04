import { useContext, useEffect, useState } from "react"
import { CartContext } from "./CartContext"
import { CartService } from "../../services/CartService"
import { UserContext } from "../UserContext/UserContext"

export const CartProvider = ({ children }) => {
    const { user } = useContext(UserContext)
    const [cart, setCart] = useState(null)

    useEffect(() => {


        if (!user.token) {
            return;
        }

        CartService.GetCart(user.token).then(cart => {
            setCart(cart.data)
        })

    }
        , [user?.token])

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}
