import { Admin_API_Config } from "../../config/Admin-API-Config";
import { AdminRequest } from "./AdminRequest";

export const AdminAuthService = {
    LoginService: function (email, password) {
        return AdminRequest(Admin_API_Config.ENDPOINTS.LOGIN, {
            method: "POST",
            body: { email: email, password: password },
            auth: false
        });
    },
    LogoutService: function () {
        return AdminRequest(Admin_API_Config.ENDPOINTS.LOGOUT, { method: "POST" });
    },
}
