import { API_Config } from "../config/API-Config";

export const FavoriteService = {
    SetProductAsFavorite: function (ID, token) {
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.FAVORITE}`;


        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
                product_id: ID
            })
        }).then((res) => {
            if (!res.ok) {
                return res.json().then((serverError) => {
                    throw new Error(serverError.message || "something went wrong");
                });
            }
            return res.json();
        })
    },
    GetFavorite: function (token) {
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.FAVORITE}`;

        return fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`

            },
        }
        )
            .then((res) => {
                if (!res.ok) {
                    return res.json().then((serverError) => {
                        throw new Error(serverError.message || "something went wrong");
                    });
                }
                return res.json();
            })
    },
    DeleteFromCart: function (id, token) {
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.FAVORITE}/${id}`;

        return fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            }

        }
        )
            .then((res) => {
                if (!res.ok) {
                    return res.json().then((serverError) => {
                        throw new Error(serverError.message || "something went wrong");
                    });
                }
                return res.json();
            })
    },
}