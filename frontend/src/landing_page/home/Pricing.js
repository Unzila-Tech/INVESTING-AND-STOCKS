import React from 'react';
function Pricing() {
    return (  
       <div className='container pt-5 mt-5'> 
        <div className='row'>
        <div className='col-6'>
            <h3 className='mb-3'>Unbeatable pricing</h3>
            <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
    <a href="" className='text-primary fw-bold text-decoration-none'> Try kite demo<i class="fa-solid fa-arrow-right"></i></a>
            
        </div>
        <div className='col-6 d-flex'>
         <div className='d-flex align-items-center mb-4'>
            <img src="media/images/pricingEquity.svg" style={{width:"75%",height:"65%"}}></img>
            <span className='fs-6'>Free account opening</span>
         </div>
          <div className='d-flex align-items-center mb-4'> 
             <img src="media/images/pricingEquity.svg" style={{width:"60%",height:"65%"}}></img>
              <span className='fs-6'>Free equity delivery and direct mutual funds</span>
          </div>
          <div className='d-flex align-items-center mb-4'>
            <img src="media/images/intradayTrades.svg" style={{width:"70%",height:"65%"}}></img>
             <span className='fs-6'>intraday and F&O</span>
          </div>
        </div>
        </div>
       </div>
    );
}

export default Pricing;