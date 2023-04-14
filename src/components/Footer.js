import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <>
      <div className={"jumbotron-fluid footer-main pt-5 pb-1"} id="contact">
        <Container className="footer-container">
          <div className="row row-footer">
            <div className="row">
              <div
                className="col col-md-5 offset-md-1 my-auto mb-5"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h3 className="section-tittle">
                  <span className="section-tittle-span">C</span>ONTACT ME
                </h3>
              </div>
            </div>
            <div className="row" data-aos="fade-right" data-aos-duration="1200">
              <div className="col col-md-5 offset-md-1 my-auto mb-4">
                <h3 className="footer-tag">
                  <MdOutlinePhoneIphone className="mb-2" />
                  <span className="ms-2">Phone</span>
                </h3>
                <p className="footer-tag-h5">(+57) 314 890 01 35</p>
              </div>
            </div>
            <div className="row" data-aos="fade-right" data-aos-duration="1200">
              <div className="col col-md-5 offset-md-1 my-auto mb-4">
                <h3 className="footer-tag">
                  <HiOutlineMail className="mb-2" />
                  <span className="ms-2">Email</span>
                </h3>
                <a
                  href="mailto:davidalvarezj@gmail.com"
                  className="footer-tag-h5"
                >
                  davidalvarezj@gmail.com
                </a>
              </div>
            </div>
            <div className="row" data-aos="fade-right" data-aos-duration="1200">
              <div className="col col-md-5 offset-md-1 my-auto mb-4">
                <h3 className="footer-tag">
                  <HiOutlineLocationMarker className="mb-2" />
                  <span className="ms-2">Location</span>
                </h3>
                <p className="footer-tag-h5">Open for new locations</p>
              </div>
            </div>
          </div>
          <div
            className="row row-footer-end"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <h2
              className="text-center text-footer-link"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              WWW.DAVIDALVAREZJ.COM
            </h2>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
