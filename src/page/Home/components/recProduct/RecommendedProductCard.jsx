import { NavLink } from "react-router"
export const RecommendedProductCard = ({ price, description, img, id, ...props }) => {
    return (
        <NavLink to={`/product/${id}`} className="block shadow-md dark:shadow-gray-800 shadow-gray-300 rounded-sm overflow-hidden hover:translate-x-1 dark:text-white hover:shadow-pink-300 dark:hover:shadow-pink-800 hover:shadow-lg hover:-translate-y-4 transition-transform duration-500 hover:cursor-pointer"  {...props} >
            <div className=" w-full h-50 ">
                <img src={img} alt={description} loading="lazy" className="w-full h-full object-cover object-center" />
            </div>
            <div className="ms-2 py-2 space-y-2">
                <p className="bold">${price}</p>
                <p className="text-gray-600 dark:text-white">{description}</p>
            </div>
        </NavLink>
    )
}
