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
      <div className="services-section">
        <div className="container services-container d-flex">
          <div className="row my-auto">
            <div className="row ">
              <div className="col col-md-5 offset-md-1 my-auto">
                <div data-aos="fade-up" data-aos-duration="1000">
                  <h3 className="text-white mb-4">Services</h3>
                  <p className="text-white services-paragraph mb-5">
                    A full-stack developer is a software developer who has
                    knowledge
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-6 col-md-5 offset-md-1 p-2">
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
                      <h5 class="card-title">App development</h5>
                      <p class="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-5 p-2">
                  <div
                    class="card text-bg-dark border-0"
                    data-aos="fade-left"
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
                      <p class="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-5 offset-md-1 p-2">
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
                      <h5 class="card-title">Server side rendering</h5>
                      <p class="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-5 p-2">
                  <div
                    class="card text-bg-dark border-0"
                    data-aos="fade-left"
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
                      <p class="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
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
