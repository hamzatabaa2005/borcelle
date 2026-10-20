import { X } from "lucide-react"
import { useState } from "react"




export const OffCanvas = ({ children, isRtl = true, xColor = "text-black", IconColor = "text-black", OffCanvasStyle, icon, header, ...buttonProps }) => {
    const [isHidden, setIsHidden] = useState(true);

    return (
        <div className={`${isHidden ? "" : "before:bg-gray-300/60 dark:before:bg-gray-600/60 before:fixed before:inset-0 before:z-10  "} `} >
            <button onClick={() => {
                setIsHidden(!isHidden)
            }}>
                <span className={`${IconColor} `}>{icon}</span>
            </button>
            <div className={`${isHidden ? "hidden" : ""}  fixed z-50 inset-be-0 inset-bs-0 
            ${isRtl ? "inset-e-[15%] lg:inset-e-[50%] inset-s-0  " :
                    "inset-s-[10%] sm:inset-s-auto sm:w-105 inset-e-0"
                }
            transition-all ease-in-out duration-300 shadow-2xl overflow-y-auto dark:bg-gray-900  ${OffCanvasStyle} `}
            >
                <div className="flex flex-row-reverse justify-between items-center border-b border-gray-200 dark:border-gray-700">
                    <button onClick={() => {
                        setIsHidden(!isHidden)
                    }} {...buttonProps}>
                        <X className={`${xColor} m-4 cursor-pointer`} />
                    </button>
                    <h2 className="px-5 text-xl font-semibold dark:text-white">{header}</h2>
                </div>
                {children}
            </div>
        </div>
    )
}
