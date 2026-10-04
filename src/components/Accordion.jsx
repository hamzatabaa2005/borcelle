import { ChevronRight } from "lucide-react"
import { useState } from "react"

export const Accordion = ({ header, children, headerStyle }) => {
    const [isExpanded, setIsExpand] = useState(false)
    return (
        <div className={`bg-white border-t border-gray-300 dark:border-pink-700 dark:bg-gray-800 dark:text-white overflow-hidden transition-all duration-300 ${headerStyle} ${isExpanded ? "min-h-96 " : "max-h-20"}`}>
            <div className="flex justify-between items-start p-6 cursor-pointer" onClick={() => {
                setIsExpand(!isExpanded)
            }}>
                {header}
                < ChevronRight className={`text-4xl transition-all duration-300 ${isExpanded ? "rotate-90" : ""}`} />
            </div >


            <div className={`px-5 pb-5 overflow-hidden transition-all duration-300 ${isExpanded
                ? "opacity-100 " : "opacity-0"
                }`}>
                <div>
                    {children}
                </div>
            </div>
        </div >
    )
}
