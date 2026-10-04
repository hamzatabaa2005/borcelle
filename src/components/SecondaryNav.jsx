
import { DropDown } from "./BrandBtn"
import { NavLink } from "react-router"

export const SecondaryNav = () => {
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

            </div>
        </div>
    )
}
