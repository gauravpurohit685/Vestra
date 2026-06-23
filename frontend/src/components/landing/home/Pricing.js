import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { FaArrowRight } from "react-icons/fa";


const Pricing = () => {
    return (
        <div className='container my-5 pt-5'>
            <div className='row'>
                <div className='col-6'>
                    <h2 className='row'>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price <br/> transparency in India. Flat fees and no hidden charges</p>
                    <a className='text-text-primary ' style={{textDecoration: "none", cursor: "pointer"}}>See pricing {<FaArrowRight />}</a>
                </div>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col-6 border p-4'>
                            <h3 className='mb-2'>
                                ₹0
                            </h3>
                            <p>
                                Free equity delivery<br/> and direct mutual funds
                            </p>
                        </div>
                        <div className='col-6 border p-4'>
                            <h3 className='mb-2'>
                                ₹20
                            </h3>
                            <p>
                                Intraday and F&O
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;