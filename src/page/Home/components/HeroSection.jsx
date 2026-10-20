import { CategoryCard } from "./CategoryCard"
import { HeroCards } from "./HeroCards"
import { UserCard } from "./UserCard"
import heroImg from '/src/assets/Mask group.png'

const tabStyle = "bg-white text-start text-black hover:bg-blue-200 rounded-lg px-4 flex-1 min-h-10 transition-colors dark:bg-gray-600 dark:hover:bg-pink-500 dark:text-white"

export const HeroSection = () => {
    return (
        <div className="grid md:grid-cols-4 grid-cols-1 h-[75vh] min-h-120 md:border md:border-gray-200 dark:border-gray-700 rounded-2xl shadow-md my-10 p-4 gap-4 overflow-hidden ">

            <div className=" md:flex flex-col hidden h-full w-full gap-2">

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
                <div className="h-full rounded-xl overflow-hidden"><CategoryCard title={"Latest trending Electronic items"} btnTitle={"LearnMore"} img={heroImg} divStyle={"space-y-4 pt-6 ps-6 [&_h2]:max-w-md"} />

                </div>
            </div>

            <div className="md:block hidden h-full ">
                <UserCard />
                <HeroCards title={"Get US $10 off with a new supplier"} bgColor={"bg-[rgba(243,131,50,1)] dark:bg-pink-900"} />
                <HeroCards title="Send quotes with supplier preferences" bgColor={"bg-[rgba(240,114,141,1)] dark:bg-teal-900"} />
            </div>
        </div >
    )
}
