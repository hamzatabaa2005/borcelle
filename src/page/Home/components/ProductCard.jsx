import { NavLink } from "react-router"


export const ProductCard = ({ title, currency, price, img, isCol, id }) => {
    return (
        <NavLink to={`/product/${id}`} className={`flex w-full h-full gap-5 dark:text-white cursor-pointer ${isCol ? "flex-col " : ""}`}>
            <div className={`w-10/12 ${isCol ? "order-1 px-4" : ""}`}>
                < h3>{title}</h3>
                <p className="text-gray-500 dark:text-white">from {currency}, {price}</p>
            </div>
            <div className={` w-full  overflow-hidden ${isCol ? " h-42" : " h-[75%] mt-auto"} `}>
                <img src={img} alt={title} loading="lazy" className="w-full h-full object-fit object-center inline-block" /></div>
        </NavLink>
    )
}
