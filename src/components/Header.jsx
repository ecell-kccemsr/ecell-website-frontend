import React from "react";
import studyGirl from "../images/study.png";
function Header() {
  return( 
  <div className="header">
    <div className="container d-flex align-items-center">
      <div className="row ">
        <div className="col-md-6 order-1 order-md-2 mt-5 mt-md-0 "><img className="img-fluid" src={studyGirl} alt="study-girl"/></div>
        <div className="col-md-6 order-2 order-md-1 d-flex align-items-center">
          <div className="w-70">
            <h1>
              Saas <span>Software Landing</span> is the Best Ever
            </h1>
            <p>
              Why I say old chap that is spiffing bits and bobs chimney pot
              cracking goal bamboozled.!
            </p>
            <button className="my-btn">Get Started</button>
            </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Header;
