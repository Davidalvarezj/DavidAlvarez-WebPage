import React from "react";
import "./Projects.css";
import { AiFillGithub } from "react-icons/ai";
import { SiAirplayvideo } from "react-icons/si";
import { useState } from "react";

const Projects = () => {
  const [hoverVideo1, setHoverVideo1] = useState(false);
  const [hoverVideo2, setHoverVideo2] = useState(false);
  const [hoverVideo3, setHoverVideo3] = useState(false);
  const [hoverVideo4, setHoverVideo4] = useState(false);
  const [hoverVideo5, setHoverVideo5] = useState(false);
  const [hoverVideo6, setHoverVideo6] = useState(false);
  const [hoverVideo7, setHoverVideo7] = useState(false);
  const [hoverVideo8, setHoverVideo8] = useState(false);
  const [hoverVideo9, setHoverVideo9] = useState(false);
  const [hoverscale1, sethoverscale1] = useState("video-project");
  const [hoverscale2, sethoverscale2] = useState("video-project");
  const [hoverscale3, sethoverscale3] = useState("video-project");
  const [hoverscale4, sethoverscale4] = useState("video-project");
  const [hoverscale5, sethoverscale5] = useState("video-project");
  const [hoverscale6, sethoverscale6] = useState("video-project");
  const [hoverscale7, sethoverscale7] = useState("video-project");
  const [hoverscale8, sethoverscale8] = useState("video-project");
  const [hoverscale9, sethoverscale9] = useState("video-project");

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
                  onMouseEnter={() => {
                    setHoverVideo1(true);
                    sethoverscale1("video-project video-scale");
                  }}
                  onMouseLeave={() => {
                    setHoverVideo1(false);
                    sethoverscale1("video-project");
                  }}
                >
                  {hoverVideo1 && <div className="projects-overlay"></div>}

                  <video
                    src={require("../img/projects/2023-04-09 17-31-01.mp4")}
                    class={hoverscale1}
                    autoPlay
                    loop
                    muted
                  />
                  {hoverVideo1 && (
                    <div class="card-img-overlay m-2 project-text">
                      <h5 class="card-title">Vehicles Marketplace</h5>
                      <p class="card-text">
                        Online marketplace for second-hand used cars, bikes,
                        trucks and boats.
                      </p>

                      <div className="projects-gotodiv">
                        <h2
                          className="githublink-video"
                          onClick={() =>
                            window.open(
                              "https://github.com/Davidalvarezj/Vende-Vehiculos",
                              "_blank"
                            )
                          }
                        >
                          <AiFillGithub />
                        </h2>
                        <h3
                          className="ms-4 pt-1 weblink-video"
                          onClick={() =>
                            window.open("https:vendevehiculos.com", "_blank")
                          }
                        >
                          <SiAirplayvideo />
                        </h3>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-6 col-md-4 p-2">
                <div
                  class="card text-bg-dark border-0"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  onMouseEnter={() => {
                    setHoverVideo2(true);
                    sethoverscale2("video-project video-scale");
                  }}
                  onMouseLeave={() => {
                    setHoverVideo2(false);
                    sethoverscale2("video-project");
                  }}
                >
                  {hoverVideo2 && <div className="projects-overlay"></div>}
                  <video
                    src={require("../img/projects/2023-04-09 17-34-22.mp4")}
                    class={hoverscale2}
                    autoPlay
                    loop
                    muted
                  />
                  {hoverVideo2 && (
                    <div class="card-img-overlay m-2 project-text">
                      <h5 class="card-title">Colombia Travel</h5>
                      <p class="card-text">
                        Landing page that provides information about the main
                        tours for Colombia visitors.
                      </p>
                      <div className="projects-gotodiv">
                        <h2
                          className="githublink-video"
                          onClick={() =>
                            window.open(
                              "https://github.com/Davidalvarezj/Colombia-Travel",
                              "_blank"
                            )
                          }
                        >
                          <AiFillGithub />
                        </h2>
                        <h3
                          className="ms-4 pt-1 weblink-video"
                          onClick={() =>
                            window.open(
                              "https://colombiatravel-d0f32.web.app",
                              "_blank"
                            )
                          }
                        >
                          <SiAirplayvideo />
                        </h3>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-6 col-md-4 p-2">
                <div
                  class="card text-bg-dark border-0"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  onMouseEnter={() => {
                    setHoverVideo3(true);
                    sethoverscale3("video-project video-scale");
                  }}
                  onMouseLeave={() => {
                    setHoverVideo3(false);
                    sethoverscale3("video-project");
                  }}
                >
                  {hoverVideo3 && <div className="projects-overlay"></div>}
                  <video
                    src={require("../img/projects/2023-04-09 15-28-55.mp4")}
                    class={hoverscale3}
                    autoPlay
                    loop
                    muted
                  />
                  {hoverVideo3 && (
                    <div class="card-img-overlay m-2 project-text">
                      <h5 class="card-title">NFT Movile App</h5>
                      <p class="card-text">
                        Movile database app to dispaly multiple NFT's projects
                        information.
                      </p>
                      <div className="projects-gotodiv">
                        <h2
                          className="githublink-video"
                          onClick={() =>
                            window.open(
                              "https://github.com/Davidalvarezj/React-native-NFT-Database",
                              "_blank"
                            )
                          }
                        >
                          <AiFillGithub />
                        </h2>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-6 col-md-4 p-2">
                <div
                  class="card text-bg-dark border-0"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  onMouseEnter={() => {
                    setHoverVideo4(true);
                    sethoverscale4("video-project video-scale");
                  }}
                  onMouseLeave={() => {
                    setHoverVideo4(false);
                    sethoverscale4("video-project");
                  }}
                >
                  {hoverVideo4 && <div className="projects-overlay"></div>}
                  <video
                    src={require("../img/projects/2023-04-09 17-36-05.mp4")}
                    class={hoverscale4}
                    autoPlay
                    loop
                    muted
                  />
                  {hoverVideo4 && (
                    <div class="card-img-overlay m-2 project-text">
                      <h5 class="card-title">Movies Database</h5>
                      <p class="card-text">
                        Web app that provides movies information for trailers,
                        reviews, genres, and more.
                      </p>
                      <div className="projects-gotodiv">
                        <h2
                          className="githublink-video"
                          onClick={() =>
                            window.open(
                              "https://github.com/Davidalvarezj/Movie-time",
                              "_blank"
                            )
                          }
                        >
                          <AiFillGithub />
                        </h2>
                        <h3
                          className="ms-4 pt-1 weblink-video"
                          onClick={() =>
                            window.open(
                              "https://davidalvarezj.github.io/Movie-time/",
                              "_blank"
                            )
                          }
                        >
                          <SiAirplayvideo />
                        </h3>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-6 col-md-4 p-2">
                <div
                  class="card text-bg-dark border-0"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  onMouseEnter={() => {
                    setHoverVideo5(true);
                    sethoverscale5("video-project video-scale");
                  }}
                  onMouseLeave={() => {
                    setHoverVideo5(false);
                    sethoverscale5("video-project");
                  }}
                >
                  {hoverVideo5 && <div className="projects-overlay"></div>}
                  <video
                    src={require("../img/projects/2023-04-09 14-32-47.mp4")}
                    class={hoverscale5}
                    autoPlay
                    loop
                    muted
                  />
                  {hoverVideo5 && (
                    <div class="card-img-overlay m-2 project-text">
                      <h5 class="card-title">Maze Runner Game</h5>
                      <p class="card-text">Web Puzzle game using canvas tag</p>
                      <div className="projects-gotodiv">
                        <h2
                          className="githublink-video"
                          onClick={() =>
                            window.open(
                              "https://github.com/Davidalvarezj/running-game",
                              "_blank"
                            )
                          }
                        >
                          <AiFillGithub />
                        </h2>
                        <h3
                          className="ms-4 pt-1 weblink-video"
                          onClick={() =>
                            window.open(
                              "https://davidalvarezj.github.io/running-game/",
                              "_blank"
                            )
                          }
                        >
                          <SiAirplayvideo />
                        </h3>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-6 col-md-4 p-2">
                <div
                  class="card text-bg-dark border-0"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  onMouseEnter={() => {
                    setHoverVideo6(true);
                    sethoverscale6("video-project video-scale");
                  }}
                  onMouseLeave={() => {
                    setHoverVideo6(false);
                    sethoverscale6("video-project");
                  }}
                >
                  {hoverVideo6 && <div className="projects-overlay"></div>}
                  <video
                    src={require("../img/projects/2023-04-09 17-39-40.mp4")}
                    class={hoverscale6}
                    autoPlay
                    loop
                    muted
                  />
                  {hoverVideo6 && (
                    <div class="card-img-overlay m-2 project-text">
                      <h5 class="card-title">Crypto Landing Page</h5>
                      <p class="card-text">
                        Landing page for a Crypto project focus on movile first
                        design.
                      </p>
                      <div className="projects-gotodiv">
                        <h2
                          className="githublink-video"
                          onClick={() =>
                            window.open(
                              "https://github.com/Davidalvarezj/batabit-movile",
                              "_blank"
                            )
                          }
                        >
                          <AiFillGithub />
                        </h2>
                        <h3
                          className="ms-4 pt-1 weblink-video"
                          onClick={() =>
                            window.open(
                              "https://davidalvarezj.github.io/batabit-movile/",
                              "_blank"
                            )
                          }
                        >
                          <SiAirplayvideo />
                        </h3>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-6 col-md-4 p-2">
                <div
                  class="card text-bg-dark border-0"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  onMouseEnter={() => {
                    setHoverVideo7(true);
                    sethoverscale7("video-project video-scale");
                  }}
                  onMouseLeave={() => {
                    setHoverVideo7(false);
                    sethoverscale7("video-project");
                  }}
                >
                  {hoverVideo7 && <div className="projects-overlay"></div>}
                  <video
                    src={require("../img/projects/2023-04-09 17-43-33.mp4")}
                    class={hoverscale7}
                    autoPlay
                    loop
                    muted
                  />
                  {hoverVideo7 && (
                    <div class="card-img-overlay m-2 project-text">
                      <h5 class="card-title">To-Do List App</h5>
                      <p class="card-text">To-Do List App using React</p>
                      <div className="projects-gotodiv">
                        <h2
                          className="githublink-video"
                          onClick={() =>
                            window.open(
                              "https://github.com/Davidalvarezj/To-Do-List-app",
                              "_blank"
                            )
                          }
                        >
                          <AiFillGithub />
                        </h2>
                        <h3
                          className="ms-4 pt-1 weblink-video"
                          onClick={() =>
                            window.open(
                              "https://davidalvarezj.github.io/To-Do-List-app/",
                              "_blank"
                            )
                          }
                        >
                          <SiAirplayvideo />
                        </h3>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-6 col-md-4 p-2">
                <div
                  class="card text-bg-dark border-0"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  onMouseEnter={() => {
                    setHoverVideo8(true);
                    sethoverscale8("video-project video-scale");
                  }}
                  onMouseLeave={() => {
                    setHoverVideo8(false);
                    sethoverscale8("video-project");
                  }}
                >
                  {hoverVideo8 && <div className="projects-overlay"></div>}
                  <video
                    src={require("../img/projects/2023-04-09 17-45-06.mp4")}
                    class={hoverscale8}
                    autoPlay
                    loop
                    muted
                  />
                  {hoverVideo8 && (
                    <div class="card-img-overlay m-2 project-text">
                      <h5 class="card-title">Freelance Project</h5>
                      <p class="card-text">
                        Landing page for plastic distributor sales
                        representative.
                      </p>
                      <div className="projects-gotodiv">
                        <h2
                          className="githublink-video"
                          onClick={() =>
                            window.open(
                              "https://github.com/Davidalvarezj/representaciones-jisa",
                              "_blank"
                            )
                          }
                        >
                          <AiFillGithub />
                        </h2>
                        <h3
                          className="ms-4 pt-1 weblink-video"
                          onClick={() =>
                            window.open(
                              "https://representacionesjisa.com/",
                              "_blank"
                            )
                          }
                        >
                          <SiAirplayvideo />
                        </h3>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-6 col-md-4 p-2">
                <div
                  class="card text-bg-dark border-0"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  onMouseEnter={() => {
                    setHoverVideo9(true);
                    sethoverscale9("video-project video-scale");
                  }}
                  onMouseLeave={() => {
                    setHoverVideo9(false);
                    sethoverscale9("video-project");
                  }}
                >
                  {hoverVideo9 && <div className="projects-overlay"></div>}
                  <video
                    src={require("../img/projects/2023-04-09 17-48-03.mp4")}
                    class={hoverscale9}
                    autoPlay
                    loop
                    muted
                  />
                  {hoverVideo9 && (
                    <div class="card-img-overlay m-2 project-text">
                      <h5 class="card-title">Youtube API</h5>
                      <p class="card-text">Best Motivational Speech Videos</p>
                      <div className="projects-gotodiv">
                        <h2
                          className="githublink-video"
                          onClick={() =>
                            window.open(
                              "https://github.com/Davidalvarezj/Youtube-API-Test",
                              "_blank"
                            )
                          }
                        >
                          <AiFillGithub />
                        </h2>
                        <h3
                          className="ms-4 pt-1 weblink-video"
                          onClick={() =>
                            window.open(
                              "https://davidalvarezj.github.io/Youtube-API-Test/",
                              "_blank"
                            )
                          }
                        >
                          <SiAirplayvideo />
                        </h3>
                      </div>
                    </div>
                  )}
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
