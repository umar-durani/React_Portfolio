import React from "react";
import "./Footer.css";
import footerimg from "../assets/img/footer.png";

const Footer = () => {
  return (
    <div className="footer d__flex align__items__center justify__content__space__between pz__10">
      <img src={footerimg} alt="" className="footer__img" />
      <span className="copyright">Copyright 2023 programmer Umar Durani, All Right Reserved</span>
    </div>
  );
};

export default Footer;
