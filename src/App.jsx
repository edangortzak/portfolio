import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Work from "./pages/Work";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
