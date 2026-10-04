
export const HeroCards = ({ title, bgColor }) => {
    return (
        <div className={`flex flex-col gap-2 justify-center items-center px-3  rounded-md m-2 h-40 text-2xl  text-white ${bgColor}`} >
            {title}
        </div>
    )
}
