import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";

const RouterComponent = (): JSX.Element => {
  return (
    <Router basename="/movie-time-react">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/main" />}></Route>
        <Route path="/main" element={<Home />} />
        <Route path="*" element={<div>NOT FOUND</div>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default RouterComponent;
