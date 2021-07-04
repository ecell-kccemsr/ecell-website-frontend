import React, { useState } from "react";
import logo from "../images/kcecell.png";
function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const changeBg = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBg);
  return (
    <div className="fixed-top">
      <nav
        className={
          navbar
            ? "navbar navBg navbar-expand-lg navbar-dark p-0"
            : "navbar navbar-expand-lg navbar-dark p-0"
        }
      >
        <div className="container-fluid container">
          <a className="navbar-brand" href="www.google.com">
            <img src={logo} alt="logo" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse orange"
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav w-70 d-flex justify-content-evenly mb-2 mb-lg-0 ml-auto">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="www.google.com"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="www.google.com">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="www.google.com">
                  Event
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="www.google.com">
                  Project
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
