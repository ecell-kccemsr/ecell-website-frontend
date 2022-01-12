import React from "react";
import Instagram from "@material-ui/icons/Instagram";
import Facebook from "@material-ui/icons/Facebook";
import LinkedIn from "@material-ui/icons/LinkedIn";
import YouTube from "@material-ui/icons/YouTube";
import { Link } from "react-router-dom";

function section() {
  return (
    <div className="footer mt-5">
      <div className="container">
        <div
          className="row py-4"
          style={{ justifyContent: "center", textAlign: "center" }}
        >
          <div
            className="copyrights container py-4 px-0 col-md-6"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <p className="my-0">
              © 2021{" "}
              <Link to="/members">
                <span> Team Web Dev</span>
              </Link>
              , ECell KCCEMSR
            </p>
          </div>
          <div className=" px-2 px-md-0 col-md-6">
            <ul className="d-flex px-0 flex-column justify-content-evenly">
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
      </div>
    </div>
  );
}

export default section;
