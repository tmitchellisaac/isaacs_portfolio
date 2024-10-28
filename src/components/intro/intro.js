import React from 'react';
import './intro.css';
import bg from  '../../assets/profile-3.png'
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section className="top" id="intro">
      <div className="intro-content">
        <span className="hello">Howdy!</span>
        <span className="intro-text">I'm <br/><span className="intro-name">Isaac Mitchell</span><br/>Software Engineer</span>
        <p className="intro-para">I'm a lighthearted and driven engineer who loves building tools that help people. I bring creativity, teamwork, and passion to every project Take a look around!</p>
        <button className='btn' onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
        }}>
          <img src={btnImg} alt="Contact Button" className="btn-img"/>Hire Me
        </button>
      </div>
      <img src={bg} alt="bg" className="bg"/>
    </section>
  );
}

export default Intro;
