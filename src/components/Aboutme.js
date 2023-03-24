import React from "react";
import "./Aboutme.css";
import videoprofile from "../img/blurefectImg.mp4";

const Aboutme = () => {
  return (
    <>
      <div className="aboutme-section ">
        <div className="container aboutme-container ">
          <div className="row aboutme-row ">
            <div className="col col-md-5 d-inline-flex ">
              {/* <img
                src={require("../img/anime3.jpg")}
                alt="Profile Picture"
                className="profile-picture my-auto mx-auto"
              /> */}
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
              className="col col-md-6 my-auto text-white border-start border-4 ps-4 aboutmeanimated"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div>
                <h3 className="mb-4">About Me</h3>
                <p className="aboutme-paragraph">
                  A full-stack developer is a professional with knowledge and
                  experience in developing both the front-end and back-end
                  components of web applications. They are proficient in various
                  programming languages and frameworks such as HTML, CSS,
                  JavaScript, Node.js, Python, Ruby, and PHP, as well as with
                  databases like MySQL, PostgreSQL, and MongoDB.
                </p>
                <p className="aboutme-paragraph">
                  Additionally, they are well-versed in deployment technologies,
                  cloud platforms, version control, and project management,
                  making them capable of building and maintaining entire web
                  applications from the design and implementation of user
                  interfaces to the creation of complex server-side logic and
                  databases.
                </p>
              </div>
              <div className="mt-4 mb-3">
                <button
                  type="button"
                  className="btn btn-outline-light ms-3 border-1"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
