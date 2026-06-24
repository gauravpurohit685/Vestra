import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import smallcaseLogo from "url:../../../../public/smallcaseLogo.png";
import streakLogo from "url:../../../../public/streakLogo.png";
import sensibullLogo from "url:../../../../public/sensibullLogo.svg";
import zerodhaFundhouse from "url:../../../../public/zerodhaFundhouse.png";
import goldenpiLogo from "url:../../../../public/goldenpiLogo.png";
import dittoLogo from "url:../../../../public/dittoLogo.png";


import UniverseSection from './UniverseSection';


const Universe = () => {

    return (
        <div className='container'>
            <div className='text-center fs-3'>
                The Zerodha Universe
            </div>
            <div className='text-center' style={{marginBottom: "4rem"}}>
                Extend your trading and investment experience even further with our partner platforms
            </div>
                <div className='row m-auto'>
                    <div className='col'>
                        <UniverseSection img = {smallcaseLogo} description = "Thematic investment platform"/>
                        <UniverseSection img = {streakLogo} description = "Algo & strategy platform"/>
                    </div>
                    <div className='col'>
                        <UniverseSection img = {sensibullLogo} description = "Options trading platform"/>
                        <UniverseSection img = {zerodhaFundhouse} description = "Asset Management"/>
                    </div>
                    <div className='col'>
                        <UniverseSection img = {goldenpiLogo} description = "Bonds trading platform"/>
                        <UniverseSection img = {dittoLogo} description = "Insurance"/>
                    </div>
                </div>
        </div>
    )

}

export default Universe;