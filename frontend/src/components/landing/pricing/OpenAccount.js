import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Link } from 'react-router-dom';

const OpenAccount = () => {
    return (
        <div className='container text-center my-5 pt-5 border-bottom pb-4'>
                <div className='row'>
                        <h2>Open a Zerodha account</h2>
                    </div>
                <div className='row'>
                        <p>
                            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                        </p>
                </div>
                <div className='row'>
                        <Link className='btn btn-primary m-auto' style={{
                            width: "auto",
                        }}>
                            Sign Up
                        </Link>
                </div>
        </div>
    )
}

export default OpenAccount;