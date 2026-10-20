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

export const ProductCard = ({ image, name, price, description, rate = 5, originalPrice, numberOfOrders, isCol = true, is_favorite = false, id }) => {
    const { setCart } = useContext(CartContext);
    const [like, setLike] = useState(is_favorite);
    const { user } = useContext(UserContext);
    const { setFavorite } = useContext(FavoriteContext)
    function AddToFavorite() {
        setLike(true)
        FavoriteService.SetProductAsFavorite(id, user.token).then(data => {

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
    function RemoveFromFavorite() {
        setLike(false)
        FavoriteService.DeleteFromFavorite(id, user.token).then(data => {

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
        <div className={`group flex relative border border-gray-200 dark:border-gray-600 rounded-xl h-full overflow-hidden transition-shadow duration-300 hover:shadow-lg ${isCol ? " flex-col" : " gap-5"}`}>

            <div className={`rounded-t-md overflow-hidden shrink-0  ${isCol ? "h-48 sm:h-56 w-full" : " w-1/3 min-h-44"}`}>
                <img src={image} alt={name} loading="lazy" className="w-full h-full object-center object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>

            <div className="flex flex-1 p-4 gap-3 flex-col justify-between">
                <div className="space-y-2 pe-8">
                    <h3 className="font-semibold text-lg leading-snug line-clamp-2">{name}</h3>
                    <p className="font-bold text-xl">{price} ${originalPrice ? <del className="text-gray-400 ms-2 text-sm font-normal">{originalPrice}</del> : <></>} </p>
                </div>
                <div className="flex items-center gap-3 text-sm">
                    <Stars rate={rate} /> {!isCol ? <p>{numberOfOrders}</p> : ''}
                    {!isCol ? <p className="text-green-400">Free Shipping</p> : ''}

                </div>
                <div className="space-y-2 ">
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{description ? description.slice(0, 100) + (description.length > 100 ? "..." : "") : ""}</p>



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
                <div className={`flex items-center gap-3 mt-auto pt-3 border-t border-gray-100 dark:border-gray-700`}>
                    <BrandLink path={`/product/${id}`} title={"Show Details"} btnStyle={"rounded-md hover:bg-pink-400"} />
                    <DefaultBtn title={"Add to Cart"} onClick={AddProductToCart}
                        btnStyle={"rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-none  before:rounded-md"} />
                </div>

            </div>

        </div>
    )
}
