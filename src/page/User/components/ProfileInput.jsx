import { BrandInput } from "../../../components/BrandBtn"

export const ProfileInput = ({ label, placeholder, id, onInput }) => {
    return (
        <div className="ps-3 flex flex-col gap-2 ">
            <label htmlFor={id} className="dark:text-white">{label}</label>
            <BrandInput id={id} placeholder={placeholder} divStyle={"shadow-md"} inputStyle={"dark:bg-gray-700 dark:text-white"} onInput={onInput} />
        </div>
    )
}
