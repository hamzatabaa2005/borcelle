import { Admin_API_Config } from "../../config/Admin-API-Config";
import { AdminCrudService } from "./AdminCrudService";

export const AdminCityService = AdminCrudService(Admin_API_Config.ENDPOINTS.CITY);
