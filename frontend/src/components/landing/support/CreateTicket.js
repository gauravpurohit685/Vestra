import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { FaPlus } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { BsGraphUp } from "react-icons/bs";
import { BsCreditCard } from "react-icons/bs";
import { FaCircleNotch } from "react-icons/fa";
import { BsCircle } from "react-icons/bs";


const CreateTicket = () => {
    return (
        <div className='container'>
            <h3 className='mb-5'>To create a ticket, select a relevant topic</h3>
            <div className='row mb-5'>
                <div className='col-4'>
                    <h3 className = "fs-6 mb-5"> <FaPlus /> Account Opening</h3>
                    <p className = "text-muted">Online Account Opening</p>
                    <p className = "text-muted">Offline Account Opening</p>
                    <p className = "text-muted">Company, Partnership and HUF Account Opening</p>
                    <p className = "text-muted">NRI account Opening</p>
                    <p className = "text-muted">Charges at Zerodha</p>
                    <p className = "text-muted">Zerodha IDFC FIRST Bank 3-in-1 Account</p>
                    <p className = "text-muted">Getting Started</p>
                </div>
                <div className='col-4'>
                    <h3 className = "fs-6 mb-5"> <FaUser /> Your Zerodha Account</h3>
                    <p className = "text-muted">Login Credentials</p>
                    <p className = "text-muted">Account Modification and Segment Addition</p>
                    <p className = "text-muted">DP ID and bank details</p>
                    <p className = "text-muted">Your profile</p>
                    <p className = "text-muted">Transfer and conversion of shares</p>
                </div>
                <div className='col-4'>
                    <h3 className = "fs-6 mb-5"><BsGraphUp /> Your Zerodha Account</h3>
                    <p className = "text-muted">Margin/leverage, Product and Order types</p>
                    <p className = "text-muted">Kite Web and Mobile</p>
                    <p className = "text-muted">Trading FAQs</p>
                    <p className = "text-muted">Corporate Actions</p>
                    <p className = "text-muted">Sentinel</p>
                    <p className = "text-muted">KiteAPI</p>
                    <p className = "text-muted">Pi and other platforms</p>
                    <p className = "text-muted">Stockreports+</p>
                    <p className = "text-muted">GTT</p>
                </div>        
            </div>
            <div className='row'>
                <div className='col-4'>
                    <h3 className = "fs-6 mb-5"> <BsCreditCard /> Account Opening</h3>
                    <p className = "text-muted">Adding Funds</p>
                    <p className = "text-muted">Fund Withdrawal</p>
                    <p className = "text-muted">eMandates</p>
                    <p className = "text-muted">Adding Bank Account</p>
                </div>
                <div className='col-4'>
                    <h3 className = "fs-6 mb-5"> <FaCircleNotch /> Console</h3>
                    <p className = "text-muted">Reports</p>
                    <p className = "text-muted">Ledger</p>
                    <p className = "text-muted">Portfolio</p>
                    <p className = "text-muted">60 days Challenge</p>
                    <p className = "text-muted">IPO</p>
                    <p className = "text-muted">Referral Program</p>
                </div>
                <div className='col-4'>
                    <h3 className = "fs-6 mb-5"><BsCircle /> Coin</h3>
                    <p className = "text-muted">UnderStanding Mutual Funds</p>
                    <p className = "text-muted">Buying and Selling through Coin</p>
                    <p className = "text-muted">Starting an SIP</p>
                    <p className = "text-muted">Managing your Portfolio</p>
                    <p className = "text-muted">Coin App</p>
                    <p className = "text-muted">Move to Coin</p>
                    <p className = "text-muted">Government Securities</p>
                </div>        
            </div>
        </div>
    )
};

export default CreateTicket;

