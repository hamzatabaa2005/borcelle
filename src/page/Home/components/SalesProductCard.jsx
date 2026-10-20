import { NavLink } from "react-router"

export const SalesProductCard = ({ title, img, sale = 25, id }) => {
    return (
        <NavLink to={`/product/${id}`} className="flex flex-col w-full h-full gap-3 p-2.5 dark:text-white cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 ">
            <div className="w-full h-32 overflow-hidden rounded-md"><img src={img} alt={title} loading="lazy" className="w-full h-full object-cover object-center block" /></div>

            <div className="flex flex-col items-center justify-between gap-3 px-1 flex-1 text-center">
                < h3 className="text-sm leading-snug line-clamp-2 min-h-[2.6em]">{title}</h3>
                <span className="bg-[rgba(255,227,227,1)] text-[rgba(235,0,27,1)] py-1 px-5 rounded-full font-bold text-sm">
                    {sale + "%"}
                </span>
            </div>

        </NavLink>
    )
}
