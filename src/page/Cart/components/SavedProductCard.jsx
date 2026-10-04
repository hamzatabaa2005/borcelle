import { useContext } from "react";
import { DefaultBtn } from "../../../components/BrandBtn"
import { CartService } from "../../../services/CartService";
import { ProductService } from "../../../services/ProductService";
import { CartContext } from "../../../context/CartContext/CartContext";
import { UserContext } from "../../../context/UserContext/UserContext";

export const SavedProductCard = ({ img, price, title, id }) => {
    const { setCart } = useContext(CartContext);
    const { user } = useContext(UserContext);
    function AddProductToCart() {

        ProductService.GetProductsByID(id).
            then(pro => {
                CartService.AddToCart(pro.data.id, 1, user.token)
                    .then(data => {
                        console.log(data)
                    }).catch().
                    finally(() => {
                        CartService.GetCart(user.token).then(UserProduct => {
                            setCart(UserProduct.data)
                        })
                    })

            })
            .catch(err => {
                console.log(err)
            })


    }
    return (
        <div className="flex flex-col gap-3 rounded-md overflow-hidden group dark:text-white">
            <div className="relative inline-block w-full h-53 ">
                <img src={img} alt={title} className="w-full h-full object-cover object-center" />
                <div className="bg-black/0 w-full h-full absolute top-0 left-0 inset-0 group-hover:bg-black/30 transition-all duration-500" ></div>
            </div>
            <div className="flex flex-col gap-3 ps-2 h-32  ">
                <p className="font-bold">{price}</p>
                <p className="text-gray-400 dark:text-white">{title}</p>

            </div>
            <DefaultBtn title={"Move to cart "} btnStyle={"shadow-none border border-gray-200 rounded-md text-pink-600 w-32 ms-2 before:rounded-md group-hover:w-1/2 duration-500  dark:bg-gray-800"} onClick={AddProductToCart} />
        </div>
    )
}
