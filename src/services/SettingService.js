import { API_Config } from "../config/API-Config";

export const SettingServices = {
    TermsAndCondition: function (token) {
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.SETTING}/${API_Config.ENDPOINTS.TERMS_AND_CONDITIONS}`;


        return fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`

            }
        }).then((res) => {
            if (!res.ok) {
                return res.json().then((serverError) => {
                    throw new Error(serverError.message || "something went wrong");
                });
            }
            return res.json();
        })
    },
}