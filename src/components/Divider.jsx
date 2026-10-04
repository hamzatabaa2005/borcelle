import { FaCaretLeft } from "react-icons/fa";

export const Divider = ({ title = "" }) => {
    return (
        <div className=" w-full h-22 rounded-md flex items-center my-5 " style={{ background: "linear-gradient(109deg,rgba(240, 52, 93, 1) 22%, rgba(211, 163, 176, 1) 74%)" }}>
            {title &&
                <div className="text-white text-2xl flex gap-5 items-center ps-5"><FaCaretLeft className="h-32 text-3xl  " />{title}</div>}
        </div>
    )
}
