import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Link } from 'react-router-dom';

import homeHero from "url:../../../../public/homeHero.png";
const Hero = () => {

    return (
        <div className='container text-center mb-5'>
            <div className='row mb-5'>
                <img src = {homeHero} alt="Hero image" />
            </div>
            <div className='row'>
                <h2>Invest in everything</h2>
            </div>
            <div className='row'>
                <p>
                    Learn, practice, and master the stock market without risking real money.
                </p>
            </div>
            <div className='row'>
                <Link to = "/signup" className='btn btn-primary m-auto' style={{
                    width: "auto",
                }}>
                    Sign Up
                </Link>
            </div>
        </div>
    )
}

export default Hero;