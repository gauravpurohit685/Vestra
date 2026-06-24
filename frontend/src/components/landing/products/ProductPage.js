import Navbar from "../Navbar";
import Footer from "../Footer";

import Hero from "./Hero";
import MainSection from "./MainSection";
import Universe from "./Universe";


const ProductPage = () => {
    return (
        <div>
            <Navbar />
            <div style = {{paddingLeft: "15rem", paddingRight: "15rem", paddingTop: "12rem", paddingBottom: "12rem"}}>
                <Hero />
                <MainSection />
                <Universe />
            </div>
            <Footer />
        </div>
    )
}


export default ProductPage;