import React from 'react';
import './skills.css';
import BackEnd from  '../../assets/relational.png'
import FrontEnd from '../../assets/ui-design-1.png'
import Testing from '../../assets/software-testing.png'

const Skills = () => {
  return (
    <section  id="skills">
      <span className="skill-title">What I Do</span>
      <span className="skill-descr">Experienced software engineer with 8+ years in quality assurance and a foundation in biology and chemistry. Skilled in Angular, TypeScript, Ruby on Rails, SQL, REST APIs, and Playwright, with a focus on clean, scalable code and best practices. Strong communicator, adept at explaining technical concepts and collaborating across teams to deliver business solutions. Proficient in building responsive, user-friendly front-end interfaces.</span>
      <span className="skill-bars">
        <div className="skill-bar">
          <img src={BackEnd} alt="Back End" className="skill-bar-img"/>
          <div className="skill-bar-text">
            <h2>Back End Development</h2>
            <p>Write additional informative text right here in the block!! Go ahead try it</p>
          </div>
        </div>
        <div className="skill-bar">
          <img src={FrontEnd} alt="Front End" className="skill-bar-img"/>
          <div className="skill-bar-text">
            <h2>Front End Development</h2>
            <p>Some content some content some content</p>
          </div>
        </div>
        <div className="skill-bar">
          <img src={Testing} alt="Testing" className="skill-bar-img"/>
          <div className="skill-bar-text">
            <h2>Testing</h2>
            <p>Write additional informative text right here in the block!! Go ahead try it</p>
          </div>
        </div>
      </span>
    </section>
  );
}

export default Skills;
