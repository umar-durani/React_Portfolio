import React from "react";
import "./Services.css";
import { Container, Row, Col } from "react-bootstrap";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import DesktopAccessDisabledIcon from "@mui/icons-material/DesktopAccessDisabled";

const Services = () => {
  return (
    <>
      <div className="service component__space">
        <div className="heading">
          <h1 className="heading">My Awesome Service</h1>
          <p className="heading p__color">
            Lorem, ipsum dolor sit amet elit.This is the first sentence about
            services.
          </p>
          <p className="heading p__color">
            Lorem, ipsum dolor sit amet consectetur adipisicing...
            <iste className=""></iste>
          </p>
        </div>

        <Container className="container">
          <Row className="row">
            <Col md={3} className="col__3">
              <div className="service__box pointer">
                <div>
                  <AccountBalanceIcon className="icon" />
                </div>
                <div className="service__meta">
                  <h1 className="service__text">Business Strategy</h1>
                  <p className="p service__text p__color">
                    I throw myself down among the
                  </p>
                  <p className="p service__text p__color">
                    Tall grass by the stream as l lie
                  </p>
                  <p className="p service__text p__color">Close to the Earth</p>
                </div>
              </div>
            </Col>
            <Col md={3} className="col__3">
              <div className="service__box pointer">
                <div className="icon">
                  <DesktopAccessDisabledIcon />
                </div>
                <div className="service__meta">
                  <h1 className="service__text">Website Developement</h1>
                  <p className="p service__text p__color">
                    I throw myself down among the
                  </p>
                  <p className="p service__text p__color">
                    Tall grass by the stream as l lie
                  </p>
                  <p className="p service__text p__color">Close to the Earth</p>
                </div>
              </div>
            </Col>
            <Col md={3} className="col__3">
              <div className="service__box pointer">
                <div className="icon">
                  <PeopleAltIcon />
                </div>
                <div className="service__meta">
                  <h1 className="service__text">Marketing & Reporting</h1>
                  <p className="p service__text p__color">
                    I throw myself down among the
                  </p>
                  <p className="p service__text p__color">
                    Tall grass by the stream as l lie
                  </p>
                  <p className="p service__text p__color">Close to the Earth</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={3} className="col__3">
              <div className="service__box pointer">
                <div className="icon">
                  <RecordVoiceOverIcon />
                </div>
                <div className="service__meta">
                  <h1 className="service__text">Mobile App </h1>
                  <p className="p service__text p__color">
                    I throw myself down among the
                  </p>
                  <p className="p service__text p__color">
                    Tall grass by the stream as l lie
                  </p>
                  <p className="p service__text p__color">Close to the Earth</p>
                </div>
              </div>
            </Col>
            <Col md={3} className="col__3">
              <div className="service__box pointer">
                <div className="icon">
                  <MenuOpenIcon />
                </div>
                <div className="service__meta">
                  <h1 className="service__text">Web Developement</h1>
                  <p className="p service__text p__color">
                    I throw myself down among the
                  </p>
                  <p className="p service__text p__color">
                    Tall grass by the stream as l lie
                  </p>
                  <p className="p service__text p__color">Close to the Earth</p>
                </div>
              </div>
            </Col>
            <Col md={3} className="col__3">
              <div className="service__box pointer">
                <div className="icon">
                  <PermMediaIcon />
                </div>
                <div className="service__meta">
                  <h1 className="service__text">Web Fronted</h1>
                  <p className="p service__text p__color">
                    I throw myself down among the
                  </p>
                  <p className="p service__text p__color">
                    Tall grass by the stream as l lie
                  </p>
                  <p className="p service__text p__color">Close to the Earth</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
