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
        <div className="flex flex-col justify-between rounded-md overflow-hidden group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xs hover:shadow-md transition-all duration-300 dark:text-white pb-4">

            <div className="relative w-full h-52 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
            </div>

            <div className="flex flex-col gap-1.5 p-4 flex-grow">
                <p className="text-lg font-bold text-gray-900 dark:text-white">{price}$</p>
                <p className="text-sm text-gray-500 dark:text-gray-300 line-clamp-2">{title}</p>
            </div>

            <div className="px-4">
                <DefaultBtn
                    title={"Move to cart"}
                    btnStyle={"shadow-none border border-gray-200 dark:border-gray-700 rounded-md text-pink-600 dark:text-pink-400 w-full py-2 text-sm font-medium hover:bg-pink-50 dark:hover:bg-gray-800 transition-colors before:rounded-md"}
                    onClick={AddProductToCart}
                />
            </div>
        </div>
    )
}
