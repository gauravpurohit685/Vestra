import RightSection from "./RightSection";
import LeftSection from "./LeftSection";

import console from "url:../../../../public/console.png";
import coin from "url:../../../../public/coin.png";
import kite from "url:../../../../public/kite.png";
import kiteconnect from "url:../../../../public/kiteconnect.png";
import varsity from "url:../../../../public/varsity.png";

import appstoreBadge from "url:../../../../public/appstoreBadge.svg"
import googlePlayBadge from "url:../../../../public/googlePlayBadge.svg"



const MainSection = () => {

    return (
        <div className="mt-5 border-top"  style={{paddingTop: "5rem"}}>

            <LeftSection 
                img = {kite}
                heading = "Kite"
                para = "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                linksLst = {["Try Demo", "Learn More"]}
                downImg1 = {googlePlayBadge}
                downImg2 = {appstoreBadge}
            />

            <RightSection 
                img = {console}
                heading = "Console"
                para = "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                linksLst = {["Learn More"]}
            />

            <LeftSection
                img = {coin}
                heading = "Coin"
                para = "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                linksLst = {["Try Demo"]}
                downImg1 = {googlePlayBadge}
                downImg2 = {appstoreBadge}
            />

            <RightSection 
                img = {kiteconnect}
                heading = "Kite Connect API"
                para = "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                linksLst = {["Kite Connect"]}
            />

            <LeftSection
                img = {varsity}
                heading = "Varsity"
                para = "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                linksLst = {[]}
                downImg1 = {googlePlayBadge}
                downImg2 = {appstoreBadge}
            />

        </div>
    )

}

export default MainSection;