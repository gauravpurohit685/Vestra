import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import pricing0 from "url:../../../../public/pricing0.svg";
import intradayTrades from "url:../../../../public/intradayTrades.svg";

const Hero = () => {

    return (
        <div className='container text-center'>
            <h1 className='fs-3'>Charges </h1>
            <h2 className='fs-4 text-secondary border-bottom pb-3' style={{marginBottom: "10rem"}}>List of all charges and taxes</h2>

            <div className='container border-bottom'>
                <div className='row'>
                    <div className='col-4'> 
                        <img src = {pricing0}/>
                        <h3 className='mb-4'>Free equity delivery</h3>
                        <p style = {{lineHeight: 2}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>
                    <div className='col-4'> 
                        <img src = {intradayTrades}/>
                        <h3 className='mb-4'>Intraday and F&O trades</h3>
                        <p style = {{lineHeight: 2}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                    <div className='col-4'> 
                        <img src = {pricing0}/>
                        <h3 className='mb-4'>Free direct MF</h3>
                        <p style = {{lineHeight: 2}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                </div>
            </div> 
                 
        </div>
        
    )

}

export default Hero;

