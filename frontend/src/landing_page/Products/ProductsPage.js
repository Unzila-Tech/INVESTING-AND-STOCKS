import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
function ProductsPage() {
    return (
        <>
            <Hero />
            <LeftSection
                imgeUrl="media/images/kite.png"
                productname="Kite"
                Description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                linkOneText="Try Demo"
                linkOne="#"
                linkTwo="#"
                googleplay="media/images/googleplayBadge.svg"
                appstore="media/images/appstorebadge.svg"
            />
            <RightSection
                productname="Console"
                Description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                linkOne="#"
                linkOneText="Learn More"
                imgeUrl="media/images/console.png"
            />
            <LeftSection
                imgeUrl="media/images/coin.png"
                productname="Coin"
                Description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                linkOneText="Coin"
                linkOne="#"
                googleplay="media/images/googleplayBadge.svg"
                appstore="media/images/appstorebadge.svg"
            />
            <RightSection
                productname="Kite Connect API"
                Description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                linkOne="#"
                linkOneText="Kite Connect "
                imgeUrl="media/images/kiteconnect.png"
            />
            <LeftSection
                imgeUrl="media/images/varsity.png"
                productname="Varsity mobile"
                Description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                googleplay="media/images/googleplayBadge.svg"
                appstore="media/images/appstorebadge.svg"
            />
            <Universe />
        </>

    );
}
export default ProductsPage;