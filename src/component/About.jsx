import React from "react";
import "./About.css";
import aboutimg from "../assets/img/about.jpg";
import { Col, Container, Row } from "react-bootstrap";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const About = () => {
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector(".bottom__to__top");
    upToTop.classList.toggle("active", window.screenY > 0);
  });
  return (
    <>
      <div className="about component__space">
        <Container className="container">
          <Row className="row">
            <Col md={6} className="col__2">
              <div>
                <img src={aboutimg} alt="" srcset="" className="about__img" />
              </div>
            </Col>
            <Col md={6} className="col__2">
              <h1 className="about__heading">About me</h1>
              <div className="about__meta">
                <p className="about__text p__color">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur ex quod eveniet earum rerum aliquam. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Eligendi nisi
                  autem odio. Facere cum adipisci magni ullam ..
                </p>
                <p className="about__text p__color">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur ex quod eveniet earum rerum aliquam. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Eligendi nisi
                  autem odio. Facere cum adipisci magni ullam...
                </p>
                <p className="about__text p__color">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur ex quod eveniet earum rerum aliquam. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Eligendi nisi
                  autem odio. Facere cum adipisci magni ullam....
                </p>
                <div className="about__button d__flex align__items__center">
                  <a href="a">
                    <button className="about  btn pointer">Download CV</button>
                  </a>
                  <a href="a">
                    <button className="about btn pointer">Hire Me</button>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        {/* Insert up to top btn */}
        <div className="up__to__top__btn">
          <a href="a" className="bottom__to__top">
            <KeyboardArrowUpIcon />
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
