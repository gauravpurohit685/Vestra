import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <div className='mb-5'><a className='text-primary' style={{textDecoration: "none"}}>Varsity {<FaArrowRight />}</a></div>
                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a className='text-primary' style={{textDecoration: "none"}}>TradingQ&A {<FaArrowRight />}</a>
                </div>
            </div>
        </div>
    )
}

export default Education;