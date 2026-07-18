import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import awards from "url:../../../../public/awards.png";

const Award = () => {
    return (
        <div className = 'container my-5 py-5'>
            <div className="row">
                <div className="col-6">
                    <img src={awards} style = {{width: "90%"}} />
                </div>
                <div className="col-6">
                    <h1 className="row mb-3">Built for Learning</h1>
                    <p className="row mb-5">Whether you're a beginner or an aspiring trader, Vestra provides all the tools you need to learn the markets without risking real money</p>
                    <div className="row">
                        <div className="col-6">
                            <ul style = {{lineHeight: 2.5}}>
                                <li>Real-Time Prices</li>
                                <li>Portfolio Tracking</li>
                                <li>Stock Watchlists</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul style = {{lineHeight: 2.5}}>
                                <li>Orders History</li>
                                <li>Holdings & Positions</li>
                                <li>Performance Analytics</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Award;