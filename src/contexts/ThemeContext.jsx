import {  createContext, useEffect, useState  } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("dark")

    useEffect(() => {
        document.documentElement.className = theme
    } ,[theme])

    return (
        
        <ThemeContext.Provider value={{theme, setTheme}}>

            {children}

        </ThemeContext.Provider>
        
    )
};

export default ThemeProvider;