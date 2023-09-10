import React from "react";
import "./About.css";
import Award from "../../img/award.png";
import aboutMe from "../../img/AboutME.jpg";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import LazyShow from "../../lazyShow"

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="a" id="about">
      <div className="a-left">
        <div
          style={{ backgroundColor: darkMode && "white" }}
          className="a-card bg"
        ></div>
        <div className="a-card">
          <img src={aboutMe} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          About my working experiences !!!
        </p>
        <p className="a-desc">
          5+ years of experience working in a corporate environment as a
          front-end UI/Web developer .<br></br> Experience in system analysis, design,
          workflow architecture, development, testing and maintenance of web
          based applications. <br></br> Experience in developing interactive web
          applications utilizing Angular 2+ and above ,React.JS
          HTML5, CSS,RXJS, JSON, and integrating Restful API's.<br></br> Having a knowledge of developing end to end application with front end and backend using Node.Js Express and mongoDb with deployment<br></br> In depth
          knowledge of web technologies and standards to deliver the best
          experiences across web and mobile devices including responsive Web UI.
        </p>
      </div>
    </div>
  );
};

export default About;
