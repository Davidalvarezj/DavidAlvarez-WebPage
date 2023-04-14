import React from "react";
import "./Aboutme.css";
import videoprofile from "../img/blurefectImg.mp4";

const Aboutme = () => {
  return (
    <>
      <div className="aboutme-section ">
        <div id="aboutme" className="container aboutme-container ">
          <div className="row aboutme-row ">
            <div className="col col-md-4 offset-md-1 d-md-inline-flex aboutme-img-div d-none">
              {/* <img
                src={require("../img/anime3.jpg")}
                alt="Profile Picture"
                className="profile-picture my-auto mx-auto"
              /> */}
              <div className="aboutme-overlay"></div>
              <video
                className="aboutme-video my-auto mx-auto"
                src={videoprofile}
                autoPlay
                loop
                muted
                data-aos="flip-left"
                data-aos-duration="1200"
              ></video>
            </div>

            <div
              className="col col-md-6 my-auto text-white ps-4 aboutmeanimated"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div>
                <h3 className="mb-4 section-tittle">
                  <span className="section-tittle-span">A</span>BOUT ME
                </h3>

                <p className="aboutme-paragraph">
                  <span className="aboutme-paragraph-span">I´</span>m a
                  freelance full-stack web developer, passionate about learning
                  new innovative technologies to enhance the web experience and
                  increase its usability.
                </p>
                <p className="aboutme-paragraph">
                  Experience building user-friendly applications covering the
                  entire development cycle from front-end interface design to
                  back-end database integration. I possess expertise in
                  developing E-commerce websites, mobile apps, Landing pages,
                  and Web applications.
                </p>
                <p className="aboutme-paragraph">
                  Proficient in JavaScript, React-Native, React, Node-js,
                  Python, MongoDB, CSS, HTML and Google Cloud Platform Services.
                </p>
                <p className="aboutme-paragraph">
                  My skill set includes website design, development, and
                  maintenance.
                </p>
              </div>
              <div className="mt-5 mb-3">
                <a
                  type="button"
                  className="btn btn-outline-warning border-1 button-about1"
                  href="#contact"
                >
                  Contact
                </a>
                <a
                  type="button"
                  className="btn btn-warning ms-4 border-1 button-about2"
                  href="#projects"
                >
                  Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
