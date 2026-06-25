import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Link } from 'react-router-dom';

import logo from "url:../../../public/logo.svg";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "white", position: "fixed", width: "100%"}}>
            <div className="container py-2 d-flex justify-content-around">
                <Link className="navbar-brand" to="/">
                    <img src = {logo} style = {{width: "30%"}}/>
                </Link>
                <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item navbar-shift-right">
                    <Link className="nav-link active" to="/signup">Signup</Link>
                    </li>
                    <li className="nav-item navbar-shift-right">
                    <Link className="nav-link active" to="/about">About</Link>
                    </li>
                    <li className="nav-item navbar-shift-right">
                    <Link className="nav-link active" to="/product">Products</Link>
                    </li>
                    <li className="nav-item navbar-shift-right">
                    <Link className="nav-link active" to="/pricing">Pricing</Link>
                    </li>
                    <li className="nav-item navbar-shift-right">
                    <Link className="nav-link active" to="/support">Support</Link>
                    </li>
                    
                </ul>
                </div>
            </div>
            </nav>
    )
}

export default Navbar;