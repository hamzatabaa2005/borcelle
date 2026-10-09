import { useState } from "react";
import { AdminAuthContext } from "./AdminAuthContext";
import { Admin_API_Config } from "../../config/Admin-API-Config";
import { AdminAuthService } from "../../services/Admin/AdminAuthService";
import { getAdminInfo } from "../../services/Admin/AdminRequest";

export const AdminAuthProvider = ({ children }) => {

    const [admin, setAdmin] = useState(() => getAdminInfo());

    const login = (email, password) => {
        return AdminAuthService.LoginService(email, password).then((res) => {
            // Handles the common response shapes; adjust here if your API differs
            const token = res?.token ?? res?.access_token ?? res?.data?.token ?? res?.data?.access_token;
            if (!token) throw new Error("Login worked but the server did not return a token");

            const profile = res?.admin ?? res?.user ?? res?.data?.admin ?? res?.data?.user ?? {};
            const info = { token: token, name: profile.name ?? "Admin", email: profile.email ?? email };

            localStorage.setItem(Admin_API_Config.STORAGE_KEY, JSON.stringify(info));
            setAdmin(info);
            return info;
        });
    }

    const logout = () => {
        AdminAuthService.LogoutService()
            .catch(() => { })
            .finally(() => {
                localStorage.removeItem(Admin_API_Config.STORAGE_KEY);
                setAdmin(null);
            });
    }

    return (
        <AdminAuthContext.Provider value={{ admin, login, logout }}>
            {children}
        </AdminAuthContext.Provider>
    )
}
