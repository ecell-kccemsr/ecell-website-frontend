import React, { useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import Blogs from "./Blogs";
import EventPost from "./EventPost";
import Events from '../pages/Events';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Aos from "aos";
import "aos/dist/aos.css";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Members from '../pages/Members';
import { Team } from "../pages/Team";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Home - KC Entrepreneurship Cell";
  }, []);
  return (
    <div>
      <Navbar hell={true} />
      <Header />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    window.scrollTo(0,0);
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {" "}
          <Home/>
        </Route>
        <Route path="/events/:slug">
          <EventPost/>
        </Route>
        <Route path="/events" component={Events}/>
        <Route path="/members" component={Members}/>
        <Route path="/team" component={Team}/>
      </Switch>
    </Router>
  );
}
