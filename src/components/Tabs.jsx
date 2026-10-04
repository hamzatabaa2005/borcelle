import { useState } from "react"

export const Tabs = ({ tabs, tabsContent }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id)

    return (
        <>

            <div className="flex flex-wrap border-b border-gray-300">
                {
                    tabs.map((tab) => (
                        <button className={`py-3 px-6 font-medium text-sm rounded-t-md cursor-pointer transition-colors duration-500 
                            ${activeTab === tab.id ? "border-b-2 border-pink-500 text-pink-500 bg-pink-200 bg-opacity-50 " : "text-gray-400 hover:text-pink-500 hover:bg-pink-200 hover:bg-opacity-30"}`} key={tab.id} onClick={() => {
                                setActiveTab(tab.id)
                            }}>
                            {tab.label}
                        </button>
                    ))
                }
            </div>
            < div className="mt-1">
                {tabsContent[activeTab]}
            </ div >


        </>
    )
}

