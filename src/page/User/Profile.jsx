import ContainerLayout from "../../layout/ContainerLayout"
import { NavLayout } from "../../layout/NavLayout"
import { Divider } from "../../components/Divider"
import { SectionLayout } from "../../layout/SectionLayout"
import { ProfileLink } from "./components/ProfileLink"
import { ProfileInput } from "./components/ProfileInput"
import { UserCard } from "./components/UserCard"
import { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext/UserContext"
import { BrandBtn } from "../../components/BrandBtn"
import { UserService } from "../../services/UserService"
const Profile = () => {
    const { user, setUser } = useContext(UserContext);
    const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKnU4XtQ8y81rbY0iIvDf4dCwvjl-ckN2P-cLgmEdo7w&s"
    const links = [
        {
            link: "/favorite",
            title: "Wishlist page"
        },
        {
            link: "/about-us",
            title: "About us page"
        },
        {
            link: "/address",
            title: "address"
        },
        {
            link: "/terms-and-conditions",
            title: "Terms and condition"
        },
        {
            link: "/admin",
            title: "Dashboard"
        },
        {
            link: "/contact-uS",
            title: "Contact-US"
        },
    ]

    const [firstName, setFirstName] = useState("")

    function handleChange() {

        UserService.updateUserName(user.token, firstName)
            .then(() => {
                console.log(firstName)
                setUser({ ...user, name: firstName })
            })
            .catch(err => { console.log(err) })
            .finally(

        )
    }

    return (
        <div className="dark:bg-gray-900 h-screen">
            <ContainerLayout>
                <NavLayout>

                    <Divider />

                    <div className="flex justify-between items-center">
                        <UserCard name={`${user.name ? user.name : "anonymous"}`} email={`${user.email ? user.email : "email@gmail.com"}`} img={`${user.image ? user.image : img}`} />
                        <BrandBtn title="Save Change" btnStyle={" rounded-md before:rounded-md"} onClick={handleChange} />
                    </div>

                    <div className=" md:space-y-0 space-y-8 grid md:grid-cols-2 gap-x-10  ">
                        <ProfileInput label={"Nick Name"} placeholder={"your Nick Name"} id={"nickName"} />

                        <ProfileInput label={"First Name"} placeholder={"your First Name"} id={"firstName"} onInput={(e) => {

                            setFirstName(e.target.value)
                        }} />

                    </div>

                    <SectionLayout title={"Settings"} styleSection={"space-y-5 "}>
                        <div className="grid sm:grid-cols-3 grid-cols-2 md:gap-x-16 sm:gap-x-10 gap-5 "
                        >
                            {links.map((item, index) => (
                                <ProfileLink key={index} link={item.link} title={item.title} />
                            ))}


                        </div>
                    </SectionLayout>

                </NavLayout>
            </ContainerLayout>
        </div>
    )
}

export default Profile