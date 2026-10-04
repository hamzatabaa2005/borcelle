import { API_Config } from "../config/API-Config";

export const ProductService = {
    GetProducts: function () {
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.PRODUCTS}`;


        return fetch(url).then((res) => {
            if (!res.ok) {
                return res.json().then((serverError) => {
                    throw new Error(serverError.message || "something went wrong");
                });
            }
            return res.json();
        })
    },
    GetProductsByCategory: function (CategoryID) {
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.PRODUCTS}?category_id=${CategoryID ? CategoryID : ""}`;


        return fetch(url).then((res) => {
            if (!res.ok) {
                return res.json().then((serverError) => {
                    throw new Error(serverError.message || "something went wrong");
                });
            }
            return res.json();
        })
    },
    GetProductsByID: function (PID) {
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.PRODUCTS}/${PID}`;


        return fetch(url).then((res) => {
            if (!res.ok) {
                return res.json().then((serverError) => {
                    throw new Error(serverError.message || "something went wrong");
                });
            }
            return res.json();
        })
    },

}