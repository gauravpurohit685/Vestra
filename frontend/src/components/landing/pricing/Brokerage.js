import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Brokerage = () => {

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <h3 className='text-primary text-center mb-5' >
                        Free Forever
                    </h3>
                    <ul className='text-muted' style={{lineHeight: 2}}>
                        <li>No subscription fees or hidden charges.</li>
                        <li>Unlimited paper trading with virtual funds.</li>
                        <li>Access to real-time market data.</li>
                        <li>Track orders, holdings, and positions at no cost.</li>
                        <li>Create an account and start trading instantly.</li>
                    </ul>
                </div>
                <div className='col-6'>
                    <h3 className='text-primary text-center mb-5'>
                        What's Included
                    </h3>
                    <ul className='text-muted' style={{lineHeight: 2}}>
                        <li>✔ Real-time market data.</li>
                        <li>✔ Unlimited virtual portfolio.</li>
                        <li>✔ Live watchlist.</li>
                        <li>✔ Orders & Holdings management.</li>
                        <li>✔ Paper trading experience.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Brokerage;