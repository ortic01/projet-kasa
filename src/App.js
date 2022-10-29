//react Framework
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";


import "./main.css";

//pages par React BrowserRouter
import Home from "./pages/Home"
import Apropos from "./pages/Apropos";
import FicheLogement from "./pages/FicheLogement";
import PageError from "./pages/PageError";

//components Header et Footer
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<Apropos />} />
            <Route path="products/:productId" element={<FicheLogement />} />
            <Route path="/kaza" element={<Navigate to="/" replace />} />
            <Route path="*" element={<PageError />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
