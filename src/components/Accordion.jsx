import { ChevronDown } from "lucide-react"
import { useState } from "react"

export const Accordion = ({ header, children, headerStyle }) => {
    const [isExpanded, setIsExpand] = useState(false)
    return (
        <div className={`bg-white border-t border-gray-300 dark:border-pink-700 dark:bg-gray-800 dark:text-white overflow-hidden ${headerStyle}`}>
            {/* STYLE: row header - compact padding, chevron points down and flips up when open */}
            <div className="flex justify-between items-center px-5 py-4 font-medium cursor-pointer" onClick={() => {
                setIsExpand(!isExpanded)
            }}>
                {header}
                <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
            </div >

            {/* STYLE: the panel grows to its real content height (grid rows 0fr -> 1fr), so there is no fixed max-height and it animates smoothly */}
            <div className={`grid transition-all duration-300 ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                    <div className="px-5 pb-5">
                        {children}
                    </div>
                </div>
            </div>
        </div >
    )
}
