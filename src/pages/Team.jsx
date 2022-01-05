import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../pages/members.css";
import { heads } from "../data/members";

export const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Team - KC Entrepreneurship Cell";
  }, []);

  const headRenderer = () => {
    const headData = heads.map((item, index) => {
      return (
        <div className="col-lg-4 col-md-6" key={index}>
          <div className="memberCard">
            <div className="img-container">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="section-details no-btm">
              <h4>{item.name}</h4>
              <p>{item.position}</p>
              <p>{item.team}</p>
            </div>
            <div className="social-icons">
              <a target="_blank" href={item.github}>
                <i className="bi bi-github"></i>
              </a>
              <a target="_blank" href={item.linkedIn}>
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      );
    });

    return headData;
  };

  return (
    <div>
      <Navbar />
      <div className="membersSection">
        <h1>Our Core Team</h1>
        <h4 className="my-4">Heads & Coordinators</h4>
        <div className="row">{headRenderer()}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
