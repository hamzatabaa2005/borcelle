import { LogLayout } from "../../layout/LogLayout"
import { AuthForm } from "./components/AuthForm"
import { LeftSide } from "./components/LeftSide"
import { BrandBtn, DefaultLink, Otp } from "../../components/BrandBtn"
import Timer from "../../components/Timer"
import { AuthService } from "../../services/AuthService"
import { useContext, useState } from "react"
import { useNavigate } from "react-router"
import { UserContext } from "../../context/UserContext/UserContext"


const Verification = () => {

    const { setUser, user } = useContext(UserContext);


    const navigateTo = useNavigate();

    const [OTP, SetOTP] = useState(
        {
            OTP1: "",
            OTP2: "",
            OTP3: "",
            OTP4: "",
            OTP5: "",
        }
    )
    const [seconds, setSeconds] = useState(10);


    const phone = sessionStorage.getItem('verification')


    function handleResend() {
        setSeconds(10)
        AuthService.ResendService(phone)
    }

    function handelVerification(e) {
        e.preventDefault();

        const otp = Object.values(OTP).join('');
        AuthService.VerificationService(otp, phone)
            .then((userInfo) => {
                console.log(userInfo)
                setUser({
                    email: userInfo.data.email,
                    id: userInfo.data.id,
                    img: userInfo.data.img,
                    name: userInfo.data.name,
                    phone: userInfo.data.phone,
                    token: userInfo.data.token
                });
                localStorage.setItem("user_info", JSON.stringify(userInfo.data))
                navigateTo("/")
            }).catch().finally(
                console.log(user))
    }

    return (
        <>
            <LogLayout>



                <LeftSide />
                {/* the number must be dynamic */}
                <AuthForm title="Verification" description={`Enter the code we send to : ${phone}`} onSubmit={handelVerification}>
                    <div className="flex flex-col items-center gap-4 justify-center mt-6" >

                        <Otp OTP={OTP} SetOTP={SetOTP} />
                        <BrandBtn title="verify" btnStyle={"w-10/12 rounded-xl before:rounded-xl"}

                        />

                        <Timer title="Didn’t receive code ?" seconds={seconds} setSeconds={setSeconds} >
                            <button onClick={handleResend}>resend</button>
                        </Timer>
                        <div className="flex gap-2 w-10/12 md:text-gray-500 text-white items-center">
                            <div className=" w-[50%] border-b md:border-black"></div>   <span>or</span> <div className=" w-[50%]  border-b md:border-black"></div>
                        </div>
                        <DefaultLink path={"/login"} title="Go back" btnStyle={"block w-10/12 rounded-xl before:rounded-xl border border-pink-700"} />

                    </div>
                </AuthForm>


            </LogLayout >
        </>
    )
}

export default Verification