import React from "react";
import { useState, useEffect } from "react";
import logo2 from "../img/logo1.bmp";
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
              <h1 className="text-white">
                <MdLandscape />
              </h1>
              {/* <img src={logo2} alt="Logo2" width="80" height="70" /> */}
            </Navbar.Brand>
            <Nav className="h4 nav-content">
              <Nav.Link href="#aboutme">ABOUT ME</Nav.Link>
              <Nav.Link href="#services">SERVICES</Nav.Link>
              <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
              <Nav.Link href="#contact">CONTACT</Nav.Link>
            </Nav>
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default Navbarmenu;
