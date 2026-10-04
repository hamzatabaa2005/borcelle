import { IoCallOutline } from "react-icons/io5";
import { BrandBtn, BrandInput, DefaultLink } from "../../components/BrandBtn"
import { LogLayout } from "../../layout/LogLayout"
import { AuthForm } from "./components/AuthForm"
import { LeftSide } from "./components/LeftSide"
import { AuthService } from "../../services/AuthService";
import { useState } from "react";
import { useNavigate } from "react-router";
const Login = () => {


    const [error, setError] = useState(null)

    const [phoneNumber, setPhoneNumber] = useState("");
    const navigateTo = useNavigate()

    function handelPhoneNumber(e) {
        setPhoneNumber(e.target.value)

    }

    let isNumberValidate = () => (phoneNumber.length > 0 && !/^(?:[1-9]\d{8}|0\d{9})$/.test(phoneNumber))

    function handelLogin(e) {
        e.preventDefault();
        setError(null)
        AuthService.LoginService(phoneNumber)
            .then(() => {
                sessionStorage.setItem("verification", phoneNumber)
                navigateTo("/verification")
            })
            .catch(err => {
                setError(err)
            })
            .finally()
    }

    return (
        <>
            <LogLayout  >
                <LeftSide />

                <AuthForm title="welcome!" description="Please Log in to continue" onSubmit={handelLogin}>

                    <div className="flex flex-col items-center gap-2 justify-center mt-16">

                        <BrandInput placeholder={"Add Number "} type="tel" divStyle={"w-10/12"} inputStyle={"border border-gray-300  w-full"} icon={<IoCallOutline />} onInput={handelPhoneNumber} required />
                        {isNumberValidate() ?
                            <div className="text-red-800 dark:text-pink-400">
                                Phone number must be 9 digits (or 10 digits starting with 0)
                            </div> : <></>}

                        {error && <p className="  bg-amber-200 rounded-md w-10/12 text-center px-2 py-4 break-all" >{error.message}</p>}

                        <BrandBtn title="Log in" btnStyle={"w-10/12 rounded-xl before:rounded-xl"} disabled={(!/^(?:[1-9]\d{8}|0\d{9})$/.test(phoneNumber) && phoneNumber.length > 0)} />
                        <div className="flex gap-2 w-10/12 md:text-gray-500 text-white items-center">
                            <div className=" w-[50%] border-b md:border-black"></div>   <span>or</span> <div className=" w-[50%]  border-b md:border-black"></div>
                        </div>
                        <DefaultLink path={"/registration"} title="Register " btnStyle={"block w-10/12 rounded-xl before:rounded-xl border border-pink-700"} />
                    </div>
                </AuthForm>


            </LogLayout >
        </>
    )
}

export default Login