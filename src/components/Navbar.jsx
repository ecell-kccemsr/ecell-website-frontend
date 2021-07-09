import React, { useState } from "react";
import logo from "../images/kcecell.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Navbar(props) {
  const [navbar, setNavbar] = useState(false);
  const changeBg = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const bgColor = props.setBg;

  if (bgColor == true) {
    var customStyles = {
      backgroundColor: "rgba(50, 241, 145, 0.4)",
    };
  } else {
    var customStyles = null;
  }

  window.addEventListener("scroll", changeBg);

  return (
    <div className="fixed-top" style={customStyles}>
      <nav
        className={
          navbar
            ? "navbar navBg navbar-expand-lg navbar-dark p-0"
            : "navbar navbar-expand-lg navbar-dark p-0"
        }
      >
        <div className="container-fluid container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" className="logo"  onClick={() => {console.log(props.onMenuClick())} } />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
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
                <Link
                  onClick={() => {console.log(props.onMenuClick())} }
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => {console.log(props.onMenuClick())} }
                  className="nav-link"
                  to={bgColor ? "/" : "#blogs"}
                >
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#contact"
                  onClick={() => {
                    props.onMenuClick();
                  }}
                >
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
