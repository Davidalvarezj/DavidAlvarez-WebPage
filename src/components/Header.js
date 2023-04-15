import React from "react";
import "./Header.css";

import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFilePdf } from "react-icons/ai";
import pdf from "../img/projects/David Alvarez Full-stack developer.pdf";

const Header = () => {
  return (
    <>
      <div className="section-header" id="home">
        <div className="container-header">
          <div className="overlayimage"></div>

          <video
            src={require("../img/video_length1.mp4")}
            class="header-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
          <div className="row">
            <div className="col">
              <div className="header-content">
                <h1 className="header-tittle">
                  D<span className="header-tittle-sub">AVID</span> A
                  <span className="header-tittle-sub">LVAREZ</span>
                </h1>
                <p className="header-paragraph ">FULL-STACK WEB DEVELOPER</p>
                <div data-aos="zoom-in">
                  <a
                    type="button"
                    className="btn btn-outline-light header-button"
                    href="https://linkedin.com/in/david-alvarezj"
                    target="_blank"
                  >
                    <h3>
                      <FaLinkedinIn className="header-icons" />
                    </h3>
                  </a>
                  <a
                    type="button"
                    className="btn btn-outline-light header-button"
                    href="https://github.com/Davidalvarezj"
                    target="_blank"
                  >
                    <h3>
                      <AiFillGithub className="header-icons" />
                    </h3>
                  </a>
                  <a
                    type="button"
                    className="btn btn-outline-light header-button"
                    href="https://twitter.com/D4VID_AJ"
                    target="_blank"
                  >
                    <h3>
                      <AiOutlineTwitter className="header-icons" />
                    </h3>
                  </a>
                  <a
                    type="button"
                    className="btn btn-outline-light header-button"
                    href="https://www.instagram.com/davidaj44/"
                    target="_blank"
                  >
                    <h3>
                      <AiFillInstagram className="header-icons" />
                    </h3>
                  </a>
                  <a
                    type="button"
                    className="btn btn-outline-light header-button"
                    href={pdf}
                    target="_blank"
                  >
                    <h3>
                      <AiFillFilePdf className="header-icons" />
                    </h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
