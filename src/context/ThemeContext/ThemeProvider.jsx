import { useState } from "react";

import { ThemeContext } from "./ThemeContext";


export const ThemeProvider = ({ children }) => {

    const [mode, setMode] = useState(() => {
        const themeColorInStorage = localStorage.getItem('theme-color') || 'light'
        document.body.classList.add(themeColorInStorage)
        return themeColorInStorage;
    })



    const toggleMode = () => {

        const newMode = mode === 'light' ? 'dark' : 'light'
        document.body.classList.remove(mode)
        setMode(newMode)
        localStorage.setItem('theme-color', newMode)

        document.body.classList.add(newMode)
    }


    return (
        <ThemeContext.Provider value={{ mode, toggleMode, setMode }}>
            {children}
        </ThemeContext.Provider>
    )
}
