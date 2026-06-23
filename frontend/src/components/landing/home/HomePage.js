import Hero from "./Hero"
import Award from "./Awards"
import Navbar from "../Navbar"
import Footer from "../Footer"
import Stats from "./Stats"
import Pricing from "./Pricing"
import Education from "./Education"

const HomePage = () => {
    return (
        <div style = {{padding: "12rem"}}>
            <Navbar />
            <Hero />
            <Award />
            <Stats />
            <Pricing />
            <Education />
            <Footer />
        </div>
    )
}

export default HomePage;