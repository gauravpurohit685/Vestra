import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { FaArrowRight } from 'react-icons/fa';


const RightSection = (props) => {

    const {img, heading, para, linksLst} = props

    return (
        <div className='container' style={{marginBottom: "10rem"}}>
            <div className='row'>
                <div className='col-6' style={{paddingRight: "8rem", lineHeight: 1.7}}>
                    <h3 className='mb-5'>{heading}</h3>
                    <p>{para}</p>
                    <div className='row mb-4'>
                        {
                            linksLst.map((res,index) => (
                                <a className='col' style={{textDecoration: 'none'}} key={index}>
                                    {res} <FaArrowRight />
                                </a>
                            ))
                        }
                    </div>
                </div>
                <div className='col-6' >
                    <img src = {img} style={{width: "100%"}}/>
                </div>
            </div>
        </div>
    )
}

export default RightSection;