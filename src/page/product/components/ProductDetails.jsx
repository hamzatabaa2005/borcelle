import { BiMessage } from "react-icons/bi"
import { Stars } from "../../../components/Stars"
import { ShoppingCartPlus } from "lucide-react"
import { useContext } from "react"
import { BrandBtn } from "../../../components/BrandBtn"
import { CartService } from "../../../services/CartService"
import { ProductService } from "../../../services/ProductService"
import { UserContext } from "../../../context/UserContext/UserContext"
import { CartContext } from "../../../context/CartContext/CartContext"

export const ProductDetails = ({ inStock = true, title = "", rate = 5, numberOfReview = 50, numberOfSold = 100,
    price = "", sku = "", category = "", color = "", description = "", id }) => {

    const { user } = useContext(UserContext);
    const { setCart } = useContext(CartContext);
    function AddProductToCart() {

        ProductService.GetProductsByID(id).
            then(pro => {
                CartService.AddToCart(pro.data.id, 1, user.token)
                    .then(data => {
                        console.log(data)
                    })

            })
            .catch(err => {
                console.log(err)
            }).
            finally(CartService.GetCart(user.token).then(UserProduct => {
                setCart(UserProduct.data)
            }))


    }

    return (
        <div className="flex flex-col gap-4 p-5 dark:text-white">

            <div>
                {inStock ? <p className="text-green-500">in stock</p>
                    : <p className="text-red-500">out stock</p>
                }
                <h2 className="text-3xl font-bold">
                    {title}
                </h2>
            </div>

            <div className="flex items-center gap-4">
                <Stars rate={rate} />
                <div className="flex items-center text-gray-500 gap-2 dark:text-white">
                    <BiMessage />
                    {numberOfReview} reviews
                </div>
                <div className="flex items-center text-gray-500 gap-2 dark:text-white">
                    <ShoppingCartPlus />
                    {numberOfSold} sold
                </div>
            </div>

            <div className="flex  p-5 gap-8 w-full rounded-md bg-orange-200/80 dark:bg-pink-950">

                <p className="text-2xl text-red-500 dark:text-white font-extrabold">{price}$</p>

            </div>





            <div className="flex flex-col     border-b border-gray-300 dark:border-gray-600 pb-3 gap-3">

                <div className="flex justify-between 
                    items-center px-5">
                    <p className="text-gray-500 dark:text-white">SKU:</p>
                    <span>{sku}</span>
                </div>
                <div className="flex justify-between 
                    items-center px-5">
                    <p className="text-gray-500 dark:text-white">Category:</p>
                    <span>{category}</span>
                </div>
                <div className="flex justify-between 
                    items-center px-5">
                    <p className="text-gray-500 dark:text-white">Color:</p>
                    <span>{color}</span>
                </div>
            </div>

            <div className="flex flex-col     border-b border-gray-300 dark:border-gray-600 gap-3 pb-3">

                <p>{description}</p>
            </div>
            <BrandBtn title={"Add to Cart"} onClick={AddProductToCart}
                btnStyle={"rounded-md  dark:bg-gray-700 dark:text-white shadow-none  before:rounded-md"} />

        </div>
    )
}
