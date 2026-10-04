import { Navbar } from "../components/Navbar"

export const NavLayout = ({ children }) => {
    return (
        <>
            <header className=""><Navbar />
            </header>
            <main className="">
                {children}
            </main>
        </>
    )
}
