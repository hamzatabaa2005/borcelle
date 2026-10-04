import { API_Config } from "../config/API-Config"

export const CartService = {
    GetCart: function (token) {
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.CART}`;

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
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.CART}/${id}`;

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
    AddToCart: function (id, quantity = 1, token) {
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.CART}`;

        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`

            },
            body: JSON.stringify(

                {
                    product_id: id,
                    quantity: quantity
                }
            )
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