import React from "react";
import "./Projects.css";
import { AiFillGithub } from "react-icons/ai";
import { SiAirplayvideo } from "react-icons/si";

const Projects = () => {
  return (
    <>
      <div className="projects-section">
        <div className="container projects-container">
          <div className="row" data-aos="zoom-in-up" data-aos-duration="1200">
            <div className="col text-center">
              <h3 className="text-white">Projects</h3>
              <p className="text-white projects-paragraph mb-5">
                A full-stack developer is a software developer who has knowledge
              </p>
            </div>
          </div>
          <div className="col-md-10 offset-md-1">
            <div className="row">
              <div className="col-6 col-md-4 p-2 ">
                <div
                  class="card text-bg-dark border-0"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="projects-overlay"></div>
                  <img
                    src={require("../img/codingimg.jpg")}
                    class="card-img-projects"
                    alt="..."
                  />
                  <div class="card-img-overlay m-2">
                    <h5 class="card-title">Vehicles Marketplace</h5>
                    <p class="card-text">
                      Online marketplace for second-hand used cars, bikes,
                      trucks and boats.
                    </p>
                    <p>www.vendevehiculos.com</p>
                    <div className="projects-gotodiv">
                      <h2>
                        <AiFillGithub />
                      </h2>
                      <h3 className="ms-4 pt-1">
                        <SiAirplayvideo />
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 p-2">
                <div
                  class="card text-bg-dark border-0"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="projects-overlay"></div>
                  <img
                    src={require("../img/codingimg.jpg")}
                    class="card-img-projects"
                    alt="..."
                  />
                  <div class="card-img-overlay m-2">
                    <h5 class="card-title">Colombia Travel</h5>
                    <p class="card-text">
                      Landing page that provides information about the main
                      tours for Colombia visitors.
                    </p>
                    <div className="projects-gotodiv">
                      <h2>
                        <AiFillGithub />
                      </h2>
                      <h3 className="ms-4 pt-1">
                        <SiAirplayvideo />
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 p-2">
                <div
                  class="card text-bg-dark border-0"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="projects-overlay"></div>
                  <img
                    src={require("../img/codingimg.jpg")}
                    class="card-img-projects"
                    alt="..."
                  />
                  <div class="card-img-overlay m-2">
                    <h5 class="card-title">NFT Movile App</h5>
                    <p class="card-text">
                      Movile database app to dispaly multiple NFT's projects
                      information.
                    </p>
                    <div className="projects-gotodiv">
                      <h2>
                        <AiFillGithub />
                      </h2>
                      <h3 className="ms-4 pt-1">
                        <SiAirplayvideo />
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 p-2">
                <div
                  class="card text-bg-dark border-0"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="projects-overlay"></div>
                  <img
                    src={require("../img/codingimg.jpg")}
                    class="card-img-projects"
                    alt="..."
                  />
                  <div class="card-img-overlay m-2">
                    <h5 class="card-title">Movies Database</h5>
                    <p class="card-text">
                      Web app that provides movies information for trailers,
                      reviews, genres, and more.
                    </p>
                    <div className="projects-gotodiv">
                      <h2>
                        <AiFillGithub />
                      </h2>
                      <h3 className="ms-4 pt-1">
                        <SiAirplayvideo />
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 p-2">
                <div
                  class="card text-bg-dark border-0"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="projects-overlay"></div>
                  <img
                    src={require("../img/codingimg.jpg")}
                    class="card-img-projects"
                    alt="..."
                  />
                  <div class="card-img-overlay m-2">
                    <h5 class="card-title">Maze Runner Game</h5>
                    <p class="card-text">Web Puzzle game using canvas tag</p>
                    <div className="projects-gotodiv">
                      <h2>
                        <AiFillGithub />
                      </h2>
                      <h3 className="ms-4 pt-1">
                        <SiAirplayvideo />
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 p-2">
                <div
                  class="card text-bg-dark border-0"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="projects-overlay"></div>
                  <img
                    src={require("../img/codingimg.jpg")}
                    class="card-img-projects"
                    alt="..."
                  />
                  <div class="card-img-overlay m-2">
                    <h5 class="card-title">Crypto Landing Page</h5>
                    <p class="card-text">
                      Landing page for a Crypto project focus on movile first
                      design.
                    </p>
                    <div className="projects-gotodiv">
                      <h2>
                        <AiFillGithub />
                      </h2>
                      <h3 className="ms-4 pt-1">
                        <SiAirplayvideo />
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 p-2">
                <div
                  class="card text-bg-dark border-0"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="projects-overlay"></div>
                  <img
                    src={require("../img/codingimg.jpg")}
                    class="card-img-projects"
                    alt="..."
                  />
                  <div class="card-img-overlay m-2">
                    <h5 class="card-title">To-Do List App</h5>
                    <p class="card-text">To-Do List App using React</p>
                    <div className="projects-gotodiv">
                      <h2>
                        <AiFillGithub />
                      </h2>
                      <h3 className="ms-4 pt-1">
                        <SiAirplayvideo />
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 p-2">
                <div
                  class="card text-bg-dark border-0"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="projects-overlay"></div>
                  <img
                    src={require("../img/codingimg.jpg")}
                    class="card-img-projects"
                    alt="..."
                  />
                  <div class="card-img-overlay m-2">
                    <h5 class="card-title">Freelance Project</h5>
                    <p class="card-text">
                      Landing page for plastic distributor sales representative.
                    </p>
                    <div className="projects-gotodiv">
                      <h2>
                        <AiFillGithub />
                      </h2>
                      <h3 className="ms-4 pt-1">
                        <SiAirplayvideo />
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 p-2">
                <div
                  class="card text-bg-dark border-0"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="projects-overlay"></div>
                  <img
                    src={require("../img/codingimg.jpg")}
                    class="card-img-projects"
                    alt="..."
                  />
                  <div class="card-img-overlay m-2">
                    <h5 class="card-title">Youtube API</h5>
                    <p class="card-text">Best Motivational Speech Videos</p>
                    <div className="projects-gotodiv">
                      <h2>
                        <AiFillGithub />
                      </h2>
                      <h3 className="ms-4 pt-1">
                        <SiAirplayvideo />
                      </h3>
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

export default Projects;
