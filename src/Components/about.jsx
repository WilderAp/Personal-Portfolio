import "../styles/AboutMe.css"
import wil from "../images/will.jpg"

const AboutMe = () => {
    return (
        <div className="about" id="about">
            
            <div className='works-main' style={{ fontSize: "24px", flexDirection: "column", marginTop: "80px"}}>
                <span><span style={{ color: '#8338ec' }}>#</span>about-me <span style={{ color: "#168aad" }}>------------------------------------</span></span>
                <img src={wil} alt="about Image" style={{width: "500px", marginTop: "15px"}} />
            </div>

            <main className='about-main'>
                <span>
                    Hi, This is Wilder!
                </span>
                <br />
                <br />
                <br />
                <span>
                    I{"'"}m located in Colombia and I studied at Henry to became a FullStack developer,
                    I{"'"}m very passionate developing in such a way that it doesn{"'"}t feel like a work but a hobbie for me,
                    I also enjoy to get into projects that can represent a challenge for me, helping me to develop my personal
                    knowleged in such way that I can become a expertise/advance person and developer.
                </span>
                <br />
                <br />
                <br />
                <span>
                    I started coding this year when I got interest on working from home and also have a full time job that gives me professional improvement
                    And here I am now, glad that you are reading this, and hoping to get in contact with you! {":)"} and any chance would have no regret {";)"}
                </span>
            </main>
            
           
        </div>
    )
}

export default AboutMe;