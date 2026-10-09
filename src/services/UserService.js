import { API_Config } from "../config/API-Config";

export const UserService = {
    GetUserInfo: function (token) {
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.CUSTOMER}`;


        return fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`

            },
        }).then((res) => {
            if (!res.ok) {
                return res.json().then((serverError) => {
                    throw new Error(serverError.message || "something went wrong");
                });
            }
            return res.json();
        })
    },
    updateUserName: function (token, Name = "user8") {
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.CUSTOMER}`;


        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`

            },
            body: JSON.stringify({
                name: Name
            }
            )
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