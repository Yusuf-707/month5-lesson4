import React from "react";
import logo1 from "../img/footer-logo.svg";
import logo2 from "../img/footer-logos.png";
const Footer = () => {
  return (
    <div className="container footer">
      <div className="footer-menu">
        <div className="logo">
          <img src={logo1} alt="" />
        </div>
        <div className="images">
          <img src={logo2} alt="" />
        </div>
      </div>
      <p>SIMPLE ® 2021</p>
    </div>
  );
};

export default Footer;
