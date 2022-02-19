import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import "./index.css";
const Footer = () => {
  return (
    <>
      <div className="mt-5">
        <div className="footer_box d-flex flex-column justify-content-center align-items-center">
          <div className="row mb-5 mt-5">
            <div className="heading_2 purple_font text-center">
              Join the community
            </div>
          </div>
          <div className="row w-100" style={{ position: "relative" }}>
            <span className="footer_star_1"></span>
          </div>
          <div className="row w-50 d-flex align-items-center justify-content-center mb-5 mt-5">
            {/* <div className="d-flex align-items-center justify-content-between"> */}
            <div className="footer_links_box d-flex align-items-center justify-content-center m-2">
              <AiFillInstagram size={50} />
            </div>
            <div className="footer_links_box d-flex align-items-center justify-content-center m-2">
              <AiOutlineTwitter size={50} />
            </div>
            <div className="footer_links_box d-flex align-items-center justify-content-center m-2">
              <FaDiscord size={50} />
            </div>
          </div>
          <div className="row w-100" style={{ position: "relative" }}>
            <span className="footer_star_2"></span>
          </div>
          {/* </div> */}
        </div>
      </div>
      <div className="text-center mt-5">@ copyrights. All rights reserved</div>
    </>
  );
};

export default Footer;
