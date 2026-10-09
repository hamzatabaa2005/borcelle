import { API_Config } from '../config/API-Config';

export const AddressService = {
    GetAddress: function (token) {
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.ADDRESS}`;


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
    DeleteAddress: function (id, token) {
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.ADDRESS}/${id}`;

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
    UpdateAddress: function (id, name, phone, city, street, neighborhood, building, zip_code, lat, lng, is_default = 0, token) {
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.ADDRESS}/${id}`;


        return fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`

            },
            body: JSON.stringify({
                name: name,
                phone: phone,
                city: city,
                street: street,
                neighborhood: neighborhood,
                building: building,
                zip_code: zip_code,
                lat: lat,
                lng: lng,
                is_default: is_default
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
    AddAddress: function (name, phone, city, street, neighborhood, building, zip_code, lat, lng, is_default = 0, token) {
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.ADDRESS}`;


        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`

            },
            body: JSON.stringify({
                name: name,
                phone: phone,
                city: city,
                street: street,
                neighborhood: neighborhood,
                building: building,
                zip_code: zip_code,
                lat: lat,
                lng: lng,
                is_default: is_default
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
