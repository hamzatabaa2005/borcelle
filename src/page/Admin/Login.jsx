import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { FaMoon, FaSun } from "react-icons/fa6";
import { AdminAuthContext } from "../../context/AdminAuthContext/AdminAuthContext";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

const inputStyle = "w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-2 focus:outline-none focus:border-pink-500";

export const AdminLogin = () => {

    const { admin, login } = useContext(AdminAuthContext);
    const { mode, toggleMode } = useContext(ThemeContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    if (admin?.token) return <Navigate to="/admin/dashboard" replace />;

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        login(email, password)
            .then(() => navigate("/admin/dashboard"))
            .catch((err) => { setError(err.message); setLoading(false); });
    }

    return (
        <div className="grid md:grid-cols-2 min-h-screen dark:bg-gray-900">
            <div className="hidden md:flex flex-col justify-center gap-3 p-12 text-white bg-linear-to-br from-pink-800 via-pink-700 to-pink-500">
                <h1 className="text-4xl font-bold">Borcelle</h1>
                <p className="text-pink-100 max-w-sm">Admin panel. Manage products, orders and locations in one place.</p>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-16 relative">
                <button className="absolute top-4 right-4 px-2 py-2 rounded-full bg-pink-700 text-white" onClick={toggleMode} aria-label="Toggle theme">
                    {mode === "light" ? <FaMoon /> : <FaSun />}
                </button>

                <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto flex flex-col gap-4">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Admin login</h2>
                    <label className="flex flex-col gap-1 text-sm text-gray-600 dark:text-gray-300">Email
                        <input type="email" required className={inputStyle} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@tamkeen.com" />
                    </label>
                    <label className="flex flex-col gap-1 text-sm text-gray-600 dark:text-gray-300">Password
                        <input type="password" required className={inputStyle} value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
                    <button type="submit" disabled={loading} className="py-2.5 rounded-md bg-pink-700 hover:bg-pink-600 text-white disabled:opacity-60">{loading ? "Signing in..." : "Sign in"}</button>
                </form>
            </div>
        </div>
    )
}
