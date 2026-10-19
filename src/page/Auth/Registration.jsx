import { BrandBtn, BrandInput, DefaultLink } from "../../components/BrandBtn"
import { LogLayout } from "../../layout/LogLayout"
import { AuthForm } from "./components/AuthForm"
import { LeftSide } from "./components/LeftSide"


import { FaRegCircleUser } from "react-icons/fa6";
import { IoMailOutline, IoCallOutline } from "react-icons/io5";
import { ImgInput } from "./components/ImgInput";
import { useState } from "react";
import { AuthService } from "../../services/AuthService";
import { useNavigate } from "react-router";

export const Registration = () => {

    const navigateTo = useNavigate();

    const [error, setError] = useState(null)
    const [form, setForm] = useState(
        {
            img: "",
            imgFile: null,
            name: "",
            email: "",
            phoneNumber: "",
        }
    )

    function handelName(e) {
        setForm({ ...form, name: e.target.value })
    }

    function handelEmail(e) {
        setForm({ ...form, email: e.target.value })

    }

    function handelPhoneNumber(e) {

        setForm({ ...form, phoneNumber: e.target.value })

    }

    function handelRegistration(e) {
        e.preventDefault();
        setError(null)
        const { name, email, phoneNumber, imgFile
        } = form;

        AuthService.RegisterService(name, email, phoneNumber, imgFile)
            .then((data) => {
                navigateTo("/login")
            })
            .catch(err => {
                setError(err)
            })
            .finally()

    }

    let isNumberValidate = () => (form.phoneNumber.length > 0 && !/^(?:[1-9]\d{8}|0\d{9})$/.test(form.phoneNumber))
    let isEmailValidate = () => (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email) && form.email.length > 0)

    function handleImg(e) {
        const file = e.target.files[0]

            ; if (file) {
                const link = URL.createObjectURL(file);

                setForm({ ...form, img: link, imgFile: file });

            }
    }

    return (
        <LogLayout>
            <LeftSide />
            <AuthForm title={"Fill your Information"} description={"Enter your details"} onSubmit={handelRegistration}>
                <div className="flex flex-col items-center gap-4 justify-center">

                    <ImgInput onChange={handleImg} img={form.img} />

                    <BrandInput placeholder={"Name"} divStyle={"w-1/2"} inputStyle={"border border-gray-300  w-full"} icon={<FaRegCircleUser />}
                        onInput={handelName}
                        required
                    />
                    {(form.name.length < 3 && form.name.length > 1) ?
                        <div className="text-red-800 dark:text-pink-400">
                            Name should be more than 3 character
                        </div> : <></>}
                    <BrandInput placeholder={"Email"} type="email" divStyle={"w-1/2"} inputStyle={"border border-gray-300  w-full"} icon={<IoMailOutline />}
                        onInput={handelEmail}
                    />
                    {isEmailValidate() ?
                        <div className="text-red-800 dark:text-pink-400">
                            enter the correct form user@gmail.com
                        </div> : <></>}
                    <BrandInput placeholder={"Add Number "} regex={/^(?:[1-9]\d{8}|0\d{9})$/} divStyle={"w-1/2"} inputStyle={"border border-gray-300  w-full"} icon={<IoCallOutline />}
                        onInput={handelPhoneNumber}
                        required
                    />
                    {isNumberValidate() &&
                        <div className="text-red-800 dark:text-pink-400">
                            Phone number must be 9 digits (or 10 digits starting with 0)
                        </div>}

                    {error && <p className="bg-amber-200 rounded-md w-1/2 text-center px-2 py-4 break-all" >{error.message}</p>}

                    <BrandBtn title={"Save"} btnStyle={"rounded-md before:rounded-md w-1/2"} disabled={(isNumberValidate && form.name.length < 1)} />
                    <div className="flex gap-2 w-1/2 md:text-gray-500 text-white items-center">
                        <div className=" w-[50%] border-b md:border-black"></div>   <span>or</span> <div className=" w-[50%]  border-b md:border-black"></div>
                    </div>
                    <DefaultLink path={"/login"} title="Log in " btnStyle={"block w-1/2 rounded-md before:rounded-md border border-pink-700"} />

                </div>
            </AuthForm>
        </LogLayout>
    )
}
