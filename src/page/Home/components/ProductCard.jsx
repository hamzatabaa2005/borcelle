import { NavLink } from "react-router"


export const ProductCard = ({ title, currency, price, img, isCol, id }) => {
    return (
        <NavLink to={`/product/${id}`} className={`flex w-full h-full gap-3 p-3 dark:text-white cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 ${isCol ? "flex-col " : "items-center"}`}>
            <div className={`flex-1 min-w-0 flex flex-col justify-center ${isCol ? "order-1 px-1" : ""}`}>
                < h3 className="text-sm leading-snug line-clamp-2">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-white mt-1">from {currency}, {price}</p>
            </div>
            <div className={`overflow-hidden rounded-md shrink-0 ${isCol ? "w-full h-42" : "w-18 h-18"}`}>
                <img src={img} alt={title} loading="lazy" className="w-full h-full object-cover object-center block" /></div>
        </NavLink>
    )
}
