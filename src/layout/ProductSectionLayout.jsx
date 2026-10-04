import { Children } from "react"

export const ProductSectionLayout = ({ children }) => {
    const [SectionCardChild,
        ProductChild1, ProductChild2, ProductChild3, ProductChild4,
        ProductChild5, ProductChild6, ProductChild7, ProductChild8] = Children.toArray(children);
    return (
        <section className="lg:grid hidden lg:grid-cols-6 my-5 xl:mx-0  sm:me-8 sm:ms-5 mx-8 rounded-sm overflow-hidden ">
            <div className="col-span-2">

                <div className=" border border-gray-300 dark:border-gray-700 h-full">
                    {SectionCardChild}
                </div>
            </div>
            <div className="grid grid-rows-2 grid-cols-1    ">
                <div className=" border border-gray-300 dark:border-gray-700 pt-2 ps-2">{ProductChild1}</div>
                <div className=" border border-gray-300 dark:border-gray-700 pt-2 ps-2">{ProductChild2}</div>

            </div>
            <div className="grid grid-rows-2 grid-cols-1 ">
                <div className=" border border-gray-300 dark:border-gray-700 pt-2 ps-2 ">{ProductChild3}</div>
                <div className="border border-gray-300 dark:border-gray-700 pt-2 ps-2">{ProductChild4}</div>

            </div>
            <div className="grid grid-rows-2 grid-cols-1   ">
                <div className="border border-gray-300 dark:border-gray-700 pt-2 ps-2">{ProductChild5}</div>
                <div className="border border-gray-300 dark:border-gray-700 pt-2 ps-2">{ProductChild6}</div>

            </div>
            <div className="grid grid-rows-2 grid-cols-1    ">
                <div className=" border border-gray-300 dark:border-gray-700 pt-2 ps-2">{ProductChild7}</div>
                <div className=" border border-gray-300  dark:border-gray-700 pt-2 ps-2">{ProductChild8}</div>

            </div>



        </section>
    )
}
