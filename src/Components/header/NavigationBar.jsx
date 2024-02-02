import  "./NavigationBar.css"
import { Link } from 'react-router-dom';
import { DiCode } from "react-icons/di"
import ThemeButton from "../Theme/ThemeButton";
import LanguajeButton from "../Languajes/LanguajeButton";
import { useStore } from "../../store/store"

const NavigationBar = () => {
    const { language }= useStore();    
    console.log(language);
    return (
        <header className="header">

            <figure  className="logoContainer" style={{marginLeft: "15px"}}>
                <Link to={"/"} className="header-logo" style={{textDecoration: "none", color: "inherit", fontSize: "21px"}}>
                <DiCode size={"40px"} style={{ width: "50px", height: "40px" }} />
                Wilder
                </Link>
            </figure>

            <nav className="navbar">
                <ul className="menu">
                    <li>
                        <a href="#home-main" style={{  textDecoration: 'none', color:"inherit" }}>
                            <span style={{color: "#8338ec"}}>#</span>
                            <span style={{color: "#adb5bd"}}>{language.home}</span>
                        </a>
                    </li>

                    <li>
                        <a href="#Projects" style={{  textDecoration: 'none', color:"inherit" }}>
                            <span style={{ color: "#8338ec" }}>#</span>
                            <span style={{ color: '#adb5bd' }}>{language.works}</span>
                        </a>
                    </li>

                    <li>
                        <a href="#about" style={{  textDecoration: 'none', color:"inherit" }}>
                            <span style={{ color: "#8338ec" }}>#</span>
                            <span style={{ color: '#adb5bd' }}>{language.aboutme}</span>
                        </a>
                    </li>

                    <li>
                        <a href="#footer" style={{  textDecoration: 'none', color:"inherit" }}>
                            <span style={{ color: "#8338ec" }}>#</span>
                            <span style={{ color: '#adb5bd' }}>{language.contacts}</span>
                        </a>
                    </li>

                    <figure className="ThemeButton" style={{color: "#adb5bd"}} >
                        <ThemeButton />
                    </figure>

                    <LanguajeButton />
                    
                </ul>

            </nav>
        </header>
    )
}


export default NavigationBar;




