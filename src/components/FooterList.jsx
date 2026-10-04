import { NavLink } from "react-router"
export const FooterList = ({ title, items }) => {
    return (
        <>
            <ul>
                <h2 className="dark:text-white font-bold mb-2
                ">{title}</h2>
                {items.map((item, index) => {
                    return (
                        <li key={index} className="  text-gray-600 dark:text-white  hover:text-pink-500 transition-colors duration-500"><NavLink to={item.link} >
                            {item.name}</NavLink></li >
                    )
                })}
            </ul >
        </>

    )
}
