import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Landing from "../pages/landing/Landing";
import { createBrowserHistory } from "history";

const RouterComponent = (): JSX.Element => {
  const history = createBrowserHistory();

  return (
    <Router basename="/movie-time-react">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/main" />}></Route>
        <Route path="/main" element={<Landing />} />
        <Route path="*" element={<div>NOT FOUND</div>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default RouterComponent;
