import { BrandLink, DefaultLink } from "../../../components/BrandBtn"
import { RiGlobalLine } from "react-icons/ri";
import { MdOutlineVerifiedUser } from "react-icons/md";
const defImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKnU4XtQ8y81rbY0iIvDf4dCwvjl-ckN2P-cLgmEdo7w&s"

export const SupplierCard = ({ img = defImg, supplierName, country, isVerified }) => {
    return (
        <div className="border border-gray-200 dark:border-gray-600 p-4 rounded-md dark:text-white">

            <div className=" pb-4 border-b border-gray-200 flex gap-2 ">
                <div className="h-8 w-8 rounded-md overflow-hidden"><img src={img} alt={supplierName} className="h-full w-full object-center object-cover" /></div>
                <div >
                    <p>{supplierName}</p>
                </div>
            </div>
            <div className="flex flex-col gap-1 my-3 text-gray-500 dark:text-white">
                <p>{country}</p>
                {isVerified ? <p className="flex items-center gap-2"><MdOutlineVerifiedUser /> Verified Saller </p> : <></>}
                <p className="flex items-center gap-2"> <RiGlobalLine /> WorldWide Shipping</p>
            </div>

            <div className="flex flex-col my-3 gap-2">

                <BrandLink title={"send inquiry"} btnStyle={"rounded-md before:rounded-md w-full hover:bg-pink-500"} />
                <DefaultLink title={"Seller's profile "} btnStyle={"shadow-none border border-gray-200 rounded-md text-pink-600 w-full before:rounded-md dark:bg-gray-700"} />

            </div>

        </div>
    )
}
