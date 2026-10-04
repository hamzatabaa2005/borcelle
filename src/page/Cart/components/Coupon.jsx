import { BrandInput, DefaultBtn } from "../../../components/BrandBtn"

export const Coupon = () => {
    return (
        <div className="flex  flex-col gap-5 border border-gray-200 dark:border-gray-600 rounded-md dark:text-white p-5 md:justify-normal md:justify-items-normal ">
            <label htmlFor="coupon" className="text-gray-600 dark:text-white">Have a coupon?</label>
            <div className="flex w-10/12 border border-gray-200 dark:border-gray-600 rounded-md">
                <BrandInput placeholder={"Add coupon"} inputStyle={"rounded-e-none"} />
                <DefaultBtn title="Apply" btnStyle={"shadow-none text-pink-500 border-s border-gray-200 before:rounded-e-md w-1/2 dark:bg-gray-700 justify-center rounded-e-md"} />
            </div>
        </div>

    )
}
