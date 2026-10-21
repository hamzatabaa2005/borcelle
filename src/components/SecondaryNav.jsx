import { useContext } from "react"
import { DropDown } from "./BrandBtn"
import { NavLink } from "react-router"
import { ThemeContext } from "../context/ThemeContext/ThemeContext"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { FaMoon, FaSun } from "react-icons/fa6"

export const SecondaryNav = () => {
    const { mode, toggleMode } = useContext(ThemeContext);
    return (
        <div className=" border-b- border-t-  border-gray-400 md:block hidden dark:text-white ">
            <div className="md:flex items-center justify-between w-full max-w-7xl mx-auto hidden ">
                <div className="flex items-center gap-5 lg:ms-0 ms-5">
                    <div className=" flex gap-2 items-center justify-center hover:text-pink-600">
                        <NavLink to="/products">All Products</NavLink>
                    </div>
                    <div className=" flex items-center justify-center hover:text-pink-600">
                        <NavLink to="">Hot offers</NavLink>
                    </div>
                    <div className="flex items-center justify-center hover:text-pink-600">
                        <NavLink to="">Gift Box</NavLink>
                    </div>
                    <div className="flex items-center justify-center hover:text-pink-600">
                        <NavLink to="">About US</NavLink>
                    </div>
                    <div className=" flex items-center justify-center ">
                        <DropDown
                            title="Help"
                            styleDrop=' h-11  border-white shadow-none hover:text-pink-600'
                        >
                            <NavLink to="/contact-us" className={"block p-2 cursor-pointer hover:bg-gray-300"}>
                                Contact-us
                            </NavLink>
                            <NavLink to="/Services" className={"block p-2 cursor-pointer hover:bg-gray-300"}>
                                CustomerService
                            </NavLink>
                            <NavLink to="/FAQ" className={"block p-2 cursor-pointer hover:bg-gray-300"}>
                                FAQ
                            </NavLink>
                        </DropDown>
                    </div>
                </div>


                <div className="flex items-center justify-around gap-3 me-5 py-2 px-3 lg:me-0  w-32">
                    <span className="text-xl "><LanguageSwitcher /></span>
                    <button className='px-2 py-2 rounded-full bg-pink-700 text-white  shadow-md' onClick={toggleMode} >{mode === "light" ? <FaMoon /> : <FaSun />}</button>
                </div>
            </div>
        </div>
    )
}