import "../styles/Works.css";
import Card from "react-bootstrap/Card";
import byr from "../images/byrlogo.png"
import games from "../images/Videogames.jpg";
import crud from "../images/crud.png";
import coolandmorty from "../images/coolandmorty.jpg";
import { Link } from "react-router-dom";
import { useStore } from "../store/store";


const Works = () => {
    const {language } = useStore();

    return (
        <div className="Projects" id="Projects">
            <div className='works-main' style={{ fontSize: "24px", marginBottom: "100px" }}>
                <span><span style={{ color: '#168aad' }}>#</span>projects <span style={{ color: "#8338ec" }}>---------------------------------------------</span></span>
                <span>
                    <a style={{ textDecoration: 'none', color: 'inherit', fontSize: "19px" }} href="https://github.com/WilderAp" rel="noreferrer" target="_blank">
                        View all ~~{">"}
                    </a>
                </span>
            </div>
            {/* <br />
            <br />
            <br /> */}
            <main className="Cards">
                <Card style={{ width: '18rem', margin: "2rem", border: "1px groove grey" }}>
                <a href="https://pf-b-r-front-end.vercel.app/" rel="noreferrer" target="_blank">
                    <Card.Img variant="top" src={byr} className="img-fluid" style={{ maxWidth: "100%", maxHeight: "auto" }} />
                </a>
                    <hr />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left' }}>
                        <Card.Title style={{ margin: "5px", fontSize: "20px", color: "#8338ec", marginLeft: "25px" }}>{language.byr.title}</Card.Title>
                        <Card.Text style={{ margin: "5px", marginLeft: "9px" }}>
                        {language.byr.description}
                        </Card.Text>
                        {/* <button type="button" style={{ width: "120px", height: "30px", backgroundColor: "transparent", border: "1px groove #8338ec", marginLeft: "90px", marginTop: "5px" }}>
                            <a style={{ textDecoration: "none", color: "#168aad", fontSize: "15px" }} href="https://pf-b-r-front-end.vercel.app/" rel="noreferrer" target="_blank">Go </a>
                        </button> */}
                    </Card.Body>
                </Card>
                -
                <Card style={{ width: '18rem', margin: "2rem", border: "1px groove grey" }}>
                <a href="https://youtu.be/p-nCXwIAibE" rel="noreferrer" target="_blank">
                    <Card.Img variant="top" src={coolandmorty} className="img-fluid" style={{ maxWidth: "100%", maxHeight: "auto" }} />
                </a>
                    <hr />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left' }}>
                        <Card.Title style={{ margin: "5px", fontSize: "20px", color: "#8338ec", marginLeft: "60px" }}>{language.rickymorty.title}</Card.Title>
                        <Card.Text style={{ margin: "5px", marginLeft: "9px" }}>
                            {language.rickymorty.description}
                        </Card.Text>
                        {/* <button type="button" style={{ width: "120px", height: "30px", backgroundColor: "transparent", border: "1px groove #8338ec", marginLeft: "90px", marginTop: "5px" }}>
                            <a style={{ textDecoration: "none", color: "#168aad", fontSize: "15px" }} href="https://youtu.be/p-nCXwIAibE" rel="noreferrer" target="_blank">Go </a>
                        </button> */}
                    </Card.Body>
                </Card>
                -
                <Card style={{ width: '18rem', margin: "2rem", border: "1px groove grey" }}>
                    <a href="https://youtu.be/cYlUCepjPfc" rel="noreferrer" target="_blank">
                        <Card.Img variant="top" src={games} className="img-fluid" style={{ maxWidth: "100%", maxHeight: "auto" }} />
                    </a>
                    <hr />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left' }}>
                        <Card.Title style={{ margin: "5px", fontSize: "20px", color: "#8338ec", marginLeft: "65px" }}>{language.Videogang.title}</Card.Title>
                        <Card.Text style={{ margin: "5px", marginLeft: "12px" }}>
                            {language.Videogang.description}
                        </Card.Text>
                        {/* <button type="button" style={{ width: "120px", height: "30px", backgroundColor: "transparent", border: "1px groove #8338ec", marginLeft: "90px", marginTop: "5px" }}>
                            <a style={{ textDecoration: "none", color: "#168aad", fontSize: "17px" }} href="https://youtu.be/cYlUCepjPfc" rel="noreferrer" target="_blank">Go </a>
                        </button> */}
                    </Card.Body>
                </Card>
                -
                <Card style={{ width: '18rem', margin: "2rem", border: "1px groove grey" }}>
                    <a href="https://crud-type-script-one.vercel.app/" rel="noreferrer" target="_blank">
                        <Card.Img variant="top" src={crud} className="img-fluid" style={{ maxWidth: "100%", maxHeight: "auto" }} />
                    </a>
                    <hr />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left' }}>
                        <Card.Title style={{ margin: "5px", fontSize: "20px", color: "#8338ec", marginLeft: "65px" }}>{language.Crud.title}</Card.Title>
                        <Card.Text style={{ margin: "5px", marginLeft: "12px" }}>
                            {language.Crud.description}
                        </Card.Text>
                        {/* <button type="button" style={{ width: "120px", height: "30px", backgroundColor: "transparent", border: "1px groove #8338ec", marginLeft: "90px", marginTop: "5px" }}>
                            <a style={{ textDecoration: "none", color: "#168aad", fontSize: "17px" }} href="https://crud-type-script-one.vercel.app/" rel="noreferrer" target="_blank">Go </a>
                        </button> */}
                    </Card.Body>
                </Card>
            </main>
        </div>
    )
}

export default Works;