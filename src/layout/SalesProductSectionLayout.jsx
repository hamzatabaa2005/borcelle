import { Children } from 'react'

export const SalesProductSectionLayout = ({ children }) => {
    const [SectionCardChild,
        ProductChild1, ProductChild2, ProductChild3, ProductChild4,
        ProductChild5] = Children.toArray(children);
    return (
        <section className="lg:grid hidden lg:grid-cols-6 my-5 xl:mx-0 md:ms-0  sm:me-8 sm:ms-5 mx-5 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 overflow-hidden  ">
            <div className="lg:col-span-2">

                <div className="w-full  h-full">
                    {SectionCardChild}
                </div>
            </div>

            <div className='lg:col-span-4 grid lg:grid-cols-5 md:grid-cols-2'>
                <div className="border-s border-gray-300 dark:border-gray-700 ">
                    {ProductChild1}

                </div>
                <div className="border-s border-gray-300 dark:border-gray-700">
                    {ProductChild2}
                </div>
                <div className="  border-s border-gray-300 dark:border-gray-700">
                    {ProductChild3}
                </div>
                <div className=" border-s border-gray-300 dark:border-gray-700">
                    {ProductChild4}
                </div>
                <div className="   border-s border-gray-300 dark:border-gray-700">
                    {ProductChild5}
                </div>
            </div>

        </section>
    )
}
