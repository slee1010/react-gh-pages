import React from "react";
import ReactDOM from "react-dom";
import i18n from './react-i18next-config'
import "./style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Login,
  Navigation,
  Footer,
  Home,
  About,
  Contact,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);