import { NavLink } from "react-router"
export const ServiceCard = ({ serviceName, icon, img, ...props }) => {
    return (
        <NavLink to={"/product"} className="block "  {...props}>
            <div className="group relative shadow-md shadow-gray-200 dark:text-white dark:shadow-pink-300 rounded-sm  h-full w-full hover:scale-105 transition-transform duration-500">
                <div className=" w-full h-37.5 overflow-hidden rounded-t-md ">
                    <div className="bg-black/40 w-full h-37.5 absolute z-2"></div>
                    <img src={img} alt={serviceName} loading="lazy" className="w-full h-full object-cover object-center
               group-hover:scale-120 transition-transform duration-1000
                " />
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-200 absolute top-30 right-[5%] z-20
                    hover:scale-110 transition-transform duration-500
                    ">
                        {icon}
                    </div>      </div>
                <p className="py-8 ps-5">{serviceName}</p>
            </div>

        </NavLink>
    )
}
