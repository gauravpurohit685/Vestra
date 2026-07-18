import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Link } from 'react-router-dom';

import logo from "url:../../../public/logo.svg";


const Footer = () => {
    return (
        <footer className='border-top pt-5 bg-body-tertiary'>
            <div className="container ">
                <div className="row" style={{marginBottom: "9rem"}}>
                    <div className='col text-center' style={{marginRight: "5rem"}}>
                        <img src={logo} style={{width: "80%"}} className='mb-4'/>
                        <p>© 2026 Vestra. All rights reserved.</p>
                    </div>
                    <div className='col text-center'>
                        <p className='mb-1 row fw-bold' style = {{textDecoration: "none", color: "black"}}>Company</p>
                        <Link to = "/about" className='mb-1 row text-muted'  style={{textDecoration: "none"}}>About</Link>
                        <Link to = "/pricing" className='mb-1 row text-muted' style={{textDecoration: "none"}}>Pricing</Link>
                    </div>
                    <div className='col text-center'>
                        <p className='mb-1 row fw-bold' style = {{textDecoration: "none", color: "black"}}>Support</p>
                        <Link to = "/varsity" className='mb-1 row text-muted' style={{textDecoration: "none"}}>Tutorial</Link>
                        <Link to = "/pricing" className='mb-1 row text-muted' style={{textDecoration: "none"}}>List of charges</Link>
                    </div>
                    <div className='col text-center'>
                        <p className='mb-1 row fw-bold' style = {{textDecoration: "none", color: "black"}}>Account</p>
                        <Link to = "/signup" className='mb-1 row text-muted' style={{textDecoration: "none"}}>Open an account</Link>
                    </div>
                </div>
                <div className='row fs-6 text-muted' style={{lineHeight: 1.2}}>
                    <p>
                        Vestra is a stock market simulation and portfolio management platform developed for educational and demonstration purposes. The platform provides users with a virtual trading environment to practice investing strategies using simulated funds and market data.
                    </p>
                    <p>
                        The prices, charts, and financial information displayed on Vestra are intended solely for informational purposes and should not be considered financial, investment, or trading advice. Users are solely responsible for any investment decisions made outside the platform.
                    </p>
                    <p>
                        Investing in financial markets involves significant risk. Past performance does not guarantee future results, and users should conduct their own research or consult a qualified financial advisor before making real-world investment decisions.
                    </p>
                    <p>
                        Vestra does not facilitate the execution of real stock market transactions, hold customer funds, provide brokerage services, or act as a depository participant. Any resemblance to existing trading platforms is purely for educational or interface familiarity.
                    </p>
                    <p>
                        The developers of Vestra make reasonable efforts to ensure the accuracy of the information presented; however, no warranty is provided regarding the completeness, reliability, or availability of the data. Market information may be delayed, simulated, or obtained from third-party data providers.
                    </p>
                    <p>
                        India's largest broker based on networth as per NSE. NSE broker factsheet
                    </p>
                    <p>
                        By using Vestra, you acknowledge that this platform is intended for learning, experimentation, and portfolio tracking only. Unauthorized access, misuse of the platform, or attempts to manipulate its functionality are strictly prohibited.
                    </p>
                    <p>
                        © 2026 Vestra. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;