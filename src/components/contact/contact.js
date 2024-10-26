import React from 'react';
import './contact.css';
import download from '../../assets/download.png'
// import guitarIcon from '../../assets/guitar.png'
import liIcon from '../../assets/linkedin-icon.png'
import ghIcon from '../../assets/github-icon.png'

const Contact = () => {
  return (
    <section  id="contact-page">
      <div className="resume">
        <h1 className="contact-page-title">Resume</h1>
        <p className="resume-text">Check out my cool credentials and work history!</p>
        <button className="resume-download-btn">
          <p>Download Resume</p>
          <img src={download} alt="download" className="download-img"/>
        </button>
      </div>
      <div className="contact">
        Contact form
      </div>
      <div id="contact">
        <h1 className="contact-heading">Contact Ya Boi</h1>
        <span className="contact-descr">Please fill out the form below to discuss any work opportunities</span>
        <div className="contact-form">
          <input type="text" className="name" placeholder="Your Name"/>
          <input type="text" className="email" placeholder="Your Email"/>
          <textarea type="text" className="message" placeholder="Your Message"/>
          <button type="submit" className="submit-btn" value='Send' >Submit</button>
          <div className="links">
            <img src={ghIcon} alt="github-icon" className="link-img"/>
            <img src={liIcon} alt="linkedin-icon" className="link-img"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
