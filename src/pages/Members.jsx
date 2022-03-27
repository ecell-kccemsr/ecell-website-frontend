import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../pages/members.css";

export const Members = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Web Dev Team - KC Entrepreneurship Cell";
  }, []);
  return (
    <div>
      <Navbar />
      <div className="membersSection">
        <h1>Our Web Dev Team</h1>
        <p>Geeks who developed our website</p>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="memberCard">
              <div className="img-container">
                <img
                  src={"/images/sumedh-indulkar.jpg"}
                  alt="Sumedh Indulkar"
                />
              </div>
              <div className="section-details no-btm">
                <h4>Sumedh Indulkar</h4>
                <p>Full Stack Developer</p>
              </div>
              <div className="social-icons">
                <a
                  target="_blank"
                  href="https://github.com/sumedhindulkar"
                  rel="noreferrer"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/sumedh-indulkar/"
                  rel="noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="memberCard">
              <div className="img-container">
                <img src={"/images/rishabh-singh.png"} alt="Rishabh Singh" />
              </div>
              <div className="section-details no-btm">
                <h4>Rishabh Singh</h4>
                <p>Full Stack Developer</p>
              </div>
              <div className="social-icons">
                <a
                  target="_blank"
                  href="https://github.com/thisisrishabh22"
                  rel="noreferrer"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/rishabhh-singh/"
                  rel="noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Members;
