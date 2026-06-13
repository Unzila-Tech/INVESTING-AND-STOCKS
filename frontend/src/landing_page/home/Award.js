import React from 'react';
function Awards() {
    return ( 
        <div className='container mt-5 '>
           <div className='row '>
                <div className='col-6 p-5'>
                <h2>Trust with confidence</h2>
                <h4>Customer-first always</h4>
                <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                <h4>No spam or gimmicks</h4>
                <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                <h4>The Zerodha universe</h4>
                <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                <h4>Do better with money</h4>
                <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            <div className='col-6 p-5'>
                <img src="media/images/ecosystem.png" alt="ecosystem" style={{width:"100%",height:"90%"}} ></img>
                <div>
                    <a href="" className='text-primary fw-bold mx-5 text-decoration-none '>Explore Our Product <i class="fa-solid fa-arrow-right"></i></a>
                   <a href="" className='text-primary fw-bold text-decoration-none'> Try kite demo<i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <img src="media/images/press-logos.png" alt ="logo"style={{width:"50%",height:"50%"}}className='mx-auto'></img>
           </div>
        </div>
     );
}
export default Awards;