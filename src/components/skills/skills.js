import React from 'react';
import './skills.css';
import BackEnd from  '../../assets/relational.png'
import FrontEnd from '../../assets/ui-design-1.png'
import Testing from '../../assets/software-testing.png'

const Skills = () => {
  return (
    <section  id="skills">
      <h2 className="skill-title">What I Do</h2>
      <span className="skill-descr"></span>
      <span className="skill-bars">
        <div className="skill-bar">
          <img src={BackEnd} alt="Back End" className="skill-bar-img"/>
          <div className="skill-bar-text">
            <h2>Back End Development</h2>
            <p>Skilled in Ruby on Rails, REST APIs, and database management with SQL. Currently diving into Python.</p>
          </div>
        </div>
        <div className="skill-bar">
          <img src={FrontEnd} alt="Front End" className="skill-bar-img"/>
          <div className="skill-bar-text">
            <h2>Front End Development</h2>
            <p>Proficient in Angular and TypeScript, with a focus on responsive, user-friendly interfaces while refactoring old code to meet new standards.</p>
          </div>
        </div>
        <div className="skill-bar">
          <img src={Testing} alt="Testing" className="skill-bar-img"/>
          <div className="skill-bar-text">
            <h2>Testing</h2>
            <p>Skilled in E2E, unit, and integration testing using the Page Object Model (POM) and tools like Playwright to build robust, maintainable applications.</p>
          </div>
        </div>
      </span>
    </section>
  );
}

export default Skills;
