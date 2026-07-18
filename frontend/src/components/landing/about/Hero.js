import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Hero = () => {
    return (
        <div className='container'>
            <div className='row mb-5 pb-5 fs-3 text-center' style = {{lineHeight: 1}}>
                <p>We simplify stock market learning for everyone.</p>
                <p>Now, we're redefining paper trading with technology.</p>
            </div>
            <div className='row border-top' style = {{paddingTop: "5rem", paddingLeft: "5rem", paddingRight: "5rem", lineHeight: 1.7}}>
                <div className='col-6'>
                   <p>Vestra was created with a simple goal—to provide aspiring traders with a realistic platform to learn and practice stock market trading without risking real money. By combining live market data with virtual funds, Vestra delivers an experience that closely resembles real-world trading.</p>
                   <p>Built entirely from the ground up, the platform focuses on simplicity, performance, and usability. From creating a watchlist and placing virtual orders to tracking holdings, positions, and portfolio performance, every feature is designed to help users understand how modern trading platforms work.</p>
                </ div>
                <div className='col-6'>
                    <p>Vestra also serves as a demonstration of modern full-stack web development. The platform integrates a responsive React frontend with a Node.js and Express backend, secure JWT-based authentication, MongoDB for data management, and real-time market updates to create a seamless trading experience.</p>
                    <p>As the project continues to evolve, new features, improved analytics, and an even richer trading experience will be added, making Vestra a continuously growing platform for learning and innovation.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero;