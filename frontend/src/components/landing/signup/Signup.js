import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import homeHero from "url:../../../../public/homeHero.png";
import Navbar from '../Navbar';
import Footer from '../Footer';
import signup from '../../../utils/signup';

import {Link} from "react-router-dom";
import { useState } from 'react';

const Signup = () => {

    const [firstName , setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const [isMessage, setIsMessage] = useState(false);
    const [message, setMessage] = useState("");


    const signUpHandler = (e) => {
        e.preventDefault();
        setIsLoading(true);
        signup({firstName, lastName, emailId, password, setIsLoading, setIsMessage, setMessage});
    }

    return (
        <>
        <Navbar />
        <div style = {{paddingLeft: "15rem", paddingRight: "15rem", paddingTop: "12rem", paddingBottom: "12rem"}}>
            
            <div className='container'>
                <div className='row text-center mb-5'>
                    <h3>Open a free demat and trading account online</h3>
                    <p>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
                </div>

                <div className='row pt-5'>
                    <div className='col-6'>
                        <img src = {homeHero} style = {{width: "100%"}}/>
                    </div>
                    <div className='col-6'>
                        <div className="card shadow-sm p-4 border-0">
                            <h3 className="text-center mb-4">Sign Up</h3>

                            <form onSubmit={signUpHandler}>
                                <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">First Name</label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Last Name</label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                                </div>

                                <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={emailId}
                                    onChange={(e) => setEmailId(e.target.value)}
                                />
                                </div>

                                <div className="mb-4">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                </div>

                                {isMessage && <p className='text-center text-danger'>{message}</p>}

                                <button type="submit" className="btn btn-primary w-100">
                                    {
                                        isLoading?
                                        "Creating account..":
                                        "Create account"
                                    }
                                </button>

                                <p className="text-center mt-3 mb-0">
                                    Already have an account?{" "}
                                    <Link to="/login" className="text-decoration-none">
                                        Login
                                    </Link>
                                </p>
                            </form>
                            </div>
                    </div>
                </div>
            </div>
        </div>
         <Footer />
        </>
    )
};


export default Signup;