import { API_Config } from "../config/API-Config";

export const AuthService = {
    LoginService: function (phoneNumber) {
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.LOGIN}`;

        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                phone: phoneNumber
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
    RegisterService: function (name, email, phoneNumber) {
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.REGISTER}`;

        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phoneNumber
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
    VerificationService: function (OTP, phoneNumber) {
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.VERIFY}`;


        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                phone: phoneNumber,
                otp: OTP
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
    ResendService: function (phoneNumber) {
        const url = `${API_Config.BASE_URL}/${API_Config.ENDPOINTS.RESEND}`;


        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                phone: phoneNumber
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