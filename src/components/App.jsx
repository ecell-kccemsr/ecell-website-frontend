import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./styles.css";
export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Contact/>
      <Footer/>
    </div>
  );
}
