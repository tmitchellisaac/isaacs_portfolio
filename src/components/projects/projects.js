import React from 'react';
import './projects.css';
import Portfolio1 from  '../../assets/portfolio-1.png'
import Portfolio2 from  '../../assets/portfolio-2.png'
import Portfolio3 from  '../../assets/portfolio-3.png'
import Portfolio4 from  '../../assets/portfolio-4.png'
import Portfolio5 from  '../../assets/portfolio-5.png'
import Portfolio6 from  '../../assets/portfolio-6.png'

const Projects = () => {
  return (
    <section  id="projects">
      <h2 className="projects-title">Projects </h2>
      <span className="projects-descr">Check out my projects!</span>
      <div className="projects-imgs"> 
        <img src={Portfolio1} alt="Portfolio1" className="projects-img"/>
        <img src={Portfolio2} alt="Portfolio2" className="projects-img"/>
        <img src={Portfolio3} alt="Portfolio3" className="projects-img"/>
        <img src={Portfolio4} alt="Portfolio4" className="projects-img"/>
        <img src={Portfolio5} alt="Portfolio5" className="projects-img"/>
        <img src={Portfolio6} alt="Portfolio6" className="projects-img"/>
      </div>
      <button className="projects-btn">
        See More
      </button>
    </section>
  );
}

export default Projects;
