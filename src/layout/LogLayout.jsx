import { Children } from "react";
import { Navbar } from "../components/Navbar";


export const LogLayout = ({ children, NavExist = false }) => {

    const [leftChild, rightChild] = Children.toArray(children);

    return (

        <div className="">
            <div className="dark:bg-gray-900">     {NavExist && <Navbar />}</div>
            <div className="grid  md:grid-cols-2 relative min-h-screen ">
                <div className="md:h-screen  md:relative" >

                    <img src="/src/assets/LogLayout.png" alt="Borcelle store " className=" inset-0 absolute -z-10 h-full bg-center w-full bg-none" />
                    {leftChild}

                </div>
                <div>
                    {rightChild}
                </div>

            </div>
        </div>
    )
}
