import { API_Config } from "../config/API-Config";

export const OrderService = {
    CreateOrder: function (token, addressId, note = null, paymentType = "CASH", couponCode = null) {
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.ORDER}`;

        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
                note: note,
                payment_type: paymentType,
                address_id: addressId,
                coupon_code: couponCode
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
    GetOrders: function (token) {
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.ORDER}`;

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
    GetOrdersByID: function (token) {
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.ORDER}`;

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
    CancelOrder: function (id, token, comment = "no") {
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.ORDER}/${id}`;


        return fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            }
            , body: JSON.stringify({ comment: comment })
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