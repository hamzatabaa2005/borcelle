import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AdminAuthContext } from "../context/AdminAuthContext/AdminAuthContext";

// Only lets a logged-in admin reach the pages nested inside it
export const AdminGuard = () => {
    const { admin } = useContext(AdminAuthContext);
    return admin?.token ? <Outlet /> : <Navigate to="/admin/login" replace />;
}
