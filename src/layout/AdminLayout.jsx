import { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router";
import { FaMoon, FaSun } from "react-icons/fa6";
import { LuLayoutDashboard, LuPackage, LuTags, LuShoppingCart, LuBuilding2, LuMapPin, LuLogOut, LuMenu, LuX, LuStore } from "react-icons/lu";
import { ThemeContext } from "../context/ThemeContext/ThemeContext";
import { AdminAuthContext } from "../context/AdminAuthContext/AdminAuthContext";

const links = [
    { title: "Dashboard", path: "/admin/dashboard", icon: <LuLayoutDashboard /> },
    { title: "Products", path: "/admin/products", icon: <LuPackage /> },
    { title: "Categories", path: "/admin/categories", icon: <LuTags /> },
    { title: "Brands", path: "/admin/brands", icon: <LuTags /> },
    { title: "Orders", path: "/admin/orders", icon: <LuShoppingCart /> },
    { title: "Cities", path: "/admin/cities", icon: <LuBuilding2 /> },
    { title: "Municipals", path: "/admin/municipals", icon: <LuMapPin /> },
];

export const AdminLayout = () => {

    const { mode, toggleMode } = useContext(ThemeContext);
    const { admin, logout } = useContext(AdminAuthContext);
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">

            {open && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setOpen(false)}></div>}

            <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-linear-to-b from-pink-800 via-pink-700 to-pink-600 text-white flex flex-col p-4 transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
                <div className="flex items-center justify-between mb-8 px-2">
                    <span className="text-2xl font-bold tracking-wide">Borcelle</span>
                    <button className="lg:hidden" aria-label="Close menu" onClick={() => setOpen(false)}><LuX size={22} /></button>
                </div>

                <nav className="flex flex-col gap-1">
                    {links.map((l) => (
                        <NavLink key={l.path} to={l.path} onClick={() => setOpen(false)}
                            className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${isActive ? "bg-white text-pink-700 font-semibold shadow" : "text-pink-100 hover:bg-white/15"}`}>
                            <span className="text-lg">{l.icon}</span>{l.title}
                        </NavLink>
                    ))}
                </nav>

                <button onClick={logout} className="mt-auto flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-pink-100 hover:bg-white/15">
                    <LuLogOut className="text-lg" /> Logout
                </button>
            </aside>

            <div className="lg:ml-64">
                <header className="flex items-center justify-between px-4 sm:px-6 py-3">
                    <button className="lg:hidden text-gray-700 dark:text-white" aria-label="Open menu" onClick={() => setOpen(true)}><LuMenu size={24} /></button>
                    <span className="hidden lg:block text-sm text-gray-500 dark:text-gray-400">Admin panel</span>

                    <div className="flex items-center gap-3">
                        <NavLink to="/" className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:text-pink-600"><LuStore /> Store</NavLink>
                        <button className="px-2 py-2 rounded-full bg-pink-700 text-white hover:scale-105 transition-all duration-300 shadow-md" onClick={toggleMode} aria-label="Toggle theme">
                            {mode === "light" ? <FaMoon /> : <FaSun />}
                        </button>
                        <span className="text-sm text-gray-700 dark:text-gray-200">{admin?.name}</span>
                    </div>
                </header>

                <main className="px-4 sm:px-6 pb-10">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
