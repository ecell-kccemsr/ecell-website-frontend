/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
function Navbar(props) {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();
  const currentLocation = location.pathname;

  const [isLocHome, setIsLocHome] = useState(false);
  const changeBg = () => {
    if (currentLocation === "/") {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }
  };
  const isLocHomeCheck = () => {
    if (currentLocation === "/") {
      setIsLocHome(true);
    } else {
      setIsLocHome(false);
    }
  };

  useEffect(() => {
    if (currentLocation !== "/") {
      setNavbar(true);
    }
  }, [location]);

  window.addEventListener("scroll", changeBg);
  const contactLink = () => {
    if (currentLocation === "/") {
      return (
        <a className="nav-link" href="#contact">
          Contact
        </a>
      );
    } else {
      return (
        <HashLink className="nav-link" to="/#contact">
          Contact
        </HashLink>
      );
    }
  };

  const [mobileDropDown, setMobileDropDown] = useState(true);

  useEffect(() => {
    isLocHomeCheck();
  });
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
          <Link className="navbar-brand" to="/">
            <img src="/images/kcecell.png" alt="logo" className="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setMobileDropDown(!mobileDropDown)}
          >
            {mobileDropDown ? (
              <i className="bi bi-list"></i>
            ) : (
              <i className="bi bi-x"></i>
            )}
          </button>
          <div
            className="collapse navbar-collapse orange"
            id="navbarTogglerDemo02"
          >
            <ul
              className={
                isLocHome
                  ? "navbar-nav w-70 d-flex justify-content-evenly mb-2 mb-lg-0 ml-auto"
                  : "navbar-nav w-70 d-flex justify-content-evenly mb-2 mb-lg-0 ml-auto not-home"
              }
            >
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/events">
                  Events
                </Link>
              </li>
              <li className="nav-item">{contactLink()}</li>

              <li className="nav-item">
                <Link className="nav-link" to="/team">
                  Team
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
