import React, { useRef } from 'react';
import './contact.css';
import download from '../../assets/download.png'
import liIcon from '../../assets/linkedin-icon.png'
import ghIcon from '../../assets/github-icon.png'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import resumeIcon from '../../assets/resume-icon.png'
import resume from '../../assets/resume.docx.pdf'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm('service_yrcwdeg', 'template_h91r6f8', form.current, 'MMxx7xHWkA7-NSnKT')
    .then(
      () => {
        console.log('SUCCESS!');
      Swal.fire({
        title: "Hey Thanks!",
        text: "fer getting in touch",
        icon: "success",
        iconColor: "forest-green",
        color: "white",
        confirmButtonColor: "#eb9898",
        background: "#282828",
        timer: 4000,
      });
        e.target.reset();
      },
      (error) => {
        Swal.fire({
          title: "Whoops!",
          text: "something went wrong, please try again",
          icon: "error",
        });
      },
    );
  };

  return (
    <section  id="contact-page">
      <div className="resume">
        <h2 className="contact-page-title">Resume</h2>
        <p className="resume-text"></p>
        <img src={resumeIcon} alt="resume-icon" className="resume-img"></img>
        <a href={resume} download="resume.docx.pdf" class="resume-download-btn">
          <p>Download</p>
          <img src={download} alt="download" className="download-img"/>
        </a>
      </div>

      <div id="contact">
        <h2 className="contact-heading">Get in Touch</h2>
        <span className="contact-descr"></span>
        <form className="contact-form" ref={form} onSubmit={sendEmail} >
          <input type="text" className="name" placeholder="Your Name" name="name"/>
          <input type="text" className="email" placeholder="Your Email" name="email"/>
          <textarea type="text" className="message" placeholder="Your Message" name="message"/>
          <button type="submit" className="submit-btn" value='Send' >Submit</button>
          <div className="links">
            <a href="https://www.github.com/tmitchellisaac" target="_blank" rel="noopener noreferrer"> 
              <img src={ghIcon} alt="github-icon" className="link-img"/>
            </a>
            <a href="https://www.linkedin.com/in/tmitchellisaac/" target="_blank" rel="noopener noreferrer"> 
              <img src={liIcon} alt="linkedin-icon" className="link-img"/>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;