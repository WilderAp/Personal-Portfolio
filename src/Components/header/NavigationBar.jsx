import  "./NavigationBar.css"
import { Link } from 'react-router-dom';
import { DiCode } from "react-icons/di"
import ThemeButton from "../Theme/ThemeButton";


const NavigationBar = () => {

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
                            <span style={{color: "#adb5bd"}}>home</span>
                        </a>
                    </li>

                    <li>
                        <a href="#Projects" style={{  textDecoration: 'none', color:"inherit" }}>
                            <span style={{ color: "#8338ec" }}>#</span>
                            <span style={{ color: '#adb5bd' }}>works</span>
                        </a>
                    </li>

                    <li>
                        <a href="#about" style={{  textDecoration: 'none', color:"inherit" }}>
                            <span style={{ color: "#8338ec" }}>#</span>
                            <span style={{ color: '#adb5bd' }}>about-me</span>
                        </a>
                    </li>

                    <li>
                        <a href="#footer" style={{  textDecoration: 'none', color:"inherit" }}>
                            <span style={{ color: "#8338ec" }}>#</span>
                            <span style={{ color: '#adb5bd' }}>contacts</span>
                        </a>
                    </li>

                    <figure className="ThemeButton" style={{color: "#adb5bd"}} >
                        <ThemeButton />
                    </figure>

                    <select className="select" style={{color: "#adb5bd"}}>
                        <option className="option" value="EN">EN</option>
                        <option value="ES">ES</option>
                    </select>
                </ul>

            </nav>
        </header>
    )
}


export default NavigationBar;




