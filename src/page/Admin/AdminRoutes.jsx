import { Routes, Route, Navigate } from "react-router";
import { AdminAuthProvider } from "../../context/AdminAuthContext/AdminAuthProvider";
import { AdminGuard } from "../../layout/AdminGuard";
import { AdminLayout } from "../../layout/AdminLayout";
import { AdminLogin } from "./Login";
import { Dashboard } from "./Dashboard";
import { Products } from "./Products";
import { Categories } from "./Categories";
import { Brands } from "./Brands";
import { Orders } from "./Orders";
import { Cities } from "./Cities";
import { Municipals } from "./Municipals";

// Everything under /admin/*  (App.jsx only mounts this one component)
export const AdminRoutes = () => (
    <AdminAuthProvider>
        <Routes>
            <Route path="login" element={<AdminLogin />} />

            <Route element={<AdminGuard />}>
                <Route element={<AdminLayout />}>
                    <Route index element={<Navigate to="dashboard" replace />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                    <Route path="categories" element={<Categories />} />
                    <Route path="brands" element={<Brands />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="cities" element={<Cities />} />
                    <Route path="municipals" element={<Municipals />} />
                </Route>
            </Route>

            <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Routes>
    </AdminAuthProvider>
)
