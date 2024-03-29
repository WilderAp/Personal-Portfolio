
import yo from "../images/IMG_0019 EDITED.png"
import yo2 from "../images/IMG_0019 2 EDITED.png"
import yo3 from "../images/FOTO EDITED.png"
import cv from "../utils/cv.pdf"
import "../styles/Home.css"
import { useStore } from "../store/store"

const Home = () => {
    const {language } = useStore();

    return (
        <main className="home-main" id="home-main" style={{ display: "flex", margin: "110px", justifyContent: "space-between", alignItems: "center" }}>
            <div className="description">
                <span style={{ fontSize: "26px" }}>Hi I am Wilder a <span style={{ color: '#168aad' }}>Fullstack back-end </span> developer</span>
                <br />
                <br />
                <br />
                <span style={{ fontSize: "14px" }}>And I craft <span style={{ color: '#8338ec' }}>Websites</span> using <span style={{ color: '#168aad' }}> technologies</span><span></span> like <span style={{ color: '#8338ec' }}>React</span> & <span style={{ color: '#8338ec' }}>NodeJS</span></span>
                <br />
                <br />
                <br />
                <button type="button" style={{ width: "130px", height: "40px", backgroundColor: "transparent", borderBlockColor: "#168aad", border: "1px groove #8338ec" }}>
                    <a style={{ textDecoration: "none", color: "#168aad", fontSize: "16px" }} href="mailto:wilderasprilla321@gmail.com" rel="noreferrer" target="_blank">{language.button}</a>
                </button>
                <a style={{ textDecoration: "none", color: "#168aad", fontSize: "16px", cursor: "pointer" }} download="WILDERAPCV2024" href={cv} rel="noreferrer" target="_blank">
                    <button type="button" style={{ color: "white", marginLeft: "20px",cursor: "pointer" ,width: "130px", height: "40px", backgroundColor: "#219ebc", borderBlockColor: "#168aad", border: "1px groove #8338ec" }}>
                        {language.cv}
                    </button>
                </a>


            </div>

            <span style={{ color: "#8338ec" }}>................</span>
            <span >................</span>
            <span style={{ color: "#8338ec" }}>................</span>
            <div style={{ display: "flex", flexDirection: "column", }}>

                {/* style={{ display: 'flex', flexDirection: "column", alignItems: "flex-end" }} */}
                <img style={{ display: "flex", height: '500px', margin: '0', padding: '0' }} src={yo2} alt="Foto personal" className="imagen" />
                {/* , alignSelf: 'flex-start' } */}
                <span style={{ color: '#adb5bd', border: '1px groove grey', padding: '7px' }}><span style={{ border: '1px solid #168aad', width: '5px', backgroundColor: '#168aad', color: '#168aad' }}>....</span> {language.workingon}<span >{language.workingon2}</span></span>
            </div>
        </main>
    )
}

export default Home;