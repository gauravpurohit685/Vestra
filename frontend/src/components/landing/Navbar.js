import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import logo from "url:../../../public/logo.svg";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "white", position: "fixed", width: "100%"}}>
            <div className="container py-2 d-flex justify-content-around">
                <a className="navbar-brand" href="#">
                    <img src = {logo} style = {{width: "30%"}}/>
                </a>
                <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item navbar-shift-right">
                    <a className="nav-link active" href="#">Signup</a>
                    </li>
                    <li className="nav-item navbar-shift-right">
                    <a className="nav-link active" href="#">About</a>
                    </li>
                    <li className="nav-item navbar-shift-right">
                    <a className="nav-link active" href="#">Products</a>
                    </li>
                    <li className="nav-item navbar-shift-right">
                    <a className="nav-link active" href="#">Pricing</a>
                    </li>
                    <li className="nav-item navbar-shift-right">
                    <a className="nav-link active" href="#">Support</a>
                    </li>
                    
                </ul>
                </div>
            </div>
            </nav>
    )
}

export default Navbar;