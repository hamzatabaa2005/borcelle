import { API_Config } from "../config/API-Config";
export const ContactUsService = {
    ContactUs: function (email, message, userId = "nullable", type = "EMAIL") {

        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.CONTACT_US}`;

        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",

            },
            body: JSON.stringify({
                "temp_user_id": userId,
                "type": type,
                "email": email,
                "message": message
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

    }

}