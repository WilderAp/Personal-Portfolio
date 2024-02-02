import { useStore } from "../../store/store.jsx";
import eng from "../../utils/english.json";
import esp from "../../utils/spanish.json";

function LanguajeButton() {
    const {languaje, setLanguage}= useStore();
    
    const handleLanguage = async (event) => {
        const value = event.target.value;
        console.log(value, languaje);
        value === "ES" ? setLanguage(esp) : setLanguage(eng);        
    }

    return (
        <select className="select" style={{ color: "#adb5bd" }} value={languaje} onChange={handleLanguage}>
            <option value="default">LANG</option>
            <option value="EN">EN</option>
            <option value="ES">ES</option>
        </select>
    )
}

export default LanguajeButton