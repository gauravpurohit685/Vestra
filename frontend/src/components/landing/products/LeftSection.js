import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { FaArrowRight } from 'react-icons/fa';


const LeftSection = (props) => {

    const {img, heading, para, linksLst, downImg1, downImg2} = props

    return (
        <div className='container' style = {{marginBottom: "10rem"}}>
            <div className='row'>
                <div className='col-6' >
                    <img src = {img} style={{width: "100%"}}/>
                </div>
                <div className='col-6' style={{paddingLeft: "8rem", lineHeight: 1.7}}>
                    <h3 className='mb-5'>{heading}</h3>
                    <p>{para}</p>
                    <div className='row mb-4'>
                        {
                            linksLst.map((res,index) => (
                                <a className='col' style={{textDecoration: 'none', cursor: "pointer"}} key={index}>
                                    {res} <FaArrowRight />
                                </a>
                            ))
                        }
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <img src = {downImg1} style = {{width: "90%"}}/>
                        </div>
                        <div className='col'>
                            <img src = {downImg2} style = {{width: "85%"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSection;