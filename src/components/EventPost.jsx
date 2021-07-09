import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import data from "../data/data";

const EventPost = (props) => {
  const postData = data[props.loc];
  return (
    <div>
      <Navbar setBg={true} onMenuClick = {props.onMenuClick} />
      <div className="container event-container" style={{position:"relative", top:"90px", marginBottom:"2rem" , paddingBottom : "90px", paddingTop:"5rem"}}>
        <div className="img-container" style={{display:"flex",marginBottom:"2rem",flexDirection:"column"}}>
        <img style={{margin:"auto",marginBottom:"1rem"}} className="img-fluid" draggable="false" src={postData.image} alt="" />
        <span style={{textAlign:"center"}}>Date: {postData.date} </span>
        </div>
        <h1>{postData.title}</h1>
        <p>{postData.desc}</p>
      </div>
      < Footer />
    </div>
  );
};

export default EventPost;
