import { BrandAreaInput, BrandBtn, BrandInput, DropDown } from "../../../components/BrandBtn";

export const Inquiry = () => {
    return (
        <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-center bg-no-repeat bg-cover w-full rounded-md p-6 lg:p-12 relative overflow-hidden"
            style={{ backgroundImage: ` url("/src/assets/inquery.png")` }}
        >
            <div className="text-white space-y-4 max-w-lg">
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                    An easy way to send requests to all suppliers
                </h2>
                <p className="text-sm lg:text-base text-gray-100 opacity-90">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                </p>
                <BrandBtn title={"send inquiry"} btnStyle={"rounded-md before:rounded-md w-42 lg:hidden"} />
            </div>

            <form className="lg:flex hidden flex-col p-6 dark:text-white bg-white rounded-md gap-4 dark:bg-gray-900 shadow-lg justify-self-end w-full max-w-md">
                <h2 className="font-bold text-lg">Send quote to suppliers</h2>

                <BrandInput placeholder={"What item you need"} divStyle={"border border-gray-200 w-full"} />

                <BrandAreaInput divStyle={"border border-gray-200 w-full"} placeholder={"Type More Details"} />

                <div className="flex gap-3 items-center">
                    <BrandInput divStyle={"border border-gray-200 flex-1"} placeholder={"Quantity"} />

                    <DropDown title={"pcs"}>
                        <div className="p-2 cursor-pointer hover:bg-gray-300 dark:hover:bg-pink-600">10</div>
                        <div className="p-2 cursor-pointer hover:bg-gray-300 dark:hover:bg-pink-600">50</div>
                        <div className="p-2 cursor-pointer hover:bg-gray-300 dark:hover:bg-pink-600">100</div>
                    </DropDown>
                </div>

                <BrandBtn title={"send inquiry"} btnStyle={"rounded-md before:rounded-md w-full mt-2"} />
            </form>
        </div>
    );
};