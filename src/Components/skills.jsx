import Card from "react-bootstrap/Card";
import "../styles/Skills.css"

const Skills = () => {
    return (
        <div>
            <div className='works-main' style={{ fontSize: "24px", marginBottom: "20px" }}>
                <span><span style={{ color: 'purple' }}>#</span>skills <span style={{ color: "purple" }}>------------------------------------</span></span>
            </div>
            <main className='skills-main'>
                <Card style={{ width: '14rem', margin: "2rem", border: "1px groove grey" }}>
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left' }}>
                        <Card.Title style={{ margin: "5px",  }}>Languajes</Card.Title>
                        <hr />
                        <Card.Text style={{ margin: "5px", color: "#adb5bd" }}>
                            JavaScript ----
                            NodeJS
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '14rem', margin: "2rem", border: "1px groove grey" }}>
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left' }}>
                        <Card.Title style={{ margin: "5px",  }}>Databases</Card.Title>
                        <hr />
                        <Card.Text style={{ margin: "5px", color: "#adb5bd" }}>
                            MySQL ----
                            PostgreSQL
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '14rem', margin: "2rem", border: "1px groove grey" }}>
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left' }}>
                        <Card.Title style={{ margin: "5px",  }}>Frameworks & Libraries</Card.Title>
                        <hr />
                        <Card.Text style={{ margin: "5px", color: "#adb5bd" }}>
                            React - Vite - Redux - Express.js - Sequelize  
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '14rem', margin: "2rem", border: "1px groove grey" }}>
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left' }}>
                        <Card.Title style={{ margin: "5px" }}>Tools</Card.Title>
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
                        <Card.Title style={{ margin: "5px",  }}>Others</Card.Title>
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