import React, { useContext } from "react";
import "./Intro.css";
import Me from "../../img/me1_ccexpress.png";
import { ThemeContext } from "../../context";
import "font-awesome/css/font-awesome.min.css";
import LazyShow from "../../lazyShow"

const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="i" id="intro">
      <div className="i-left">
        <div className="i-left-wrapper">


          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Kamal Umeshchand Pandey</h1>
          <div className="i-work-desc">
            <div className="i-work-desc-title">I am a</div>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Angular +2 Developer</div>
                <div className="i-title-item">ReactJS Developer</div>
                <div className="i-title-item">Javascript Developer</div>
                <div className="i-title-item">MEAN Developer</div>
                <div className="i-title-item">MERN Developer</div>
                <div className="i-title-item">Web Developer</div>
              </div>
            </div>
          </div>
          <div className="social-site">
            <span className="link-in">
              <a
                style={{ textDecoration: "none", color: "inherit" }}
                href="https://www.linkedin.com/in/kamal-p-751ba5249?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPDzmlIDTSniE%2Bu5gugFdQg%3D%3D"
              >
                <i className="fa fa-linkedin-square"></i>
              </a>
            </span>

            <span className="git-hub">
              <a
                style={{ textDecoration: "none", color: "inherit" }}
                href="https://github.com/kamal-umesh-pandey"
              >
                <i className="fa fa-github-square "></i>
              </a>
            </span>
          </div>
          {/* <LazyShow> */}
          <p className="i-desc">
            I am passionate about UI/UX/Web development. I am a interested in{" "}
            <b>MEAN/MERN Stack Development</b> and a detail-oriented and
            hardworking professional with remarkable analytical, logical skills
            and expert in performing complex operations. I possessing 5+ years
            of experience as a programmer.
          </p>
          {/* </LazyShow> */}



        </div>
      </div>
      <div className="i-right">
        <div
          style={{ backgroundColor: darkMode && "white" }}
          className="i-bg"
        ></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
