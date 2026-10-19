
import { Divider } from "../../components/Divider"
import ContainerLayout from "../../layout/ContainerLayout"
import { NavLayout } from "../../layout/NavLayout"
import { TermsCard } from "./components/TermsCard"


const TermsAndCondition = () => {



    const termsAndCondition = [
        {
            id: 1,
            title: "Acceptance of Terms",
            desc: "By using this application, you acknowledge that you have read, understood, and agree to fully comply with these terms. If you do not agree with these terms, please do not use the application. The application management reserves the right to modify these terms at any time, and you will be notified of updates when necessary."
        },
        {
            id: 2,
            title: "Account Creation and Use",
            desc: "By using this application, you acknowledge that you have read, understood, and agree to fully comply with these terms. If you do not agree with these terms, please do not use the application. The application management reserves the right to modify these terms at any time, and you will be notified of updates when necessary."
        },
        {
            id: 3,
            title: "Acceptance of Terms",
            desc: "By using this application, you acknowledge that you have read, understood, and agree to fully comply with these terms. If you do not agree with these terms, please do not use the application. The application management reserves the right to modify these terms at any time, and you will be notified of updates when necessary."
        },
        {
            id: 4,
            title: "Intellectual Property Rights",
            desc: "By using this application, you acknowledge that you have read, understood, and agree to fully comply with these terms. If you do not agree with these terms, please do not use the application. The application management reserves the right to modify these terms at any time, and you will be notified of updates when necessary."
        },
        {
            id: 5,
            title: "Account Creation and Use",
            desc: "By using this application, you acknowledge that you have read, understood, and agree to fully comply with these terms. If you do not agree with these terms, please do not use the application. The application management reserves the right to modify these terms at any time, and you will be notified of updates when necessary."
        },
        {
            id: 6,
            title: "Acceptance of Terms",
            desc: "By using this application, you acknowledge that you have read, understood, and agree to fully comply with these terms. If you do not agree with these terms, please do not use the application. The application management reserves the right to modify these terms at any time, and you will be notified of updates when necessary."
        },
        {
            id: 7,
            title: "Acceptance of Terms",
            desc: "By using this application, you acknowledge that you have read, understood, and agree to fully comply with these terms. If you do not agree with these terms, please do not use the application. The application management reserves the right to modify these terms at any time, and you will be notified of updates when necessary."
        },
        {
            id: 8,
            title: "Acceptance of Terms",
            desc: "By using this application, you acknowledge that you have read, understood, and agree to fully comply with these terms. If you do not agree with these terms, please do not use the application. The application management reserves the right to modify these terms at any time, and you will be notified of updates when necessary."
        },



    ]

    return (
        <div className="h-screen dark:bg-gray-900">
            <ContainerLayout >

                <NavLayout>



                    <Divider title="Terms and condition" />

                    <div className="md:mx-2 mx-5 overflow-y-scroll h-[70vh]
                [&::-webkit-scrollbar]:w-1
             [&::-webkit-scrollbar-thumb]:bg-pink-400
               [&::-webkit-scrollbar-thumb]:rounded-lg
                ">

                        {
                            termsAndCondition ? termsAndCondition.map((item, index) => (
                                <TermsCard
                                    key={index}
                                    title={item.title}
                                    description={item.desc}

                                />
                            )) : <></>
                        }

                    </div>


                </NavLayout>


            </ContainerLayout>
        </div>
    )
}

export default TermsAndCondition