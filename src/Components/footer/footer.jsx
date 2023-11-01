import {BiLogoGmail} from "react-icons/bi/index.esm";
import {AiFillLinkedin} from "react-icons/ai/index.esm";

const Footer = () => {
    return(
        <footer className="footer" id="footer" style={{display: "flex", justifyContent: "center", margin: "0px",}}>
            
            <figure style={{margin: "50px"}}>
                <a href="https://www.linkedin.com/in/wilder-asprilla-pinilla-a5749220b/" rel="noreferrer" target=
                "_blank" style={{textDecoration: "none", color: "inherit"}}>
                <AiFillLinkedin style={{ width: "40px", height: "40px" }}/>
                </a>
            </figure>
            <figure style={{margin: "50px"}}>
                <a href="mailto:wilderasprilla321@gmail.com" rel="noreferrer" target="_blank" style={{textDecoration: "none", color: "inherit"}}>
                <BiLogoGmail style={{ width: "40px", height: "40px" }}/>
                </a>
            </figure>
          
        </footer>
    )
}

export default Footer;