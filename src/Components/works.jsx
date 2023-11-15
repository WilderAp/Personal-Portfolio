import "../styles/Works.css";
import Card from "react-bootstrap/Card";
import byr from "../images/byrlogo.png"
import games from "../images/Videogames.jpg";
import coolandmorty from "../images/coolandmorty.jpg";


const Works = () => {
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
                    <Card.Img variant="top" src={byr} className="img-fluid" style={{ maxWidth: "100%", maxHeight: "auto" }} />
                    <hr />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left' }}>
                        <Card.Title style={{ margin: "5px", fontSize: "20px", color: "#8338ec", marginLeft: "25px" }}>B&R - Busqueda y Rescate</Card.Title>
                        <Card.Text style={{ margin: "5px", marginLeft: "9px" }}>
                            A Final project at Henry, where we developed and created a website focus on finding missing people.
                        </Card.Text>
                        <button type="button" style={{ width: "120px", height: "30px", backgroundColor: "transparent", border: "1px groove #8338ec", marginLeft:"90px", marginTop:"5px"  }}>
                            <a style={{ textDecoration: "none", color: "#168aad", fontSize: "15px" }} href="https://pf-b-r-front-end.vercel.app/" rel="noreferrer" target="_blank">Go </a>
                        </button>
                    </Card.Body>
                </Card>
                -
                <Card style={{ width: '18rem', margin: "2rem", border: "1px groove grey" }}>
                    <Card.Img variant="top" src={coolandmorty} className="img-fluid" style={{ maxWidth: "100%", maxHeight: "auto" }} />
                    <hr />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left' }}>
                        <Card.Title style={{ margin: "5px", fontSize: "20px", color: "#8338ec", marginLeft: "60px" }}>API - Rick & Morty</Card.Title>
                        <Card.Text style={{ margin: "5px", marginLeft: "9px" }}>
                            I created this FullStack project using Node & React, from an online free api of Rick & Morty characters while studying at Henry
                        </Card.Text>
                        <button type="button" style={{ width: "120px", height: "30px", backgroundColor: "transparent", border: "1px groove #8338ec", marginLeft:"90px", marginTop:"5px" }}>
                            <a style={{ textDecoration: "none", color: "#168aad", fontSize: "15px" }} href="https://youtu.be/p-nCXwIAibE" rel="noreferrer" target="_blank">Go </a>
                        </button>
                    </Card.Body>
                </Card>
                -
                <Card style={{ width: '18rem', margin: "2rem", border: "1px groove grey" }}>
                    <Card.Img variant="top" src={games} className="img-fluid" style={{ maxWidth: "100%", maxHeight: "auto" }} />
                    <hr />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left' }}>
                        <Card.Title style={{ margin: "5px", fontSize: "20px", color: "#8338ec", marginLeft: "65px" }}>API - Videogames</Card.Title>
                        <Card.Text style={{ margin: "5px", marginLeft: "12px"}}>
                            I created this FullStack API as my Individual project at Henry, oriented to practice
                            and create
                        </Card.Text>
                        <button type="button" style={{ width: "120px", height: "30px", backgroundColor: "transparent", border: "1px groove #8338ec", marginLeft:"90px", marginTop:"5px" }}>
                            <a style={{ textDecoration: "none", color: "#168aad", fontSize: "17px" }} href="https://youtu.be/cYlUCepjPfc" rel="noreferrer" target="_blank">Go </a>
                        </button>
                    </Card.Body>
                </Card>
            </main>
        </div>
    )
}

export default Works;