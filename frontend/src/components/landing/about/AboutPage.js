import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "./Hero";
import Teams from "./Teams";

const AboutPage = () => {
    return (
        <div>
            <Navbar />
            <div style = {{paddingLeft: "15rem", paddingRight: "15rem", paddingTop: "12rem", paddingBottom: "12rem"}}>
                <Hero />
                <Teams />
            </div>
            <Footer />
        </div>
    )
}

export default AboutPage;