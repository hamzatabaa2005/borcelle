import { useState } from "react"
import { UserContext } from "./UserContext"

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user_info');
        return savedUser ? JSON.parse(savedUser) : {
            email: null,
            id: null,
            img: null,
            name: null,
            phone: null,
            token: null,
        };
    }
    )



    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}