import React, { useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import Blogs from "./Blogs";
import EventPost from "./EventPost";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Aos from "aos";
import "aos/dist/aos.css";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <Navbar loc={props.loc} onMenuClick={props.onMenuClick} hell={true} />
      <Header />
      <Blogs loc={props.loc} onBlogCardClick={props.onBlogCardClick} />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [eventCardPos, setEventCardPos] = useState(0);
  const onBlogCardClick = (location) => {
    if(eventCardPos == 0){
      setEventCardPos(eventCardPos + location);
    }
  };

  const onMenuClick = () => {
    setEventCardPos(0);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {" "}
          <Home
            loc={eventCardPos}
            onMenuClick={onMenuClick}
            onBlogCardClick={onBlogCardClick}
          />
        </Route>
        <Route path="/event/post">
          <EventPost loc={eventCardPos} onMenuClick={onMenuClick} />
        </Route>
      </Switch>
    </Router>
  );
}
