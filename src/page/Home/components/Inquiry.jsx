import { BrandAreaInput, BrandBtn, BrandInput, DropDown } from "../../../components/BrandBtn"

export const Inquiry = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-10  bg-center bg-no-repeat bg-cover w-full rounded-sm lg:p-0 " style={{ backgroundImage: `url("/src/assets/inquery.png")` }}>

            <div className="text-white lg:ps-14 lg:pt-24 lg:pe-0 lg:pb-0 p-8 space-y-4">
                <h2 className="text-3xl font-bold">An easy way to send requests to all suppliers</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                <BrandBtn title={"send inquiry"} btnStyle={"rounded-md before:rounded-md w-42 lg:hidden"} />

            </div>

            <form className="lg:flex hidden flex-col p-4 m-24 dark:text-white bg-white rounded-md gap-3 dark:bg-gray-900"
            >
                <h2 className="font-bold ">Send quote to suppliers</h2>
                <BrandInput placeholder={"What item you need"} divStyle={"border border-gray-100 w-full"} />

                <BrandAreaInput divStyle={"border border-gray-100 w-full"} placeholder={"Type More Details"} />

                <div className="flex  gap-5">
                    <BrandInput divStyle={"border border-gray-100 "} placeholder={"Quantity"} />

                    <DropDown title={"pcs"} >
                        <div className="p-2 cursor-pointer hover:bg-gray-300 dark:hover:bg-pink-600">10</div>
                        <div className="p-2 cursor-pointer hover:bg-gray-300 dark:hover:bg-pink-600">50</div>
                        <div className="p-2 cursor-pointer hover:bg-gray-300 dark:hover:bg-pink-600">100</div>
                    </DropDown>


                </div>
                <BrandBtn title={"send inquiry"} btnStyle={"rounded-md before:rounded-md w-42"} />
            </form>
        </div >
    )
}
