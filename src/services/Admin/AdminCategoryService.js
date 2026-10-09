import { Admin_API_Config } from "../../config/Admin-API-Config";
import { AdminCrudService } from "./AdminCrudService";

export const AdminCategoryService = AdminCrudService(Admin_API_Config.ENDPOINTS.CATEGORY);
