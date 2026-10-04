import { NavLink } from "react-router"

export const SalesProductCard = ({ title, img, sale = 25, id }) => {
    return (
        <NavLink to={`/product/${id}`} className="flex flex-col w-full h-full gap-5 dark:text-white cursor-pointer ">
            <div className="w-full   h-42 overflow-hidden"><img src={img} alt={title} loading="lazy" className="w-full h-full object-fit object-center inline-block" /></div>
            <div className="py-3 flex flex-col items-center justify-between  mb-2 px-2 h-1/2">
                < h3>{title}</h3>
                <span className="bg-red-300 text-red-700 p-2 px-4 rounded-2xl">
                    {sale + "%"}
                </span>
            </div>

        </NavLink>
    )
}
