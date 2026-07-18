import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Link } from 'react-router-dom';

const OpenAccount = () => {
    return (
        <div className='container text-center my-5 pt-5 border-bottom pb-4'>
                <div className='row'>
                        <h2>SignUp for Vestra</h2>
                    </div>
                <div className='row'>
                        <p>
                            Everything you need to learn the stock market—live prices, virtual funds, and realistic paper trading, all at no cost.
                        </p>
                </div>
                <div className='row'>
                        <Link to = "/signup"className='btn btn-primary m-auto' style={{
                            width: "auto",
                        }}>
                            Sign Up
                        </Link>
                </div>
        </div>
    )
}

export default OpenAccount;