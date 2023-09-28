import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gallery from "./components/Gallery/gallery";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import Imgbanner from "./components/banner/banner";
import "./sass/style.css";


ReactDOM.render(
  <React.StrictMode>
    

    <Router>
      

      <Header />
      <Imgbanner/>
      <Gallery/>
      <Footer/>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
