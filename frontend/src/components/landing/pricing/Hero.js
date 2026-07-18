import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import pricing0 from "url:../../../../public/pricing0.svg";

const Hero = () => {

    return (
        <div className='container text-center'>
            <h1 className='fs-3'>Charges </h1>
            <h2 className='fs-4 text-secondary border-bottom pb-3' style={{marginBottom: "10rem"}}>List of all charges and taxes</h2>

            <div className='container border-bottom'>
                <div className='row'>
                    <div className='col-4'> 
                        <img src = {pricing0}/>
                        <h3 className='mb-4'>Free Forever</h3>
                        <p style = {{lineHeight: 2}}>Practice stock trading with unlimited virtual funds—no subscriptions, no hidden charges, and no risk to your real money.</p>
                    </div>
                    <div className='col-4'> 
                        <img src = {pricing0}/>
                        <h3 className='mb-4'>Live Market Data</h3>
                        <p style = {{lineHeight: 2}}>Trade using live market prices and experience realistic market conditions with instant portfolio updates.</p>
                    </div>
                    <div className='col-4'> 
                        <img src = {pricing0}/>
                        <h3 className='mb-4'>Paper Trading</h3>
                        <p style = {{lineHeight: 2}}>Build confidence, test strategies, and sharpen your trading skills without risking a single rupee.</p>
                    </div>
                </div>
            </div>                  
        </div>
        
    )

}

export default Hero;

