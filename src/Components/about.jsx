import "../styles/AboutMe.css"
import wil from "../images/will.jpg"
import { useStore } from "../store/store"

const AboutMe = () => {
    const { language } = useStore();

    return (
        <div className="about" id="about">
            
            <div className='works-main' style={{ fontSize: "24px", flexDirection: "column", marginTop: "80px"}}>
                <span><span style={{ color: '#8338ec' }}>#</span>about-me <span style={{ color: "#168aad" }}>------------------------------------</span></span>
                <img src={wil} alt="about Image" style={{width: "500px", marginTop: "15px"}} />
            </div>

            <main className='about-main'>
                <br />
                <span>
                    {language.aboutTitle}
                </span>
                <br />
                <br />
                <br />
                <span>
                    {language.about}
                </span>
                <br />
                <br />
                <br />
            </main>
            
           
        </div>
    )
}

export default AboutMe;