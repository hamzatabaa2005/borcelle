// ADMIN API CONFIG (new file - does not touch API-Config.js)
export const Admin_API_Config = {
    // Change this one line to point the dashboard at another server
    BASE_URL: "https://training.tamkeen-dev.com/tamkeenstore/public/api",
    // localStorage key used to keep the admin session (separate from the store's "user_info")
    STORAGE_KEY: "admin_info",
    ENDPOINTS: {
        LOGIN: "admin/login",
        LOGOUT: "admin/logout",
        PRODUCT: "admin/product",
        CATEGORY: "admin/category",
        ORDER: "admin/order",
        BRAND: "admin/brand",
        CITY: "admin/city",
        MUNICIPAL: "admin/municipal"
    }
}
