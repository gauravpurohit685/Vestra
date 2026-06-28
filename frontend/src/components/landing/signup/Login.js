import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import signup from "url:../../../../public/signup.png";
import Navbar from '../Navbar';
import Footer from '../Footer';

import {Link} from "react-router-dom"

const Login = () => {

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
                        <img src = {signup} style = {{width: "100%"}}/>
                    </div>
                    <div className='col-6'>
                        <div className="card shadow-sm p-4 border-0">
                            <h3 className="text-center mb-4">Login</h3>

                            <form>
                                <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                />
                                </div>

                                <div className="mb-4">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                />
                                </div>

                                <button type="submit" className="btn btn-primary w-100">
                                Login
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