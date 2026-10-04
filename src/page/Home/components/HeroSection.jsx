import { CategoryCard } from "./CategoryCard"
import { HeroCards } from "./HeroCards"
import { UserCard } from "./UserCard"
import heroImg from '/src/assets/Mask group.png'

const tabStyle = "bg-white text-start text-black hover:bg-blue-200 rounded-md mx-2 p-2 h-12 dark:bg-gray-600 dark:hover:bg-pink-500 dark:text-white"

export const HeroSection = () => {
    return (
        <div className="grid md:grid-cols-4 grid-cols-1 h-[75vh] md:border md:border-gray-200 dark:border-gray-700 rounded-sm my-10 gap-4  overflow-hidden ">

            <div className=" md:flex flex-col hidden h-full w-full  my-6 gap-2">

                <button className={tabStyle}>
                    Automobiles
                </button>
                <button className={tabStyle}>
                    Clothes and wear
                </button>
                <button className={tabStyle}>
                    Home interiors
                </button>
                <button className={tabStyle}>
                    Computer and tech
                </button>
                <button className={tabStyle}>
                    Tools, equipments
                </button>
                <button className={tabStyle}>
                    Sports and outdoor
                </button>
                <button className={tabStyle}>
                    Animal and pets
                </button>
                <button className={tabStyle}>
                    Machinery tools
                </button>
                <button className={tabStyle}>
                    More category
                </button>

            </div>

            <div className=" w-full h-full col-span-2 " >
                <div className="h-[90%] my-5 rounded-md overflow-hidden"><CategoryCard title={"Latest trending Electronic items"} btnTitle={"LearnMore"} img={heroImg} divStyle={"pt-5 ps-5"} />

                </div>
            </div>

            <div className="md:block hidden h-full ">
                <UserCard />
                <HeroCards title={"Get US $10 off with a new supplier"} bgColor={"bg-amber-500 dark:bg-pink-900"} />
                <HeroCards title="Send quotes with supplier preferences" bgColor={" bg-pink-700 dark:bg-teal-900"} />
            </div>
        </div >
    )
}
