//import { Outlet } from "react-router-dom";
import NavigationBar from "./header/NavigationBar";
import Home from "./home";
import Works from "./works";
import Skills from "./skills";
import AboutMe from "./about";
import "./layout.css"
const Layout = () => {
    return (
        <>
            <NavigationBar />
        <main className="main_layout">
                    <section id="home">
                        <Home />
                    </section>
                    <span className="versicúlo">THE LORD HAS PROMISED TO SAVE ME. THEREFORE, WE WILL PLAY OUR MELODIES IN THE HOUSE OF THE LORD ALL THE DAYS OF OUR LIFE.</span>
                    <span style={{border: "1px groove inherit", alignSelf: "center"}}> ISAIAH 38:20</span>
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
        </>
    )
}


export default Layout;