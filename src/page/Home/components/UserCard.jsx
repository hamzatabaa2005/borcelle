import { useContext } from "react"
import { BrandLink, DefaultLink } from "../../../components/BrandBtn"
import { UserContext } from "../../../context/UserContext/UserContext"


export const UserCard = ({ img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKnU4XtQ8y81rbY0iIvDf4dCwvjl-ckN2P-cLgmEdo7w&s" }) => {

    const { user } = useContext(UserContext);
    return (
        <div className="flex flex-col gap-2 p-2 bg-blue-100 dark:bg-gray-700 rounded-md m-2">

            <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full overflow-hidden ">
                    <img src={img} alt={`user ${user.name ? user.name : ""}`} className="w-full h-full object-cover object-center" />


                </div>
                <div>
                    <p className="dark:text-white">{user.name ? user.name : "Hi, user let’s get stated"}</p>
                </div>
            </div>
            {user.id ?
                <></>
                :
                <>
                    <BrandLink title="Join now" path={"/registration"} btnStyle={"rounded-md before:rounded-md w-full hover:bg-pink-500"} />
                    <DefaultLink title=" login" path={"/login"} btnStyle={"rounded-md before:rounded-md w-full border border-gray-200 text-pink-700 dark:bg-gray-700 dark:border-pink-700"} />
                </>}
        </div>
    )
}
