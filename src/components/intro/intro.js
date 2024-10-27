import React from 'react';
import './intro.css';
import bg from  '../../assets/profile-3.png'
import { Link } from 'react-scroll'
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section className="top" id="intro">
      <div className="introContent">
        <span className="hello">Howdy!</span>
        <span className="introText">I'm <br/><span className="introName">Isaac Mitchell</span><br/>Software Engineer</span>
        {/* <p className="introPara"> I'm a <span className='extra'>beast</span>, dedicated to crafting seamless user experiences <br />and writing clean, test-driven code</p> */}
        <p className="introPara">I'm a lighthearted and driven engineer who loves building tools that help people. I bring creativity,teamwork, and passion to every project Take a look around!</p>
        <button className='btn' onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
        }}>
          <img src={btnImg} alt="Contact Button" className="btnImg"/>Hire Me
        </button>
    
      </div>
      {/* <div> */}
        <img src={bg} alt="bg" className="bg"/>
      {/* </div> */}
    </section>
  );
}

export default Intro;
