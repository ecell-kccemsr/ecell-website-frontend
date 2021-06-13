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
              <th className="py-4">Heads</th>
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
              <th className="py-4">Teams</th>
              <li>
                <a href="www.google.com">Software </a>
              </li>
              <li>
                <a href="www.google.com">Hardware</a>
              </li>
              <li>
                <a href="www.google.com">Web Development</a>
              </li>
              <li>
                <a href="www.google.com">PR & Marketing</a>
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
              <li>
                Sadguru Gardens, Mithbunder Rd, near Kopri, Valmiki Nagar, Thane
              </li>
              <li>
                <a
                  href="https://instagram.com/kcecell_?utm_medium=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram fontSize="large" />
                </a>
                <a
                  href="https://www.facebook.com/kcecell/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook fontSize="large" />
                </a>

                <a
                  href="https://www.linkedin.com/in/kc-ecell-708a291b0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn fontSize="large" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCUGQEMPcrmisFjq9KEfTYZQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTube fontSize="large" />
                </a>
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
