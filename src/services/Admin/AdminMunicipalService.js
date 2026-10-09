import { Admin_API_Config } from "../../config/Admin-API-Config";
import { AdminCrudService } from "./AdminCrudService";

export const AdminMunicipalService = AdminCrudService(Admin_API_Config.ENDPOINTS.MUNICIPAL);
