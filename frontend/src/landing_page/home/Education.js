import React from 'react';
function Education() {
    return (  
      <div className='container mt-5 pt-5'>
        <div className='row'>
            <div className='col-6'>
            <img src="media/images/Education.svg" alt="trophy-imag" style={{width:"70%",height:"95%"}} ></img>
            </div>
             <div className='col-6'>
              <h3>Free and open market education</h3>
              <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
               <a href="" className='text-primary fw-bold text-decoration-none'>Versity<i class="fa-solid fa-arrow-right"></i></a>
              <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
              <a href="" className='text-primary fw-bold text-decoration-none'>Trading Q&A<i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
      </div>
    );
}

export default Education;