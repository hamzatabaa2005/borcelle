
export const DiscountBox = ({ title, description }) => {
    return (
        <div className="h-24 w-full rounded flex justify-between items-center px-8 my-3" style={{ background: `linear-gradient(59deg,rgba(208,68,98,1)55%,rgba(157,39,64,1)12%)` }}>
            <div >
                <h2 className="text-white">{title}</h2>
                <p className="text-gray-300">{description}</p>
            </div>

            <button className={` bg-amber-500 hover:bg-amber-400  px-3 py-2 my-2 text-center text-white  cursor-pointer rounded-md h-10  `}
            >shopNow</button>
        </div >
    )
}
