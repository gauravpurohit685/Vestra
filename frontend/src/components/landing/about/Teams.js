import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import nithinKamath from "url:../../../../public/nithinKamath.jpg"

const Teams = () => {
    return (
        <div className='container pt-5 mt-5'>
            <div className='row'>
                <div className='col-6 text-center' style={{paddingTop: "5rem"}}>
                    <img src = {nithinKamath} className='mb-3' style={{width: "50%", borderRadius : "50%"}}/>
                    <p className='fs-5'>Nithin Kamath</p>
                    <p>Founder, CEO</p>
                </div>
                <div className='col-6'>
                    <h3 style ={{marginBottom: "5rem"}}>People</h3>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Teams;