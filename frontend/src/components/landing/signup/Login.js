import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import signupImg from "url:../../../../public/signupImg.png";
import Navbar from '../Navbar';
import Footer from '../Footer';
import login from '../../../utils/login';

import {Link} from "react-router-dom";
import { useState } from 'react';

const Login = () => {

    const [isLoginSuccessful, setIsLoginSuccessful] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [emailId, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const loginHandler = (e) => {
        e.preventDefault();
        setIsLoading(true);
        login({emailId, password, setIsLoading,setIsLoading,setErrorMessage});
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
                        <img src = {signupImg} style = {{width: "100%"}}/>
                    </div>
                    <div className='col-6'>
                        <div className="card shadow-sm p-4 border-0">
                            <h3 className="text-center mb-4">Login</h3>

                            <form onSubmit={loginHandler}>
                                <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={emailId}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                </div>

                                <div className="mb-4">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    value = {password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                </div>

                                {isLoginSuccessful && <p className='text-center text-danger px-4'>{errorMessage}</p>}

                                <button type="submit" className="btn btn-primary w-100" disabled = {isLoading}>
                                {
                                    isLoading?
                                    "Logging in..":
                                    "Log in"
                                }
                                </button>

                                <p className="text-center mt-3 mb-0">
                                Don't have an account?{" "}
                                <Link to="/signup" className="text-decoration-none">
                                    Sign Up
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


export default Login;