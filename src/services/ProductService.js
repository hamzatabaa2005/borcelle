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
    GetProductsByCategoryAndSearch: function (CategoryID = "", Search = "") {
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.PRODUCTS}?search=${Search}&category_id=${CategoryID ? CategoryID : ""}`;
        console.log(url)

        return fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
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
    filterProduct: function (category_id = "1", order_by = "name", order = "asc", from = 0, to = 100000) {
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.PRODUCTS}?category_id=${category_id}&price_from=${from}&price_to=${to}&order_by=${order_by}&order=${order}`;


        return fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
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
    GetMyProducts: function (token) {
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.PRODUCTS}?mine=1`;


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
    AddProduct: function (name, description, price, image, category_id, token) {
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.PRODUCTS}`;
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("category_id", category_id);

        if (image) {
            formData.append("image", image);
        }

        return fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: formData
        }).then((res) => {
            if (!res.ok) {
                return res.json().then((serverError) => {
                    throw new Error(serverError.message || "something went wrong");
                });
            }
            return res.json();
        })
    },
    UpdateProduct: function (id, name, description, price, category_id, token) {
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.PRODUCTS}/${id}`;


        return fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                name: name,
                description: description,
                price: price,
                category_id: category_id
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
    DeleteProduct: function (id, token) {
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.PRODUCTS}/${id}`;


        return fetch(url, {
            method: "DELETE",
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