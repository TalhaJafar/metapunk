import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
