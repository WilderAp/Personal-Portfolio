import {BiLogoGmail} from "react-icons/bi/index.esm";
import {AiFillLinkedin} from "react-icons/ai/index.esm";
import "./footer.css"

const Footer = () => {
    return(
        <div className="contacts-footer">
        <div className='works-main' style={{ fontSize: "24px", marginBottom: "20px" }}>
                <span><span style={{ color: '#168aad' }}></span>Contacts: <span style={{ color: "#8338ec" }}>-----------------------------------------------------------------------------------</span></span>
            </div>
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
        </div>
    )
}

export default Footer;