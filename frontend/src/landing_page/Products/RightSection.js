import React from 'react';
function RightSection({ productname, Description, linkOne, linkOneText, imgeUrl }) {
    return (
        <div className="container pt-5">

            <div className="row pt-5">
                <div className="col-6 pt-5">
                    <h1 className='fs-3'>{productname}</h1>
                    <p>{Description}</p>
                    {linkOne && (
                        <a href={linkOne} className="text-primary fw-bold">{linkOneText}<i class="fa-solid fa-arrow-right"></i></a>
                    )}
                </div>
                <div className="col-6 ">
                    <img src={imgeUrl} style={{ width: "90%", height: "90%" }}></img>
                </div>
            </div>
        </div>
    );
}

export default RightSection;