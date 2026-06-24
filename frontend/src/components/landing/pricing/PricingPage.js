import Navbar from "../Navbar";
import Footer from "../Footer";

import Hero from "./Hero";
import OpenAccount from "./OpenAccount";
import Brokerage from "./Brokerage";


const PricingPage = () => {
    return (
        <div>
            <Navbar />
            <div style = {{paddingLeft: "15rem", paddingRight: "15rem", paddingTop: "12rem", paddingBottom: "12rem"}}>
                <Hero />
                <OpenAccount />
                <Brokerage />
            </div>
            <Footer />
        </div>
    )
}

export default PricingPage;