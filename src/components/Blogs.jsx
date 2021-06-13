import React from "react";
import blog from "../images/blogs.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import event1 from "../images/event1.webp";
import event2 from "../images/event2.webp";
import event3 from "../images/event3.webp";
const options = {
  margin: 50,
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
function Blogs() {
  return (
    <div className="Blogs">
      <div className="container">
        <h1 data-aos="fade-down" className="text-center my-5">
          Check out our Blog Posts
        </h1>
        <OwlCarousel className="slider-items owl-carousel" {...options}>
          <div data-aos="flip-left" className="item">
            <div className="blog-details">
              <img src={event1} className=" p-0 img-fluid" alt="blog" />
              <div className="px-5 py-4">
                <span>JUN 24, 2020</span>
                <h5 className="my-3">
                  An Uncomplicated Guide to Improve Rate By 3X.
                </h5>
                <p>:- Jackson pot</p>
              </div>
            </div>
          </div>
          <div data-aos="flip-left" className="item">
            <div className="blog-details">
              <img src={event2} className=" p-0 img-fluid" alt="blog" />
              <div className="px-5 py-4">
                <span>JUN 24, 2020</span>
                <h5 className="my-3">
                  An Uncomplicated Guide to Improve Rate By 3X.
                </h5>
                <p>:- Jackson pot</p>
              </div>
            </div>
          </div>
          <div data-aos="flip-left" className="item">
            <div className="blog-details">
              <img src={event3} className=" p-0 img-fluid" alt="blog" />
              <div className="px-5 py-4">
                <span>JUN 24, 2020</span>
                <h5 className="my-3">
                  An Uncomplicated Guide to Improve Rate By 3X.
                </h5>
                <p>:- Jackson pot</p>
              </div>
            </div>
          </div>

          <div data-aos="flip-left" className="item">
            <div className="blog-details">
              <img src={event1} className=" p-0 img-fluid" alt="blog" />
              <div className="px-5 py-4">
                <span>JUN 24, 2020</span>
                <h5 className="my-3">
                  An Uncomplicated Guide to Improve Rate By 3X.
                </h5>
                <p>:- Jackson pot</p>
              </div>
            </div>
          </div>
          <div data-aos="flip-left" className="item">
            <div className="blog-details">
              <img src={event2} className=" p-0 img-fluid" alt="blog" />
              <div className="px-5 py-4">
                <span>JUN 24, 2020</span>
                <h5 className="my-3">
                  An Uncomplicated Guide to Improve Rate By 3X.
                </h5>
                <p>:- Jackson pot</p>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}

export default Blogs;
