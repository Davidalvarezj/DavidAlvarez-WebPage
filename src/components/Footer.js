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
            <div className="row">
              <div className="col col-md-5 offset-md-1 my-auto">
                <h3 className="section-tittle">
                  <span className="section-tittle-span">C</span>ONTACT ME
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col col-md-5 offset-md-1 my-auto">
                <h3 className="footer-tag">Phone</h3>
                <p>+57 314 890 01 35</p>
              </div>
            </div>
            <div className="row">
              <div className="col col-md-5 offset-md-1 my-auto">
                <h3 className="footer-tag">Email</h3>
                <p>davidalvarezj@gmail.com</p>
              </div>
            </div>
            <div className="row">
              <div className="col col-md-5 offset-md-1 my-auto">
                <h3 className="footer-tag">Location</h3>
                <p>Open for new locations</p>
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
              www.davidalvarezj.com
            </h2>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
