import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home/home";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import Propos from "./views/A_Propos/propos";
import Error from "./views/Error/error";
import Logements from "./views/FicheLogement/logement";
import "./sass/style.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="*" element={<Error />} />
        <Route path="/logement/:id" element={<Logements />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
