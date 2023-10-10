import { useContext } from "react"
import  { DiProlog } from "react-icons/di"
import { ThemeContext } from "../../contexts/ThemeContext"


const ThemeButton = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    const handleTheme = () => {
       setTheme(()=> {
        const cambio = theme === "light" ? "dark" : "light"
            return cambio;
        })
    }
    
    return (
        <DiProlog size={"20px"} onClick={()=> handleTheme()}/>
    )
}

export default ThemeButton;