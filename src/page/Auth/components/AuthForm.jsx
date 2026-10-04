
export const AuthForm = ({ title, description, children, onSubmit }) => {
    return (
        <div className=" md:h-screen flex flex-col md:justify-center   px-10 md:dark:bg-gray-900">
            <form onSubmit={onSubmit} className="">
                <h1 className="md:text-black text-white font-bold dark:text-white">{title}</h1>
                <p className="text-gray-500">{description}</p>

                {children}
            </form>
        </div>
    )
}
