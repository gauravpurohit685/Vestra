import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Link } from 'react-router-dom';

import { FaArrowRight } from "react-icons/fa";


const Pricing = () => {
    return (
        <div className='container my-5 pt-5'>
            <div className='row'>
                <div className='col-6'>
                    <h2 className='row'>Unbeatable pricing</h2>
                    <p>Master the stock market with a realistic paper trading experience<br /> Practice using live market data, virtual funds,<br/> and powerful portfolio tools—all completely free.</p>
                    <Link to = "/pricing" className='text-text-primary ' style={{textDecoration: "none", cursor: "pointer"}}>See pricing {<FaArrowRight />}</Link>
                </div>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col-6 border p-4'>
                            <h3 className='mb-2'>
                                $0
                            </h3>
                            <p>
                                Live Market Data
                            </p>
                        </div>
                        <div className='col-6 border p-4'>
                            <h3 className='mb-2'>
                                $0
                            </h3>
                            <p>
                                Paper Trading
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;