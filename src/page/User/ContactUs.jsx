import { BrandAreaInput, BrandBtn, BrandInput } from "../../components/BrandBtn"
import { Divider } from "../../components/Divider"
import ContainerLayout from "../../layout/ContainerLayout"
import { NavLayout } from "../../layout/NavLayout"

import { FaRegCircleUser } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { ContactUsService } from "../../services/ContactUsService";
import { useState } from "react";


const ContactUs = () => {

    const [form, setForm] = useState(
        {
            name: "",
            email: "",
            message: "",
        }
    )
    const [err, setErr] = useState(null)


    function handleForm(e) {
        e.preventDefault()
        const { email, message } = form
        ContactUsService.ContactUs(email, message).then(data => {

        })
            .catch(err => {
                setErr(err)
            }).finally()
    }

    return (
        <div className="dark:bg-gray-900 h-screen">
            <ContainerLayout>
                <NavLayout>



                    <Divider title="Contact us page" />
                    <form className="p-5 space-y-14" onSubmit={handleForm}>

                        <BrandInput placeholder={"Name.."} divStyle={"shadow-[0_0_0_1px] shadow-gray-300 dark:shadow-gray-800"} icon={<FaRegCircleUser />} onInput={(e) => {
                            setForm({ ...form, name: e.target.value })
                        }} />
                        <BrandInput placeholder={"Email"} divStyle={"shadow-[0_0_0_1px] shadow-gray-300 dark:shadow-gray-800"} icon={<IoMailOutline />} required onInput={(e) => {
                            setForm({ ...form, email: e.target.value })
                        }} />
                        <BrandAreaInput placeholder={"Write message"} divStyle={"shadow-[0_0_0_1px] shadow-gray-300 dark:shadow-gray-800"} icon={<MdOutlineMessage />} required onInput={(e) => {
                            setForm({ ...form, message: e.target.value })
                        }} />

                        {err && <p className="  bg-amber-200 rounded-md w-full text-center px-2 py-4 break-all" >{err.message}</p>}

                        <BrandBtn title={"Send"} btnStyle={"rounded-md before:rounded-md w-full"} />
                    </form>


                </NavLayout>

            </ContainerLayout>
        </div>
    )
}
export default ContactUs