import React from "react";
import blog from "../images/blogs.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import uuid from "react-uuid";
import { Link } from "react-router-dom";

import data from "../data/data";
const options = {
  margin: 90,
  responsiveClass: true,
  nav: true,
  autoplay: false,
  navText: ["<-", "->"],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
};
const Blogs = () => {
  return (
    <div id="blogs" className="Blogs">
      <div className="container">
        <h1 data-aos="fade-right" className="text-center my-5">
          Check out our Blog Posts
        </h1>

        <OwlCarousel className="slider-items owl-carousel" {...options}>
          {data &&
            data.map((item,pos) => {
              return (
                <div key={uuid()} data-aos="flip-left" className="item">
                  <div className="blog-details">
                    <img
                      src={item.image}
                      className=" p-0 img-fluid"
                      alt="blog"
                    />
                    <div className="px-5 py-4">
                      <span>{item.date}</span>
                      <h5 className="my-3">{item.title}</h5>
                      <Link to={'/event/post/'+item.url} ><button className="my-btn-2 px-3 py-1">Read more</button></Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </OwlCarousel>
      </div>
    </div>
  );
}

export default Blogs;
