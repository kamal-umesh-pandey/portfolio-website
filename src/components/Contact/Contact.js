import "./Contact.css";
import React from "react";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_htxebdh",
        "template_mua0phu",
        formRef.current,
        "user_sIbNJhcpQuweENX1JLlhC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c" id="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss if there is any opening in your organistaion</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 - 9892350221
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              kamalpandey0221@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Ambernath East, Thane 421501
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc" style={{fontSize: "x-large"}}>
            Download my resume on click on just one click 
          </p>
          <a href={require("../../file/resume.pdf")} download="kamal_pandey_resume">Download Resume</a>  
        </div>
      </div>
    </div>
  );
};

export default Contact;
