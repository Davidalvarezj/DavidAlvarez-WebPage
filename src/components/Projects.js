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
      <div className="projects-section" id="projects">
        <div className="container projects-container">
          <div className="row" data-aos="fade-up" data-aos-duration="1000">
            <div className="col col-md-5 offset-md-1 my-auto project-title-div">
              <h3 className="section-tittle">
                <span className="section-tittle-span">P</span>ROJECTS
              </h3>
              <p className="text-white projects-paragraph mb-5">
                <span className="aboutme-paragraph-span">A</span>ctively working
                on a range of projects, including landing pages, marketplaces,
                video games, and creative startup concepts, displaying diverse
                skills and expertise.
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
                    src={require("../img/projects/2023-04-09 17-31-01red.mp4")}
                    class={hoverscale1}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                  {hoverVideo1 && (
                    <div class="card-img-overlay project-text">
                      <h5 class="card-title card-title-projects">
                        Vehicles Marketplace
                      </h5>
                      <p class="card-text card-display-none-xs">
                        Online marketplace for second-hand used cars, bikes,
                        trucks and boats.
                      </p>

                      <div className="projects-gotodiv">
                        <a
                          type="button"
                          className="githublink-video"
                          href="https://github.com/Davidalvarezj/Vende-Vehiculos"
                          target="_blank"
                        >
                          <h2 className="githublink-video">
                            <AiFillGithub />
                          </h2>
                        </a>
                        <a
                          type="button"
                          className="weblink-video"
                          href="https://www.vendevehiculos.com"
                          target="_blank"
                        >
                          <h2 className="weblink-video">
                            <SiAirplayvideo />
                          </h2>
                        </a>
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
                    src={require("../img/projects/2023-04-09 17-34-22red.mp4")}
                    class={hoverscale2}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                  {hoverVideo2 && (
                    <div class="card-img-overlay project-text">
                      <h5 class="card-title card-title-projects">
                        Colombia Travel
                      </h5>
                      <p class="card-text card-display-none-xs">
                        A landing page that provides information about the main
                        tours for tourists.
                      </p>
                      <div className="projects-gotodiv">
                        <a
                          type="button"
                          className="githublink-video"
                          href="https://github.com/Davidalvarezj/Colombia-Travel"
                          target="_blank"
                        >
                          <h2 className="githublink-video">
                            <AiFillGithub />
                          </h2>
                        </a>
                        <a
                          type="button"
                          className="weblink-video"
                          href="https://colombiatravel-d0f32.web.app"
                          target="_blank"
                        >
                          <h2 className="weblink-video">
                            <SiAirplayvideo />
                          </h2>
                        </a>
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
                    src={require("../img/projects/2023-04-09 15-28-55red.mp4")}
                    class={hoverscale3}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                  {hoverVideo3 && (
                    <div class="card-img-overlay project-text">
                      <h5 class="card-title card-title-projects">
                        NFT Movile App
                      </h5>
                      <p class="card-text card-display-none-xs">
                        Mobile database app to display multiple NFT's projects
                        information.
                      </p>
                      <div className="projects-gotodiv">
                        <a
                          type="button"
                          className="githublink-video"
                          href="https://github.com/Davidalvarezj/React-native-NFT-Database"
                          target="_blank"
                        >
                          <h2 className="githublink-video">
                            <AiFillGithub />
                          </h2>
                        </a>
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
                    src={require("../img/projects/2023-04-09 17-36-05red.mp4")}
                    class={hoverscale4}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                  {hoverVideo4 && (
                    <div class="card-img-overlay project-text">
                      <h5 class="card-title card-title-projects">
                        Movies Database
                      </h5>
                      <p class="card-text card-display-none-xs">
                        Web app that provides movie information for trailers,
                        reviews, genres, and more.
                      </p>
                      <div className="projects-gotodiv">
                        <a
                          type="button"
                          className="githublink-video"
                          href="https://github.com/Davidalvarezj/Movie-time"
                          target="_blank"
                        >
                          <h2 className="githublink-video">
                            <AiFillGithub />
                          </h2>
                        </a>
                        <a
                          type="button"
                          className="weblink-video"
                          href="https://davidalvarezj.github.io/Movie-time/"
                          target="_blank"
                        >
                          <h2 className="weblink-video">
                            <SiAirplayvideo />
                          </h2>
                        </a>
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
                    src={require("../img/projects/2023-04-09 14-32-47red.mp4")}
                    class={hoverscale5}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                  {hoverVideo5 && (
                    <div class="card-img-overlay project-text">
                      <h5 class="card-title card-title-projects">
                        Maze Runner Game
                      </h5>
                      <p class="card-text card-display-none-xs">
                        Web Puzzle game using canvas.
                      </p>
                      <div className="projects-gotodiv">
                        <a
                          type="button"
                          className="githublink-video"
                          href="https://github.com/Davidalvarezj/running-game"
                          target="_blank"
                        >
                          <h2 className="githublink-video">
                            <AiFillGithub />
                          </h2>
                        </a>
                        <a
                          type="button"
                          className="weblink-video"
                          href="https://davidalvarezj.github.io/running-game/"
                          target="_blank"
                        >
                          <h2 className="weblink-video">
                            <SiAirplayvideo />
                          </h2>
                        </a>
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
                    src={require("../img/projects/2023-04-09 17-39-40red.mp4")}
                    class={hoverscale6}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                  {hoverVideo6 && (
                    <div class="card-img-overlay project-text">
                      <h5 class="card-title card-title-projects">
                        Crypto Landing Page
                      </h5>
                      <p class="card-text card-display-none-xs">
                        Landing page for a Crypto project focus on mobile first
                        design.
                      </p>
                      <div className="projects-gotodiv">
                        <a
                          type="button"
                          className="githublink-video"
                          href="https://github.com/Davidalvarezj/batabit-movile"
                          target="_blank"
                        >
                          <h2 className="githublink-video">
                            <AiFillGithub />
                          </h2>
                        </a>
                        <a
                          type="button"
                          className="weblink-video"
                          href="https://davidalvarezj.github.io/batabit-movile/"
                          target="_blank"
                        >
                          <h2 className="weblink-video">
                            <SiAirplayvideo />
                          </h2>
                        </a>
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
                    src={require("../img/projects/2023-04-09 17-43-33red.mp4")}
                    class={hoverscale7}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                  {hoverVideo7 && (
                    <div class="card-img-overlay project-text">
                      <h5 class="card-title card-title-projects">
                        To-Do List App
                      </h5>
                      <p class="card-text card-display-none-xs">
                        Web application using React.
                      </p>
                      <div className="projects-gotodiv">
                        <a
                          type="button"
                          className="githublink-video"
                          href="https://github.com/Davidalvarezj/To-Do-List-app"
                          target="_blank"
                        >
                          <h2 className="githublink-video">
                            <AiFillGithub />
                          </h2>
                        </a>
                        <a
                          type="button"
                          className="weblink-video"
                          href="https://davidalvarezj.github.io/To-Do-List-app/"
                          target="_blank"
                        >
                          <h2 className="weblink-video">
                            <SiAirplayvideo />
                          </h2>
                        </a>
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
                    src={require("../img/projects/2023-04-09 17-45-06red.mp4")}
                    class={hoverscale8}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                  {hoverVideo8 && (
                    <div class="card-img-overlay project-text">
                      <h5 class="card-title card-title-projects">
                        Marketing landing page{" "}
                      </h5>
                      <p class="card-text card-display-none-xs">
                        Single-page website for a packaging plastic film
                        supplier.
                      </p>
                      <div className="projects-gotodiv">
                        <a
                          type="button"
                          className="githublink-video"
                          href="https://github.com/Davidalvarezj/representaciones-jisa"
                          target="_blank"
                        >
                          <h2 className="githublink-video">
                            <AiFillGithub />
                          </h2>
                        </a>
                        <a
                          type="button"
                          className="weblink-video"
                          href="https://representacionesjisa.com/"
                          target="_blank"
                        >
                          <h2 className="weblink-video">
                            <SiAirplayvideo />
                          </h2>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-6 col-md-4 p-2 card-display-none-xs">
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
                    src={require("../img/projects/2023-04-09 17-48-03red.mp4")}
                    class={hoverscale9}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                  {hoverVideo9 && (
                    <div class="card-img-overlay project-text">
                      <h5 class="card-title card-title-projects">
                        Youtube API
                      </h5>
                      <p class="card-text card-display-none-xs">
                        Best Motivational Speech Videos.
                      </p>
                      <div className="projects-gotodiv">
                        <a
                          type="button"
                          className="githublink-video"
                          href="https://github.com/Davidalvarezj/Youtube-API-Test"
                          target="_blank"
                        >
                          <h2 className="githublink-video">
                            <AiFillGithub />
                          </h2>
                        </a>
                        <a
                          type="button"
                          className="weblink-video"
                          href="https://davidalvarezj.github.io/Youtube-API-Test/"
                          target="_blank"
                        >
                          <h2 className="weblink-video">
                            <SiAirplayvideo />
                          </h2>
                        </a>
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
