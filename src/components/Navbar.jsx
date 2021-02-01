import React from "react";
function Navbar() {
  return (
    <div className="fixed-top">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid container">
          <a class="navbar-brand" href="www.google.com">
            <img
              src="https://images-ext-2.discordapp.net/external/DV2pbOen9jWqdawSoCZaNPvEKQ8UpyCTl72Kd3yhSBM/%3Fs%3D200%26v%3D4/https/avatars0.githubusercontent.com/u/75408014"
              alt="logo"
              className="logo"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarTogglerDemo02">
            <ul class="navbar-nav w-70 d-flex justify-content-evenly mb-2 mb-lg-0 ml-auto">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="www.google.com"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="www.google.com">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="www.google.com">
                  Event
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="www.google.com">
                  Project
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="www.google.com">
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
