import Card from "react-bootstrap/Card";
import "../styles/Skills.css"

const Skills = () => {
    return (
        <div className="Skills" id="Skills">
            <div className='works-main' style={{ fontSize: "24px", marginBottom: "20px" }}>
                <span><span style={{ color: '#168aad' }}>#</span>skills <span style={{ color: "#8338ec" }}>------------------------------------</span></span>
            </div>
            <br />
            <main className='skills-main'>
                <Card style={{ width: '14rem', margin: "2rem", border: "1px groove grey" }}>
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left' }}>
                        <Card.Title style={{ margin: "5px", color: "#168aad"  }}>Languajes</Card.Title>
                        <hr />
                        <Card.Text style={{ margin: "5px", color: "#adb5bd" }}>
                            JavaScript ----
                            NodeJS
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '14rem', margin: "2rem", border: "1px groove grey" }}>
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left' }}>
                        <Card.Title style={{ margin: "5px", color: "#8338ec"  }}>Databases</Card.Title>
                        <hr />
                        <Card.Text style={{ margin: "5px", color: "#adb5bd" }}>
                            MySQL ----
                            PostgreSQL
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '14rem', margin: "2rem", border: "1px groove grey" }}>
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left' }}>
                        <Card.Title style={{ margin: "5px", color: "#168aad"  }}>Frameworks & Libraries</Card.Title>
                        <hr />
                        <Card.Text style={{ margin: "5px", color: "#adb5bd" }}>
                            React - Vite - Redux - Express.js - Sequelize  
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '14rem', margin: "2rem", border: "1px groove grey" }}>
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left' }}>
                        <Card.Title style={{ margin: "5px", color: "#8338ec" }}>Tools</Card.Title>
                        <hr />
                        <Card.Text style={{ margin: "5px", color: "#adb5bd" }}>
                            VSCode ---
                            Git --- Github
                            --- Slack --- Trello
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '14rem', margin: "2rem", border: "1px groove grey" }}>
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left' }}>
                        <Card.Title style={{ margin: "5px", color: "#168aad" }}>Others</Card.Title>
                        <hr />
                        <Card.Text style={{ margin: "5px", color: "#adb5bd" }}>
                            HTML5 --
                            CSS3 --
                            AJAX
                        </Card.Text>
                    </Card.Body>
                </Card>

            </main>

        </div>


    )
}

export default Skills;