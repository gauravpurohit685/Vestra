import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import logo from "url:../../../public/logo.svg";


const Footer = () => {
    return (
        <footer className='border-top pt-5 bg-body-tertiary'>
            <div className="container ">
                <div className="row" style={{marginBottom: "9rem"}}>
                    <div className='col text-center' style={{marginRight: "5rem"}}>
                        <img src={logo} style={{width: "80%"}} className='mb-4'/>
                        <p>© 2010 - 2026, Zerodha Broking Ltd. All rights reserved.</p>
                    </div>
                    <div className='col text-center'>
                        <p className='mb-1 row fw-bold' style = {{textDecoration: "none", color: "black"}}>Company</p>
                        <p className='mb-1 row text-muted' >About</p>
                        <p className='mb-1 row text-muted' >Producst</p>
                        <p className='mb-1 row text-muted' >Pricing</p>
                        <p className='mb-1 row text-muted' >Referral programme</p>
                        <p className='mb-1 row text-muted' >Careers</p>
                        <p className='mb-1 row text-muted' >Zerodha tech</p>
                        <p className='mb-1 row text-muted' >Press & Media</p>
                        <p className='mb-1 row text-muted' >Zerodha cares(CSR)</p>
                    </div>
                    <div className='col text-center'>
                        <p className='mb-1 row fw-bold' style = {{textDecoration: "none", color: "black"}}>Support</p>
                        <p className='mb-1 row text-muted' style = {{textDecoration: "none", color: "black"}}>Contact</p>
                        <p className='mb-1 row text-muted' >Support portal</p>
                        <p className='mb-1 row text-muted' >Z-Connect blog</p>
                        <p className='mb-1 row text-muted' >List of charges</p>
                        <p className='mb-1 row text-muted' >Downloads & resources</p>
                    </div>
                    <div className='col text-center'>
                        <p className='mb-1 row fw-bold' style = {{textDecoration: "none", color: "black"}}>Account</p>
                        <p className='mb-1 row text-muted' >Open an account</p>
                        <p className='mb-1 row text-muted' >Fund transfer</p>
                        <p className='mb-1 row text-muted' >60 day challenge</p>
                    </div>
                </div>
                <div className='row fs-6 text-muted' style={{lineHeight: 1.2}}>
                    <p>
                        Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                    </p>
                    <p>
                        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                    </p>
                    <p>
                        Smart Online Dispute Resolution | Grievances Redressal Mechanism
                    </p>
                    <p>
                        Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                    </p>
                    <p>
                        Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                    </p>
                    <p>
                        India's largest broker based on networth as per NSE. NSE broker factsheet
                    </p>
                    <p>
                        "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
                    </p>
                    <p>
                        *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
                    </p>
                    <p>
                        Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;