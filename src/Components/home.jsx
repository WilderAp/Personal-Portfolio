
import yo from "../images/IMG_0019 EDITED.png"
// import yo2 from "../images/IMG_0019 2 EDITED.png"
// import yo3 from "../images/FOTO EDITED.png"
import "../styles/Home.css"

const Home = () => {

    return (
        <main style={{ display:"flex", margin:"110px", justifyContent: "space-between", alignItems: "center" }}>
            <div className="description"> 
                <span style={{fontSize:"26px"}}>Hi I am Wilder a <span style={{ color: 'purple' }}>Fullstack back-end </span> developer</span>
                <br />
                <br />
                <br />
                <span style={{fontSize:"14px"}}>And I craft <span style={{ color: 'purple' }}>Websites</span> using <span style={{ color: 'purple' }}> tecnologies</span><span></span> like <span style={{ color: 'purple' }}>React</span> & <span style={{ color: 'purple' }}>NodeJS</span></span>
                <br />
                <br />
                <br />
                <button type="button" style={{ width: "130px", height: "40px", backgroundColor: "transparent", borderBlockColor: "purple", border: "1px groove purple" }}>
                    <a style={{ textDecoration: "none", color: "purple", fontSize:"16px" }} href="mailto:wilderasprilla321@gmail.com" rel="noreferrer" target="_blank">Contact me !!</a>
                </button>
            </div>

            <span>................</span>
            <span>................</span>
            <span>................</span>
            <div style={{display:"flex", flexDirection: "column", }}>

                {/* style={{ display: 'flex', flexDirection: "column", alignItems: "flex-end" }} */}
                <img style={{display:"flex", height: '500px', margin: '0', padding: '0' }} src={yo} alt="Foto personal" className="imagen" />
                {/* , alignSelf: 'flex-start' } */}
                <span style={{ color: '#adb5bd', border: '1px groove grey', padding: '7px' }}><span style={{ border: '1px solid purple', width: '5px', backgroundColor: 'purple', color: 'purple' }}>....</span> Currently working on <span >Portfolio</span></span>
            </div>
        </main>
    )
}

export default Home;