import { NavLink } from "react-router"




export const Error404 = () => {




    return (




        <div className="flex items-center justify-center h-screen dark:bg-gray-900">

            <div className="flex flex-col space-y-5">
                <span className="text-4xl text-pink-600">
                    Error404
                </span>
                <NavLink to={"/"} className={"text-blue-600 relative before:absolute before:inset-s-0 hover:before:w-full before:inset-be-0 before:h-[0.1rem] before:bg-blue-600"}>Click here to redirect</NavLink>
            </div>


        </div>

    )
}
