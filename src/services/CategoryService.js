import { API_Config } from "../config/API-Config"

export const CategoryService = {
    GetCategory: function () {
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.CATEGORY}`;

        return fetch(url)
            .then((res) => {
                if (!res.ok) {
                    return res.json().then((serverError) => {
                        throw new Error(serverError.message || "something went wrong");
                    });
                }
                return res.json();
            })
    }
}