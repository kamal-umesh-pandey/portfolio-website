import React, { useContext } from "react";
import "./ProfessionalSkills.css";
import angular from "../../img/angular.png";
import rxjs from "../../img/rxjs.png";
import react from "../../img/react.png";
import typescript from "../../img/typescript.png";
import javascript from "../../img/javascript.png";
import git from "../../img/git.png";
import svn from "../../img/svn.png";
import mongo from "../../img/mongo.png";
import express from "../../img/express.png";

import { ThemeContext } from "../../context";

const ProfessionalSkills = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="ps container" id="ps">
      <h1 className="ps-title">Professional Skills</h1>
      <div className="ps-work-desc">
        <div>
          <div className="row">
            <div className="col col-lg-6 ">
              <div className="ps-working-history">Experience in</div>
              <div className="row  prof-exp-hover">
                <div className={`col-lg-4 ${darkMode ? "exp-desc-dark" : "exp-desc-white"}`}>
                  <div className="fw-image">
                    <img src={angular} alt="" className="ang-img" />
                  </div>
                  <div className="fw-desc">Angular 2+ and above</div>
                </div>

                <div className={`col-lg-4 ${darkMode ? "exp-desc-dark" : "exp-desc-white"}`}>
                  <div className="fw-image">
                    <img src={react} alt="" className="ang-img" />
                  </div>
                  <div className="fw-desc">ReactJS</div>
                </div>

                <div className={`col-lg-4 ${darkMode ? "exp-desc-dark" : "exp-desc-white"}`}>
                  <div className="fw-image">
                    <img src={typescript} alt="" className="ang-img" />
                  </div>
                  <div className="fw-desc">Typescript</div>
                </div>

                <div className={`col-lg-4 js-ht ${darkMode ? "exp-desc-dark" : "exp-desc-white"}`}>
                  <div className="fw-image">
                    <img src={javascript} alt="" className="ang-img" />
                  </div>
                  <div className="fw-desc"> Javascript / HTML 5 / CSS</div>
                </div>

                <div className={`col-lg-4 ${darkMode ? "exp-desc-dark" : "exp-desc-white"}`}>
                  <div className="fw-image">
                    <img src={rxjs} alt="" className="ang-img" />
                  </div>
                  <div className="fw-desc">RXJS</div>
                </div>

                <div className={`col-lg-4 ${darkMode ? "exp-desc-dark" : "exp-desc-white"}`}>
                  <div className="fw-image">
                    <img src={angular} alt="" className="ang-img" />
                  </div>
                  <div className="fw-desc">Jasmine and Karma</div>
                </div>

                <div className={`col-lg-4 ${darkMode ? "exp-desc-dark" : "exp-desc-white"}`}>
                  <div className="fw-image">
                    <img src={angular} alt="" className="ang-img" />
                  </div>
                  <div className="fw-desc">
                    Unit Testing / CDCT Testing/ End to End Testing
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-lg-6">
              <div className="ps-working-history">Working Knowledge</div>
              <div>
                <div className="row  prof-exp-hover">
                <div className={`col-lg-4 ${darkMode ? "exp-desc-dark" : "exp-desc-white"}`}>
                  <div className="fw-image">
                    <img src={svn} alt="" className="ang-img" />
                  </div>
                  <div className="fw-desc">Node.JS</div>
                </div>
                <div className={`col-lg-4 ${darkMode ? "exp-desc-dark" : "exp-desc-white"}`}>
                  <div className="fw-image">
                   <img src={express} alt="" className="ang-img" />
                  </div>
                  <div className="fw-desc">Express.JS</div>
                </div>
                <div className={`col-lg-4 ${darkMode ? "exp-desc-dark" : "exp-desc-white"}`}>
                  <div className="fw-image">
                   <img src={mongo} alt="" className="ang-img" />
                  </div>
                  <div className="fw-desc">MongoDb</div>
                </div>
              </div>
              </div>
            </div>
            <div className="col col-lg-6">
              <div className="ps-working-history">Version Control</div>
              <div className="row  prof-exp-hover">
                <div className={`col-lg-4 ${darkMode ? "exp-desc-dark" : "exp-desc-white"}`}>
                  <div className="fw-image">
                    <img src={svn} alt="" className="ang-img" />
                  </div>
                  <div className="fw-desc">SVN</div>
                </div>
                <div className={`col-lg-4 ${darkMode ? "exp-desc-dark" : "exp-desc-white"}`}>
                  <div className="fw-image">
                    <img src={git} alt="" className="ang-img" />
                  </div>
                  <div className="fw-desc">GIT</div>
                </div>
              </div>
            </div>
            <div className="col col-lg-6">
              <div className="ps-working-history">Delivery Methodoligies</div>
              <div className="row  prof-exp-hover">
                <div className={`col-lg-4 ${darkMode ? "exp-desc-dark" : "exp-desc-white"}`}>
                  <div className="fw-image">
                  </div>
                  <div className="fw-desc">Agile</div>
                </div>
                <div className={`col-lg-4 ${darkMode ? "exp-desc-dark" : "exp-desc-white"}`}>
                  <div className="fw-image">
                  </div>
                  <div className="fw-desc">Waterfall</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSkills;
