import React from "react";
import Instagram from "@material-ui/icons/Instagram";
import Facebook from "@material-ui/icons/Facebook";
import LinkedIn from "@material-ui/icons/LinkedIn";
import YouTube from "@material-ui/icons/YouTube";

function section() {
  return (
    <div className="footer mt-5">
      <div className="container">
        <div className="row my-2">
          <div className="px-2 px-md-0 col-6 col-sm-4 col-md-3">
            <ul className="d-flex px-0 flex-column justify-content-evenly">
              <th className="py-4">Company</th>
              <li>
                <a href="www.google.com">Features</a>
              </li>
              <li>
                <a href="www.google.com">About us</a>
              </li>
              <li>
                <a href="www.google.com">Get in Touch</a>
              </li>
              <li>
                <a href="www.google.com">Our Portfolio</a>
              </li>
            </ul>
          </div>
          <div className=" px-2 px-md-0 col-6 col-sm-4 col-md-3">
          <ul className="d-flex px-0 flex-column justify-content-evenly">
              <th className="py-4">Services</th>
              <li>
                <a href="www.google.com">WebDesign</a>
              </li>
              <li>
                <a href="www.google.com">Web Development</a>
              </li>
              <li>
                <a href="www.google.com">Online Marketing</a>
              </li>
              <li>
                <a href="www.google.com">Promotions</a>
              </li>
            </ul>
          </div>
          <div className=" px-2 px-md-0 col-6 col-sm-4 col-md-3">
          <ul className="d-flex px-0 flex-column justify-content-evenly">
              <th className="py-4">Digital Experience</th>
              <li>
                <a href="www.google.com">Features</a>
              </li>
              <li>
                <a href="www.google.com">About us</a>
              </li>
              <li>
                <a href="www.google.com">Get in Touch</a>
              </li>
              <li>
                <a href="www.google.com">Our Portfolio</a>
              </li>
            </ul>
          </div>
          <div className=" px-2 px-md-0 col-6 col-sm-12 col-md-3">
          <ul className="d-flex px-0 flex-column justify-content-evenly">
              <th className="py-0 py-md-4">Our Address</th>
              <li>Lavaca Street, Suite 24, Road Apt New York, USA</li>
              <li>
                <Instagram fontSize="large" />
                <Facebook fontSize="large" />
                <LinkedIn fontSize="large" />
                <YouTube fontSize="large" />
              </li>
            </ul>
          </div>
        </div>
        <div className="copyrights container py-4 px-0">
          <p className="my-0">
            © 2019 All Rights Reserved Design by <span>Sumedh Indulkar</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default section;
