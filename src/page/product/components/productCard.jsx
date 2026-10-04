
export const ProductCard = ({ img, desc, price, isCol }) => {

    return (
        <div className={`flex    ${isCol ? " flex-col" : " items-center"} h-full w-full  dark:text-white  
      `}>

            <div className={`rounded-md overflow-hidden ${isCol ? " h-1/2 w-full" : " h-24 w-24"}`}>
                <img src={img} alt={desc} loading="lazy"
                    className="w-full h-full object-center object-cover" />
            </div>

            <div className={`flex gap-2 p-2  ${isCol ? " flex-col" : " w-[calc(100%-96px)]"}`}>
                <p className=" dark:text-white"> {desc}</p>
                <p className="text-gray-300 dark:text-white"> {price}</p>
            </div>

        </div>
    )
}
