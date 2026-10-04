
const ContainerLayout = ({ children }) => {
    return (

        <div className="dark:bg-gray-900 ">

            <div className="container max-w-7xl  lg:mx-auto w-full ">
                {children}
            </div>
        </div>

    )
}

export default ContainerLayout