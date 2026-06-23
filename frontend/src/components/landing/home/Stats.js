import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import ecosystem from "url:../../../../public/ecosystem.png"
const Stats = () => {


    return (
        <div className="container mt-5 pt-5 mb-5">
            <div className="row">
                <div className="col-6">
                    <h1 className="row">Trust with confidence</h1>
                    <h2 className="row mb-3">
                        Customer-first always
                    </h2>
                    <p className="row">
                        That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
                    </p>
                    <h2 className="row mb-3">
                        No spam or gimmicks
                    </h2>
                    <p className="row">
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.
                    </p>
                    <h2 className="row mb-3">
                        The Zerodha universe
                    </h2>
                    <p className="row">
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </p>
                    <h2 className="row mb-3">
                        Do better with money
                    </h2>
                    <p className="row">
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
                    </p>
                </div>
                <div className="col-6">
                    <img src={ecosystem} style={{maxWidth: "40vw"}}/>
                </div>
            </div>
        </div>
    )

}

export default Stats;