import React from "react";
import "./Blog.css";
import { Container, Row, Col } from "react-bootstrap";
import Blog1 from "../assets/img/blog-01.jpg";
import Blog2 from "../assets/img/blog-02.jpg";
import Blog3 from "../assets/img/blog-03.jpg";

const Blog = () => {
  return (
    <>
      <div className="Blog component__space">
        <div className="heading">
          <h1 className="heading">Latest New's</h1>
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
              <div className="project__box cursor">
                <div className="project__box pointer relative">
                  <div className="project__box__img pointer relative">
                    <div className="project__img__box">
                      <img
                        src={Blog1}
                        alt=""
                        srcset=""
                        className="project__img"
                      />
                    </div>
                    <div className="mask__effect"></div>
                  </div>

                  {/* Insert absolute sec */}
                  <div className="Blog__meta absolute">
                    <h5 className="project__text">Developement</h5>
                    <h4 className="project__text para">
                      Getting tickerts to the big show
                    </h4>
                    <a href="a" className="blog project__btn btn">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={3} className="col__3">
              <div className="project__box cursor">
                <div className="project__box pointer relative">
                  <div className="project__box__img pointer relative">
                    <div className="project__img__box">
                      <img
                        src={Blog2}
                        alt=""
                        srcset=""
                        className="project__img"
                      />
                    </div>
                    <div className="mask__effect"></div>
                  </div>

                  {/* Insert absolute sec */}
                  <div className="Blog__meta absolute">
                    <h5 className="project__text">Developement</h5>
                    <h4 className="project__text para">
                      Getting tickerts to the big show
                    </h4>
                    <a href="a" className="blog project__btn btn">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={3} className="col__3">
              <div className="project__box cursor">
                <div className="project__box pointer relative">
                  <div className="project__box__img pointer relative">
                    <div className="project__img__box">
                      <img
                        src={Blog3}
                        alt=""
                        srcset=""
                        className="project__img"
                      />
                    </div>
                    <div className="mask__effect"></div>
                  </div>

                  {/* Insert absolute sec */}
                  <div className="Blog__meta absolute">
                    <h5 className="project__text">Developement</h5>
                    <h4 className="project__text para">
                      Getting tickerts to the big show
                    </h4>
                    <a href="a" className="blog project__btn btn">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Blog;
