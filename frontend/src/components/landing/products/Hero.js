import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Hero = () => {
    return (
        <div className='container text-center mb-5 pb-5'>
            <h3 className='fs-3'>
                Zerodha Products
            </h3>
            <p className='mb-4 fs-4'>
                Sleek, modern, and intuitive trading platforms
            </p>
            <p>
                Check out our <a className = "text-primary"style={{textDecoration: "none"}}>investment offerings →</a>
            </p>
        </div>
    )
}

export default Hero;