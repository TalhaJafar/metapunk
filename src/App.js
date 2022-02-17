import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
