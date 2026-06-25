import Navbar from "../Navbar";
import Footer from "../Footer";
import CreateTicket from "./CreateTicket";
import Hero from "./Hero";


const SupportPage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <div style = {{paddingLeft: "15rem", paddingRight: "15rem", paddingBottom: "12rem"}}>
                <CreateTicket />
            </div>
            <Footer />
        </div>
    )
}

export default SupportPage;