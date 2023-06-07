import React from "react";
import "./Home.css";
import logo from "../assets/img/logo.png";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-bg">
          <div className="header d__flex align__items__center pxy__30">
            <div className="logo">
              <img src={logo} alt="" srcset="" />
            </div>
            <div className="navigation pxy__30">
              <ul className="navbar">
                <a href="#Home">
                  <li className="nav__items mx__15">Home</li>
                </a>
                <a href="#About">
                  <li className="nav__items mx__15">About</li>
                </a>
                <a href="#Services">
                  <li className="nav__items mx__15">Services</li>
                </a>
                <a href="#Portfolio">
                  <li className="nav__items mx__15">Portfolio</li>
                </a>
                <a href="#Blog">
                  <li className="nav__items mx__15">Blog</li>
                </a>
                <a href="#Contact">
                  <li className="nav__items mx__15">Contact</li>
                </a>
              </ul>
            </div>
          </div>
          {/* Insert home content */}
          <div className="container">
            <div className="home-content">
              <div className="home__meta">
                <h1 className="home-text pz__10"> WELCOME TO MY WORLD</h1>
                <h2 className="home-text pz__10"> Hi, I am Umar Khan</h2>
                <h3 className="home-text  sweet  pz__10"> Fronted Developer</h3>
                <h4 className="home-text  pz__10"> Based in Pakistan. </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
