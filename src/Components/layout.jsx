import NavigationBar from "./header/NavigationBar";
import Home from "./home";
import Works from "./works";
import Skills from "./skills";
import AboutMe from "./about";
import "./layout.css"
import Footer from "./footer/footer";
import { useStore } from "../store/store";

const Layout = () => {
    const { language }= useStore();
    return (
        <>
            <NavigationBar />
            
        <main className="main_layout">
                    <section id="home">
                        <Home />
                    </section>
                    <span className="versicúlo">{`"${language.Bible}"`}</span>
                    {/* <span className="versicúlo" style={{color: "#168aad"}}>THE LORD HAS PROMISED TO SAVE ME. THEREFORE, WE WILL PLAY OUR MELODIES IN THE HOUSE OF THE LORD ALL THE DAYS OF OUR LIFE.</span> */}
                    <span style={{ alignSelf: "center", display: "flex", justifyContent: "center", margin:"7px"}}>{language.verse}</span>
                    <br />
                    <section id="works">
                        <Works />
                    </section>
                    <br />
                    <section id="about-me">
                        <Skills />
                    </section>
                    <br />
                    <section id="contacts">
                        <AboutMe />
                    </section>
                    
        </main>
            <Footer/>
        </>
    )
}


export default Layout;