import React from "react";
import "./Project.css";
import { Container, Row, Col } from "react-bootstrap";
import projectimg from "../assets/img/project.jpg";
import project2 from "../assets/img/project2.jpg";
import project3 from "../assets/img/project3.jpg";
import project4 from "../assets/img/project4.jpg";
import project5 from "../assets/img/project3.jpg";
import project6 from "../assets/img/project4.jpg";

const Project = () => {
  return (
    <>
      <div className="project component__space">
        <div className="heading">
          <h1 className="heading">My Latest Project</h1>
          <p className="heading p__color">
            Lorem, ipsum dolor sit amet elit.This is the first sentence about
            services.
          </p>
          <p className="heading p__color">
            Lorem, ipsum dolor sit amet consectetur adipisicing...
            <iste className=""></iste>
          </p>
        </div>

        {/* Insert container */}
        <Container className="container">
          <Row className="row">
            <Col md={3} className="col__3">
              <div className="project__box pointer relative">
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    <img
                      src={projectimg}
                      alt=""
                      srcset=""
                      className="project__img"
                    />
                  </div>
                  <div className="mask__effect"></div>
                </div>

                <center>
                  <div className="project__meta absolute">
                    <h5 className="project__text">Developement</h5>
                    <h4 className="project__text">
                      Getting tickerts to the big show
                    </h4>
                    <a href="a" className="project__btn">
                      view Details
                    </a>
                  </div>
                </center>
              </div>
            </Col>

            <Col md={3} className="col__3">
              <div className="project__box pointer relative">
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    <img
                      src={project2}
                      alt=""
                      srcset=""
                      className="project__img"
                    />
                  </div>
                  <div className="mask__effect"></div>
                </div>

                <center>
                  <div className="project__meta absolute">
                    <h5 className="project__text">Developement</h5>
                    <h4 className="project__text">
                      Getting tickerts to the big show
                    </h4>
                    <a href="a" className="project__btn">
                      view Details
                    </a>
                  </div>
                </center>
              </div>
            </Col>

            <Col md={3} className="col__3">
              <div className="project__box pointer relative">
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    <img
                      src={project3}
                      alt=""
                      srcset=""
                      className="project__img"
                    />
                  </div>
                  <div className="mask__effect"></div>
                </div>

                <center>
                  <div className="project__meta absolute">
                    <h5 className="project__text">Developement</h5>
                    <h4 className="project__text">
                      Getting tickerts to the big show
                    </h4>
                    <a href="a" className="project__btn">
                      view Details
                    </a>
                  </div>
                </center>
              </div>
            </Col>
          </Row>
          {/* Insert second row */}

          <Row>
            <Col md={3} className="col__3">
              <div className="project__box pointer relative">
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    <img
                      src={project4}
                      alt=""
                      srcset=""
                      className="project__img"
                    />
                  </div>
                  <div className="mask__effect"></div>
                </div>

                <center>
                  <div className="project__meta absolute">
                    <h5 className="project__text">Developement</h5>
                    <h4 className="project__text">
                      Getting tickerts to the big show
                    </h4>
                    <a href="a" className="project__btn">
                      view Details
                    </a>
                  </div>
                </center>
              </div>
            </Col>

            <Col md={3} className="col__3">
              <div className="project__box pointer relative">
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    <img
                      src={project5}
                      alt=""
                      srcset=""
                      className="project__img"
                    />
                  </div>
                  <div className="mask__effect"></div>
                </div>

                <center>
                  <div className="project__meta absolute">
                    <h5 className="project__text">Developement</h5>
                    <h4 className="project__text">
                      Getting tickerts to the big show
                    </h4>
                    <a href="a" className="project__btn">
                      view Details
                    </a>
                  </div>
                </center>
              </div>
            </Col>

            <Col md={3} className="col__3">
              <div className="project__box pointer relative">
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    <img
                      src={project6}
                      alt=""
                      srcset=""
                      className="project__img"
                    />
                  </div>
                  <div className="mask__effect"></div>
                </div>

                <center>
                  <div className="project__meta absolute">
                    <h5 className="project__text">Developement</h5>
                    <h4 className="project__text">
                      Getting tickerts to the big show
                    </h4>
                    <a href="a" className="project__btn">
                      view Details
                    </a>
                  </div>
                </center>
              </div>
            </Col>
            <div className="view__more__btn d__flex align__items__center justify__content__center  pxy__30">
              <button className="view__more pointer btn">View more</button>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Project;
