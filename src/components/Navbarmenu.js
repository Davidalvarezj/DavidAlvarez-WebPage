import React from "react";
import { useState, useEffect } from "react";
import logo2 from "../img/logo1.png";
import { MdLandscape } from "react-icons/md";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./Navbarmenu.css";

const Navbarmenu = () => {
  const [strnavtrigger, setstrnavtrigger] = useState("navar-content-start");
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    if (position > 130) {
      setstrnavtrigger("navar-content");
    } else setstrnavtrigger("navar-content-start");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <Navbar fixed="top" className={strnavtrigger}>
          <div className="container">
            <Navbar.Brand href="#home">
              <img src={logo2} alt="Logo2" width="30" height="30" />
            </Navbar.Brand>
            <Nav className="h4 nav-content">
              <Nav.Link className="nav-custom" href="#aboutme">
                ABOUT
              </Nav.Link>
              <Nav.Link className="nav-custom" href="#services">
                SERVICES
              </Nav.Link>
              <Nav.Link className="nav-custom" href="#projects">
                PORTFOLIO
              </Nav.Link>
              <Nav.Link className="nav-custom" href="#contact">
                CONTACT
              </Nav.Link>
            </Nav>
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default Navbarmenu;
