import React from "react";
import "./Header.css";
import videoBg from "../img/untitled_20814130213510_0.mp4";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFilePdf } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <div className="section-header">
        <div className="container-header">
          <div className="overlayimage"></div>
          <video
            className="header-video"
            src={videoBg}
            autoPlay
            loop
            muted
          ></video>
          <div className="row">
            <div className="col">
              <div className="header-content">
                <h1
                  className="header-tittle"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  David Alvarez
                </h1>
                <p className="header-paragraph ">
                  Freelance Full-Stack web Developer
                </p>
                <div data-aos="zoom-in">
                  <button
                    type="button"
                    className="btn btn-outline-light header-button"
                  >
                    <h3>
                      <FaLinkedinIn />
                    </h3>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-light header-button"
                  >
                    <h3>
                      <AiFillGithub />
                    </h3>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-light header-button"
                  >
                    <h3>
                      <AiOutlineTwitter />
                    </h3>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-light header-button"
                  >
                    <h3>
                      <AiFillInstagram />
                    </h3>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-light header-button"
                  >
                    <h3>
                      <AiFillFilePdf />
                    </h3>
                  </button>
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
