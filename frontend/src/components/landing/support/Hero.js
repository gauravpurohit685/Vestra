import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Hero = () => {

    return (
        <section style={{backgroundColor: "rgb(56, 126, 209)", paddingTop: "90px"}}>
            <div className='container text-white pb-5 mb-5' >
                <div className='row'>
                    <p className='col fs-4 pb-5' style={{textAlign: "left"}}>
                        Support Portal
                    </p>
                    <p className='col fs-5 text-decoration-underline' style={{textAlign: "right"}}>
                        Track Tickets
                    </p>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <p className='fs-3'>Search for an answer or browse help topics to create a ticket</p>
                        <p><span className='fs-6 text-decoration-underline' style={{paddingRight: "0.5rem"}}>Track account opening</span> <span className='fs-6 text-decoration-underline' style={{paddingRight: "0.5rem"}}>Track segment activation</span> <span className='fs-6 text-decoration-underline' style={{paddingRight: "0.5rem"}}>Indtraday.<br/></span> <span className='fs-6 text-decoration-underline' style={{paddingRight: "0.5rem"}}>margins</span> <span className='fs-6 text-decoration-underline' style={{paddingRight: "0.5rem"}}>Kite user manual</span></p>
                    </div>
                    <div className='col-6' style={{paddingLeft: "10rem"}}>
                        <p className='fs-3'>Featured</p>
                        <ol style = {{paddingLeft: "2rem", lineHeight: 2, textDecoration: "underline"}}>
                            <li>Current Takeovers and Delisting-January 2024</li>
                            <li>Latest Intraday leverages-MIS & CO</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;