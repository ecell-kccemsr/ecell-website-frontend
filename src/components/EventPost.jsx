import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import data from "../data/data";
import { useParams } from "react-router-dom";

const EventPost = (props) => {
  let { slug } = useParams();
  const [locationBlog, setLocationBlog] = useState(0);
  const [loadLocation, setLoadLocation] = useState(true);

  if (loadLocation == true) {
    data.map((item, pos) => {
      if (slug == item.url) {
        setLocationBlog(locationBlog + pos);
        setLoadLocation(false);
      }
    })
  }
  const postData = data[locationBlog];
  useEffect(() => {
    setLoadLocation(true);
    setLocationBlog(0);
    window.scrollTo(0, 0);
    document.title = postData.title;
  }, []);

  const paraData = postData.desc;
  const paraArr = paraData.split("\n");
  const finalPara = paraArr.map((item) => { return (<p>{item}</p>) })
  return (
    <div>
      <Navbar onMenuClick={props.onMenuClick} />
      <div className="container event-container" style={{ position: "relative", top: "90px", marginBottom: "2rem", paddingBottom: "90px", paddingTop: "5rem" }}>
        <div className="img-container" style={{ display: "flex", marginBottom: "2rem", flexDirection: "column" }}>
          <img style={{ margin: "auto", marginBottom: "1rem" }} className="img-fluid" draggable="false" src={postData.image} alt="" />
          <span style={{ textAlign: "center" }}>{postData.date} </span>
        </div>
        <h1>{postData.title}</h1>       
        <div>
          {finalPara}
        </div>
      </div>
      < Footer />
    </div>
  );
};

export default EventPost;
