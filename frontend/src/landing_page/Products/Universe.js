import React from 'react';
function Universe() {
    return (
        <div className="container">
            <div className='row text-center fs-5'>
                <p>Want to know more about our technology stack? Check out the <span className='text-primary '>Zerodha.tech</span> blog.</p>
            </div>
            <div className='row text-center pt-4'>
                <h2 className='fs-3'>The Zerodha Universe</h2>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row pt-5 '>
                <div className='col'>
                    <img src="media/images/zerodhaFundhouse.png" alt="img" style={{ width: "150px", height: "50px" }}></img>
                    <p className=' uni'>
                        Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.</p>
                </div>
                <div className='col'>
                    <img src="media/images/sensibullLogo.svg" alt="img" style={{ width: "130px", height: "50px" }}></img>
                    <p className=' uni'>
                        Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.</p>
                </div>
                <div className='col'>
                    <img src="media/images/tijori.svg" alt="img" style={{ width: "130px", height: "50px" }}></img>
                    <p className=' uni'>
                        Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.
                    </p>
                </div>
            </div>
            <div className='row pt-5'>
                <div className='col'>
                    <img src="media/images/streakLogo.png" alt="img" style={{ width: "130px", height: "50px" }}></img>
                    <p className=' uni'>
                        Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.</p>
                </div>
            <div className='col'>
                <img src="media/images/smallcaseLogo.png" alt="img" style={{ width: "130px", height: "50px" }}></img>
                <p className=' uni'>
                    Thematic investing platform
                    that helps you invest in diversified
                    baskets of stocks on ETFs.</p>
            </div>
            <div className='col'>
                <img src="media/images/dittoLogo.png" alt="img" style={{ width: "130px", height: "50px" }}></img>
                <p className=' uni'>
                    Personalized advice on life
                    and health insurance. No spam
                    and no mis-selling.
                    Sign up for free</p>
            </div>
        </div>
        <div className='d-flex justify-content-center pt-5'>
             <button className='btn btn-primary 'style={{width:"200px", margin:"0 auto"}}>Sign Up for free</button>
        </div>
    </div >
    );
}

export default Universe;