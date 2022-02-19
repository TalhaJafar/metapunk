import React from "react";
import "./index.css";

const Header = () => {
  return (
    <div className="hero-main row d-flex align-item-center section_margin ">
      <span className="header_star_1"></span>
      <span className="header_star_2"></span>
      <span className="header_star_3"></span>
      <span className="header_star_4"></span>
      <div className="col-xl-7 col-lg-12 d-flex align-items-center ">
        <div className="d-flex flex-column ">
          <h1 className="heading_1">Welcome to Metapunks</h1>
          <p className="text_1 mt-3 mb-5">
            Blandit massa, sollicitudin duis arcu sagittis augue gravida.
          </p>
          <button className="button_primary"> Join Discord</button>
        </div>
      </div>

      <div className="col-xl-5 col-lg-12">
        <img
          className="img-fluid header_img "
          src={require("../../assests/header.png")}
          alt="header"
        />
      </div>
    </div>
  );
};

export default Header;
