import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import largestBroker from "url:../../../../public/largestBroker.svg";
import pressLogos from "url:../../../../public/pressLogos.png";

const Award = () => {
    return (
        <div className = 'container my-5 py-5'>
            <div className="row">
                <div className="col-6 mr-5">
                    <img src={largestBroker}/>
                </div>
                <div className="col-6">
                    <h1 className="row mb-3">Largest stock broker in India </h1>
                    <p className="row mb-5">2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className="row">
                        <div className="col-6">
                            <ul style = {{lineHeight: 2.5}}>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul style = {{lineHeight: 2.5}}>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govern</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <img src= {pressLogos} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Award;