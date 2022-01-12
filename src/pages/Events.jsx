import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./events.css";
import data from "../data/data";
import { Link } from "react-router-dom";

const Events = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Events - KC Entrepreneurship Cell";
  }, []);
  const eventCardRender = data.map((item, pos) => {
    return (
      <div
        key={pos}
        className="col-lg-4 col-sm-6 cardContainer"
        style={{ maxWidth: "22rem" }}
      >
        <div className="item mx-2">
          <div className="blog-details">
            <div className="imgContainer">
              <img src={item.image} className=" p-0 img-fluid" alt="blog" />
            </div>
            <div className="px-3 py-4">
              <h5 className="my-3 card-title">{item.title}</h5>
              <span>{item.date}</span> <br />
              <Link to={"/events/" + item.url}>
                <button className="my-btn-2 my-2 px-3 py-1">Read more</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Navbar onMenuClick={props.onMenuClick} />
      <div className="EventsContainer">
        <h1 className="text-center my-5">Check our events</h1>
        <div className="row gridCol">{eventCardRender}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
