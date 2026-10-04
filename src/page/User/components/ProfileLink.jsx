import { NavLink } from "react-router"
import { FaCaretRight } from "react-icons/fa";
export const ProfileLink = ({ link, title }) => {
    return (
        <NavLink to={link} className="bg-gray-100 flex justify-between px-2 py-3 rounded-md items-center hover:bg-white dark:bg-gray-700 dark:text-white dark:hover:bg-pink-600">
            {title}

            <FaCaretRight className="text-pink-500 text-2xl" />
        </NavLink>

    )
}
