import React from "react";
import "./Services.css";
import { CgWebsite } from "react-icons/cg";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaServer } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { IoHammerSharp } from "react-icons/ri";
import { GiAutoRepair } from "react-icons/gi";

const Services = () => {
  return (
    <>
      <div className="services-section" id="services">
        <div className="container services-container d-flex">
          <div className="row my-auto">
            <div className="row ">
              <div className="col col-md-5 offset-md-1 my-auto ">
                <div
                  className="services-div-animated"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h3 className="mb-4 section-tittle">
                    <span className="section-tittle-span">S</span>ERVICES
                  </h3>
                  <p className="text-white services-paragraph ">
                    <span className="aboutme-paragraph-span">C</span>omplete
                    development services for web and mobile applications,
                    covering both front-end and back-end integration to deliver
                    fully functional solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-6 col-md-5 p-2 offset-md-1">
                  <div
                    class="card text-bg-dark border-0"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  >
                    <div className="services-overlay4"></div>
                    <img
                      src={require("../img/codingimg.jpg")}
                      class="card-img card-servises"
                      alt="..."
                    />
                    <div class="card-img-overlay m-2">
                      <h1 className="services-icon">
                        <GiAutoRepair />
                      </h1>
                      <h5 class="card-title">Bugs fixer</h5>
                      <p class="card-text servises-p-card">
                        Implementing updates and modifications on existing
                        websites to enhance their performance and functionality.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-5 p-2">
                  <div
                    class="card text-bg-dark border-0"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  >
                    <div className="services-overlay2"></div>
                    <img
                      src={require("../img/codingimg.jpg")}
                      class="card-img card-servises"
                      alt="..."
                    />
                    <div class="card-img-overlay m-2">
                      <h1 className="services-icon">
                        <CgWebsite />
                      </h1>
                      <h5 class="card-title">Web development</h5>
                      <p class="card-text servises-p-card">
                        Build and maintain websites using up-to-date libraries
                        and frameworks, employing a strategic approach to
                        achieve project goals.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-5 p-2 offset-md-1">
                  <div
                    class="card text-bg-dark border-0"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  >
                    <div className="services-overlay1"></div>
                    <img
                      src={require("../img/codingimg.jpg")}
                      class="card-img card-servises"
                      alt="..."
                    />
                    <div class="card-img-overlay m-2">
                      <h1 className="services-icon">
                        <MdOutlinePhoneIphone />
                      </h1>
                      <h5 class="card-title">Mobile App development</h5>
                      <p class="card-text servises-p-card">
                        Design and develop mobile applications using
                        React-Native for Android and IOS Operation Systems.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-5 p-2">
                  <div
                    class="card text-bg-dark border-0"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  >
                    <div className="services-overlay3"></div>
                    <img
                      src={require("../img/codingimg.jpg")}
                      class="card-img card-servises"
                      alt="..."
                    />
                    <div class="card-img-overlay m-2">
                      <h1 className="services-icon">
                        <FaServer />
                      </h1>
                      <h5 class="card-title">Server side development</h5>
                      <p class="card-text servises-p-card">
                        Manage server-side implementation for user
                        authentication and data exchange with users.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
