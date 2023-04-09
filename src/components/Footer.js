import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookSquare } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FiInstagram } from "react-icons/fi";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className={"jumbotron-fluid footer-main pt-5 pb-5"}>
        <Container className="footer-container">
          <div className="row row-footer">
            <div className="col text-center ">
              <div
                className="footer-social"
                data-aos="zoom-out-down"
                data-aos-duration="1200"
              >
                <FaFacebookSquare className="m-2" />
                <TfiYoutube className="m-2" />
                <FiInstagram className="m-2" />
                <FaTwitterSquare className="m-2" />
              </div>
            </div>
          </div>
          <div
            className="row row-footer-end mt-2"
            data-aos="zoom-out-up"
            data-aos-duration="1200"
          >
            <h2
              className="text-center text-footer-link"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              davidalvarezj@gmail.com
            </h2>
            <h4 className="text-center">Web Developer</h4>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
