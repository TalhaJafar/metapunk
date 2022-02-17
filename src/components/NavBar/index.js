import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="row">
      <img src={require("../../assests/logo.png")} alt="logo" />
      <div className="nav_social_container">
        <span className="nav_social_icon">
          <BsInstagram />
        </span>
        <span className="nav_social_icon">
          <BsTwitter color="#A542DD" />
        </span>
        <span className="nav_social_icon">
          <FaDiscord />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
