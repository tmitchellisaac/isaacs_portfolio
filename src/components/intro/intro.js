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
        <span className="introText">I am <span className="introName">Isaac Mitchell</span><br/>Software Engineer</span>
        <p className="introPara"> I'm a <span className='extra'>beast</span>, dedicated to crafting seamless user experiences <br />and writing clean, test-driven code</p>
        <Link><button className="btn"> <img src={btnImg} alt="buttonImage" className="btnImg"/>Hire Me</button></Link>
      </div>
      <div>
        <img src={bg} alt="bg" className="bg"/>
      </div>
    </section>
  );
}

export default Intro;
