import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Link } from 'react-router-dom';

import education from "url:../../../../public/education.svg";
import { FaArrowRight } from "react-icons/fa";

const Education = () => {

    return (
        <div className='container mt-5 pt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src = {education}/>
                </div>
                <div className= 'col-6'>
                    <h3 className='mb-4'>Free and open market education</h3>
                    <p>Your complete guide to understanding the stock market—from placing your first order to building a confident trading strategy.</p>
                    <div className='mb-5'><Link to = "/varsity" className='text-primary' style={{textDecoration: "none"}}>Varsity {<FaArrowRight />}</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Education;