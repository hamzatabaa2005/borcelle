import { Stars } from "../../../components/Stars"
import { Heart } from "lucide-react"
import { PiHeartFill } from "react-icons/pi"
import { useContext, useState } from "react"
import { UserContext } from "../../../context/UserContext/UserContext"
import { BrandLink, DefaultBtn } from "../../../components/BrandBtn"
import { FavoriteService } from "../../../services/FavoriteService"
import { CartContext } from "../../../context/CartContext/CartContext"
import { ProductService } from "../../../services/ProductService"
import { CartService } from "../../../services/CartService"
import { FavoriteContext } from "../../../context/FavoriteContext/FavoriteContext"
// import { Product } from "../../product/Product"
export const ProductCard = ({ image, name, price, description, rate = 5, originalPrice, numberOfOrders, isCol = true, is_favorite, id }) => {
    const { setCart } = useContext(CartContext);
    const [like, setLike] = useState(is_favorite);
    const { user } = useContext(UserContext);
    const { setFavorite } = useContext(FavoriteContext)

    function AddToFavorite() {
        setLike(true)
        console.log(user.token)
        FavoriteService.SetProductAsFavorite(id, user.token).then(data => {
            console.log(data)
        })
            .catch(err => {
                console.log(err)
            })
            .finally(
                () => {
                    FavoriteService.GetFavorite(user.token).then(
                        product => {

                            if (product.data.length === 0) {
                                setFavorite(null)

                            }
                            else {
                                setFavorite(product.data)
                            }
                        }
                    )
                }
            )
    }
    function RemoveFromFavorite() {
        setLike(false)
        console.log(user.token)
        FavoriteService.DeleteFromFavorite(id, user.token).then(data => {
            console.log(data)
        })
            .catch(err => {
                console.log(err)
            }).finally(
                () => {
                    FavoriteService.GetFavorite(user.token).then(
                        product => {

                            if (product.data.length === 0) {
                                setFavorite(null)

                            } else {
                                setFavorite(product.data)
                            }
                        }
                    )
                }
            )
    }

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
        <div className={`flex relative border border-gray-200 dark:border-gray-600 rounded-lg h-120 ${isCol ? " flex-col" : " gap-5"}`}>

            <div className={`rounded-t-md overflow-hidden  shrink-0  ${isCol ? "h-1/2 w-full" : "h-full w-1/3"}`}>
                <img src={image} alt={name} loading="lazy" className="w-full h-full object-center object-cover" />
            </div>

            <div className={`flex p-2 dark:text-white  ${isCol ? "relative flex-col gap-3" : ""}`}>
                {!isCol ? <p>{name}</p> : <></>}
                <p>{price}{originalPrice ? <del className="text-gray-400 ms-2  ">{originalPrice}</del> : <></>} </p>
                <div className="flex gap-3">
                    <Stars rate={rate} /> {!isCol ? <p>{numberOfOrders}</p> : ''}
                    {!isCol ? <p className="text-green-400">Free Shipping</p> : ''}

                </div>
                <div className="space-y-2 ">
                    <p >{description ? description.slice(0, 100) : ""}</p>



                    <button
                        onClick={like ? RemoveFromFavorite : AddToFavorite}
                        className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-md bg-white/90 p-2 text-pink-600 shadow-md  transition-transform hover:scale-110  dark:bg-gray-800/90 dark:text-pink-500"
                    >
                        {like ? (
                            <PiHeartFill className="h-5 w-5 text-pink-600 dark:text-pink-500" />
                        ) : (
                            <Heart className="h-5 w-5 text-gray-400 hover:text-pink-600 dark:text-gray-400" />
                        )}
                    </button>

                </div>
                <div className={`flex item-center   gap-3`}>
                    <BrandLink path={`/product/${id}`} title={"Show Details"} btnStyle={"rounded-md hover:bg-pink-400"} />
                    <DefaultBtn title={"Add to Cart"} onClick={AddProductToCart}
                        btnStyle={"rounded-md dark:bg-gray-700 dark:text-white shadow-none  before:rounded-md"} />
                </div>
            </div>

        </div>
    )
}
