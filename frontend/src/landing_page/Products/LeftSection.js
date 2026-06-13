import React from "react";
function LeftSection({ imgeUrl, productname, Description, linkOne, linkTwo, googleplay, appstore, linkOneText }) {
    return (
        <div className="container pt-5">

            <div className="row gx-4">
                <div className="col-6 ">
                    <img src={imgeUrl} style={{ width: "80%", height: "90%" }}></img>
                </div>
                <div className="col-6 ">
                    <h1 className="fs-3">{productname}</h1>
                    <p>{Description}</p>
                    <div className="d-flex gap-3">
                        {linkOne && (
                            <a href={linkOne} className="text-primary fw-bold">{linkOneText}<i class="fa-solid fa-arrow-right"></i></a>
                        )}
                        {linkTwo && (
                            <a href={linkTwo} className="text-primary fw-bold ">Learn More<i class="fa-solid fa-arrow-right"></i></a>
                        )}
                    </div>
                    <div className="pt-4 d-flex gap-2">
                        <img src={googleplay}></img>
                        <img src={appstore}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;