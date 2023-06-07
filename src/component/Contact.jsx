import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";
import contactimg from "../assets/img/bg.jpg";

const Contact = () => {
  return (
    <>
      <Container fluid className="contact component__space">
        <Row className="row">
          <Col md={6} className="col__2">
            <div className="contact__box">
              <div className="contact__meta">
                <h1 className="hire__text">Hire Me.</h1>
                <p className="hire__text white">
                  I am available for freelauncer work. connect with my inbox:
                </p>
                <p className="hire__text white">
                  <strong>+8435 14 245</strong>or email
                  <strong>sindth9a@gmail.com</strong>
                </p>
              </div>
              <div className="input__box">
                <input
                  type="text"
                  className="contact name"
                  placeholder="Enter Your Name"
                />
                <input
                  type="text"
                  className="contact email"
                  placeholder="Enter Your Email"
                />
                <input
                  type="text"
                  className="contact subject"
                  placeholder="Write a subject"
                />
                <textarea
                  name="messege"
                  id="messege"
                  placeholder="Write your messege"
                ></textarea>
                <button className="btn contact pointer" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </Col>
          {/* Insert img */}
          <Col md={6}>
            <img src={contactimg} alt="" srcset="" className="contact__img" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
