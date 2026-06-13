import React from "react";
function Team() {
    return (
        <div className="container">
            <div className="row pt-5">
                <h1 className="text-center pt-5">people</h1>
                <div className="col text-center pt-5">
                    <img src="media/images/nithinkamath.jpg" alt="profile"
                        className="rounded-circle " style={{ width: "200px", height: "200px" }} ></img>
                    <h2>Nithin Kamath</h2>
                    <h3>Founder, CEO</h3>
                </div>
                <div className="col  lh-lg fs-5 pt-5 pe-5">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.

                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).

                        Playing basketball is his zen.

                        Connect on Homepage / TradingQnA / Twitter</p>
                </div>
            </div>
        </div>
    );
}
export default Team;