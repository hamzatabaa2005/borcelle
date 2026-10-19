import { AdminRequest } from "./AdminRequest";

export const AdminCrudService = function (endpoint) {
    return {
        GetAll: function (page = 1) {
            return AdminRequest(`${endpoint}?page=${page}`);
        },
        GetById: function (id) {
            return AdminRequest(`${endpoint}/${id}`);
        },
        Create: function (data) {
            return AdminRequest(endpoint, { method: "POST", body: data });
        },
        Update: function (id, data) {
            return AdminRequest(`${endpoint}/${id}`, { method: "PUT", body: data });
        },
        Delete: function (id) {
            return AdminRequest(`${endpoint}/${id}`, { method: "DELETE" });
        },
    }
}
