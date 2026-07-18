import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import nithinKamath from "url:../../../../public/gauravPurohit.png"

const Teams = () => {
    return (
        <div className='container pt-5 mt-5'>
            <div className='row'>
                <div className='col-6 text-center' style={{paddingTop: "5rem"}}>
                    <img src = {nithinKamath} className='mb-3' style={{width: "50%", borderRadius : "50%"}}/>
                    <p className='fs-5'>Gaurav Purohit</p>
                    <p>Founder, CEO</p>
                </div>
                <div className='col-6'>
                    <h3 style ={{marginBottom: "5rem"}}>People</h3>
                    <p>Gaurav Purohit founded Vestra to make stock market learning more accessible through a realistic paper trading experience. As a Computer Science student, he built the platform from scratch to combine modern web technologies with real-time market simulation.</p>
                    <p>He is passionate about full-stack development, algorithmic problem solving, and building products that solve real-world problems.</p>
                    <p>When he's not coding, you'll probably find him solving competitive programming problems, working out at the gym, or exploring new technologies.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Teams;