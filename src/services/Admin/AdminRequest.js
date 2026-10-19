import { Admin_API_Config } from "../../config/Admin-API-Config";

export const getAdminInfo = function () {
    try {
        return JSON.parse(localStorage.getItem(Admin_API_Config.STORAGE_KEY));
    } catch {
        return null;
    }
}

const containsFile = (v) => v instanceof Blob || (v !== null && typeof v === "object" && Object.values(v).some(containsFile));

const appendToForm = (form, key, value) => {
    if (value instanceof Blob) form.append(key, value);
    else if (value !== null && typeof value === "object") Object.entries(value).forEach(([k, v]) => appendToForm(form, `${key}[${k}]`, v));
    else form.append(key, value);
}

export const AdminRequest = function (endpoint, { method = "GET", body, auth = true } = {}) {
    const url = `${Admin_API_Config.BASE_URL}/${endpoint}`;

    const headers = { "Accept": "application/json" };

    const isForm = body && containsFile(body);
    let payload;
    if (isForm) {
        payload = new FormData();
        Object.entries(body).forEach(([k, v]) => appendToForm(payload, k, v));
    } else if (body) {
        headers["Content-Type"] = "application/json";
        payload = JSON.stringify(body);
    }

    if (auth) {
        const info = getAdminInfo();
        if (info?.token) headers["Authorization"] = `Bearer ${info.token}`;
    }

    return fetch(url, {
        method: method,
        headers: headers,
        body: payload
    }).then((res) => {
        if (res.status === 401 && auth) {
            localStorage.removeItem(Admin_API_Config.STORAGE_KEY);
            window.location.href = "/admin/login";
        }
        if (!res.ok) {
            return res.json().catch(() => ({})).then((serverError) => {
                const firstValidation = serverError.errors ? Object.values(serverError.errors)[0] : null;
                const detail = Array.isArray(firstValidation) ? firstValidation[0] : firstValidation;
                throw new Error(detail || serverError.message || "something went wrong");
            });
        }
        if (res.status === 204) return null;
        return res.json().catch(() => null);
    })
}
