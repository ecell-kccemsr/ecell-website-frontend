/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import data from "../data/data";
import { useParams } from "react-router-dom";

const EventPost = (props) => {
  let { slug } = useParams();
  const [locationBlog, setLocationBlog] = useState(0);
  const [loadLocation, setLoadLocation] = useState(true);
  const [size, setSize] = useState([0, 0]);

  const ref = useRef();

  window.addEventListener("resize", () => {
    setSize([window.innerWidth, window.innerHeight]);
  });

  if (loadLocation === true) {
    data.map((item, pos) => {
      if (slug === item.url.trim()) {
        setLocationBlog(locationBlog + pos);
        setLoadLocation(false);
      }
      return null;
    });
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
  const finalPara = paraArr.map((item, index) => {
    return <p key={index}>{item}</p>;
  });

  const [imgWidth, setImgWidth] = useState(ref.current?.offsetWidth);
  const [imgHeight, setImgHeight] = useState(ref.current?.height);

  useEffect(() => {
    setImgWidth(ref.current.offsetWidth);
    setImgHeight(ref.current.height);
  }, [ref, size, imgWidth, imgHeight]);

  return (
    <div>
      <Navbar onMenuClick={props.onMenuClick} />
      <div
        className="container event-container"
        style={{
          position: "relative",
          top: "50px",
          marginBottom: "2rem",
          paddingBottom: "90px",
          paddingTop: "5rem",
        }}
      >
        <div
          className="img-container"
          style={{
            position: "relative",
            display: "flex",
            marginBottom: "2rem",
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
          }}
        >
          <h1
            className="event-title"
            style={{ marginLeft: 20, marginRight: 20 }}
          >
            <span style={{ color: "rgb(50,241,143)", fontSize: "1.5em" }}>
              {postData.title[0]}
            </span>
            {postData.title.slice(1, postData.title.length)}
          </h1>
          <div className="img-wrapper">
            <img
              style={{
                margin: "auto",
                position: "relative",
                borderRadius: 20,
                zIndex: 101,
                width: "100%",
              }}
              className="img-fluid"
              draggable="false"
              src={postData.image}
              alt={postData.title}
              ref={ref}
            />
            <div
              className="sic"
              style={{
                zIndex: 99,
                background: "rgb(50,241,143)",
                borderRadius: 20,
                height: imgHeight - 10,
                position: "absolute",
                bottom: 30,
                width: imgWidth,
                right: -10,
              }}
            ></div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <span>{postData.date} </span>
        </div>
        <div style={{ marginTop: 70 }}>
          <h1 className="secondary-title">
            <span style={{ color: "rgb(50,241,143)", fontSize: "1.5em" }}>
              {postData.title[0]}
            </span>
            {postData.title.slice(1, postData.title.length)}
          </h1>
          <div>{finalPara}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventPost;
