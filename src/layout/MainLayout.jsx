import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { SecondaryNav } from "../components/SecondaryNav"

const MainLayout = ({ children, SecondaryNavExist = true, searchExist = true, subscribeExist = true }) => {
    return (
        <div className="dark:bg-gray-900">
            <header>
                <Navbar searchExist={searchExist} />
                {SecondaryNavExist && <SecondaryNav />}
            </header>
            <main >
                {children}
            </main>
            <Footer subscribeExist={subscribeExist} />
        </div>
    )
}

export default MainLayout