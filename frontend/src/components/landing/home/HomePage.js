import Hero from "./Hero"
import Award from "./Awards"
import Navbar from "../Navbar"
import Footer from "../Footer"
import Stats from "./Stats"
import Pricing from "./Pricing"
import Education from "./Education"

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <div style = {{padding: "12rem"}}>
                <Hero />
                <Award />
                <Stats />
                <Pricing />
                <Education /> 
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;