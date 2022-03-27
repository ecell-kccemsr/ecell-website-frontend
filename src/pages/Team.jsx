import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../pages/members.css";
import {
  heads,
  wedDevelopers,
  marketing,
  hardware,
  mentors,
  dataScience,
  documentation,
} from "../data/members";

export const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Team - KC Entrepreneurship Cell";
  }, []);

  const _dataRenderer = (data) => {
    const finData = data.map((item, index) => {
      return (
        <div className="col-lg-4 col-md-6" key={index}>
          <div className="memberCard">
            <div className="img-container">
              <img src={item.img} alt={item.name} draggable={false} />
            </div>
            <div className="section-details no-btm">
              <h4>{item.name}</h4>
              <p>{item.position}</p>
              {item.position !== "Member" && item.team !== "mentors" && (
                <p>{item.team}</p>
              )}
            </div>
            <div className="social-icons">
              {item.github ? (
                <a target="_blank" href={item.github} rel="noreferrer">
                  <i className="bi bi-github"></i>
                </a>
              ) : null}
              <a target="_blank" href={item.linkedIn} rel="noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      );
    });

    return finData;
  };

  return (
    <div>
      <Navbar />
      <div className="membersSection container main">
        <h1>Our Core Team</h1>
        <h4 className="my-4">Mentors</h4>
        <div className="row gridCenter">{_dataRenderer(mentors)}</div>
      </div>
      <div className="membersSection container">
        <h4 className="my-4">Heads & Coordinators</h4>
        <div className="row gridCenter">{_dataRenderer(heads)}</div>
      </div>
      <div className="membersSection container">
        <h4 className="my-4">Web Development Team</h4>
        <div className="row gridCenter">{_dataRenderer(wedDevelopers)}</div>
      </div>
      <div className="membersSection container">
        <h4 className="my-4">Data Science Team</h4>
        <div className="row gridCenter">{_dataRenderer(dataScience)}</div>
      </div>
      <div className="membersSection container">
        <h4 className="my-4">Design & Marketing Team</h4>
        <div className="row gridCenter">{_dataRenderer(marketing)}</div>
      </div>
      <div className="membersSection container">
        <h4 className="my-4">IOT Team</h4>
        <div className="row gridCenter">{_dataRenderer(hardware)}</div>
      </div>
      <div className="membersSection container">
        <h4 className="my-4">Documentation Team</h4>
        <div className="row gridCenter">{_dataRenderer(documentation)}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
