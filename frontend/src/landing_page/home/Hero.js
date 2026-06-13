import React from 'react';
function Hero() {
    return ( 
       <div className='container'>
          <div className="row mt-10 p-5" >
            <img src="media/images/homeHero.png" alt="hero-img"></img>
            <h1 className='text-center  pt-5 '>Invest in everything</h1>
            <p className='text-center'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className='btn btn-primary 'style={{width:"25%", margin:"0 auto"}}>Sign Up for free</button>
          </div>
       </div>
     );
}

export default Hero;