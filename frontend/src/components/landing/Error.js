import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from "./Navbar";
import Footer from "./Footer";

import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <Navbar />
            <div style = {{paddingLeft: "15rem", paddingRight: "15rem", paddingTop: "12rem", paddingBottom: "12rem"}}>
                <div className='container text-center my-5 pt-5 border-bottom pb-4'>
                        <div className='row'>
                                <h2>Error 404 Not found</h2>
                            </div>
                        <div className='row'>
                                <p>
                                    Sorry the page that you are looking for could not be found
                                </p>
                        </div>
                        <div className='row'>
                                <Link to = "/" className='btn btn-primary m-auto' style={{
                                    width: "auto",
                                }}>
                                    Home
                                </Link>
                        </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Error;