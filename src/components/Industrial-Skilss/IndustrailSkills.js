import React, { useContext } from "react";
import "./IndustrailSkills.css";
import angular from "../../img/angular.png";
import rxjs from "../../img/rxjs.png";
import react from "../../img/react.png";
import typescript from "../../img/typescript.png";
import javascript from "../../img/javascript.png";
import git from "../../img/git.png";
import svn from "../../img/svn.png";
import mongo from "../../img/mongo.png";
import express from "../../img/express.png";
// import pdfDownLoad from "../../file/resume.pdf";

import { ThemeContext } from "../../context";

const IndustrialSkills = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="is container" id="is">
      <h1 className="ps-title">Industrial Experience</h1>
      <div className="ps-work-desc">
        <div>
          <div className="row">
            <div className="col col-lg-12 experience-detail">
              <div className="industrail-exp-head ">Senior Software Enginner</div>
              <div className="industrail-exp-sub-head ">LTI - Larsen & Toubro Infotech · Full-time (Present)</div>
              <div className="industrail-exp-next-head ">
                <span style={{fontWeight: "bold"}}>Location:</span> Mumbai, India
              </div>
              <div className="industrail-exp-next-head ">
                <span style={{fontWeight: "bold"}}>Technologies:</span> Angular 12+, HTML5, SCSS, GraphQL, NGRX, RXJS, NodeJS, GIT,
                React JS, HTML5, SCSS, RestService,NodeJS.
              </div>
              <div className="industrail-exp-explain ">
                <span style={{fontWeight: "bold"}}>Responsibilities: </span>Working as a Fronted developer, creating angular projects as per client’s requirements using Angular12, 
                JSON, HTML5, and SCSS. Responsible for creating efficient design and 
                developing User Interaction screens using Angular or ReactJs, HTML, CSS, 
                JavaScript, JSON, RXJS, NGRX</div>
            </div>

            <div className="col col-lg-12 experience-below-detail">
              <div className="industrail-exp-head ">Associate Consultant</div>
              <div className="industrail-exp-sub-head ">Capgemini Information Technologies Pvt. Ltd · Full-time 
              <span style={{fontSize: "18px"}}> (July, 2019 to Oct 2021) </span>
              </div>
              <div className="industrail-exp-next-head ">
                <span style={{fontWeight: "bold"}}>Location:</span> Mumbai, India
              </div>
              <div className="industrail-exp-next-head ">
                <span style={{fontWeight: "bold"}}>Technologies:</span> Angular7+, JavaScript, HTML5, SCSS, JASMINE, KARMA, GIT, JIRA, JAVA
              </div>
              <div className="industrail-exp-explain ">
                <span style={{fontWeight: "bold"}}>Responsibilities: </span>Working as a Frontend developer, 
                creating angular projects as per client’s requirements using Angular7, 
                JSON, HTML, CSS. Responsible for creating efficient design and 
                developing User Interaction screens using Angular, HTML, CSS, JavaScript, JSON</div>
            </div>

            <div className="col col-lg-12 experience-below-detail">
              <div className="industrail-exp-head ">Jr. Programmer</div>
              <div className="industrail-exp-sub-head ">Proteus Technologies Pvt. Ltd · Full-time 
              <span style={{fontSize: "18px"}}> (March, 2017 to July 2019) </span>
              </div>
              <div className="industrail-exp-next-head ">
                <span style={{fontWeight: "bold"}}>Location:</span> Mumbai, India
              </div>
              <div className="industrail-exp-next-head ">
                <span style={{fontWeight: "bold"}}>Technologies:</span> Angular2+, JavaScript, HTML5, SCSS, JAVA
              </div>
              <div className="industrail-exp-explain ">
                <span style={{fontWeight: "bold"}}>Responsibilities: </span>Working as a full stack developer, 
                creating angular projects as per client’s requirements using Angular4, Java,
                 Restful web services, Hibernate, JSON, HTML, and CSS. Responsible for creating efficient design and developing 
                User Interaction screens using Angular, HTML, CSS, JavaScript, and JSON</div>
            </div>
          </div>
        </div>
      </div>
   
    </div>

  );
};

export default IndustrialSkills;
