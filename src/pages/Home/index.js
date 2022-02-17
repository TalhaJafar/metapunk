import "./index.css";
import Header from "../../components/Header";
import React from "react";
import About from "../../components/About";
import Collection from "../../components/Collection";
import Roadmap from "../../components/Roadmap";
import Giveaway from "../../components/Giveaway";
import Faqs from "../../components/Faqs";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <About />
      <Collection />
      <Roadmap />
      <Giveaway />
      <Faqs />
    </React.Fragment>
  );
};

export default Home;
