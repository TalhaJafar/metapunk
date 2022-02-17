import React from "react";

const Header = () => {
  return (
    <div className="row d-flex align-item-center section_margin">
      <div className="col-xl-7 col-lg-12 d-flex align-items-center">
        <div className="d-flex flex-column">
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
        />
      </div>
    </div>
  );
};

export default Header;
