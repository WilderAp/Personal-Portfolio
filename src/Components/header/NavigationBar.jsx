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
                        <Link to="/" style={{  textDecoration: 'none', color:"inherit" }}>
                            <span style={{color: "purple"}}>#</span>
                            <span style={{color: "#adb5bd"}}>home</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/#works" style={{  textDecoration: 'none', color:"inherit" }}>
                            <span style={{ color: "purple" }}>#</span>
                            <span style={{ color: '#adb5bd' }}>works</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/#about-me" style={{  textDecoration: 'none', color:"inherit" }}>
                            <span style={{ color: "purple" }}>#</span>
                            <span style={{ color: '#adb5bd' }}>about-me</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/#contacts" style={{  textDecoration: 'none', color:"inherit" }}>
                            <span style={{ color: "purple" }}>#</span>
                            <span style={{ color: '#adb5bd' }}>contacts</span>
                        </Link>
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




