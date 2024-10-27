import React from 'react';
import './projects.css';
import ChickenTracker from  '../../assets/chicken-tracker-icon.png'
import Platform from  '../../assets/platform.png'
import VandrilCoaching from  '../../assets/vandril-img1.png'
import PortfolioSite from  '../../assets/porfolio-img.png'
import ChickenTracker2 from  '../../assets/chicken2.png'
import ClinicalNet from  '../../assets/clinical_net_logo.jpeg'

const Projects = () => {
  return (
    <section  id="projects">
      <h2 className="projects-title">Projects </h2>
      <span className="projects-descr"></span>
      <div className="projects-imgs"> 
        <div className="project-card">
          <img src={ChickenTracker} alt="ChickenTracker" className="projects-img"/>
          <div className="overlay">
            <h2>Chicken Tracker</h2>
            <a href="https://warm-refuge-91806-7859a51228e5.herokuapp.com/" target="_blank" rel="noopener noreferrer" class="repo-link">Live Site</a>
            <a href="https://github.com/tmitchellisaac/chicken_tracker_fe" target="_blank" rel="noopener noreferrer" class="repo-link">Back End Repo</a>
            <a href="https://github.com/tmitchellisaac/chicken_tracker_be" target="_blank" rel="noopener noreferrer" class="repo-link">Front End Repo</a>
          </div>
        </div>
        <div className="project-card">
        <img src={Platform} alt="Platform Project" className="projects-img"/>
          <div className="overlay">
            <h2>Platform</h2>
            <a href="https://capstonefrontend-dun.vercel.app" target="_blank" rel="noopener noreferrer" class="repo-link">Live Site (depr)</a>
            <a href="https://github.com/2310-social-media-aggregator" target="_blank" rel="noopener noreferrer" class="repo-link">FE/BE Repos</a>
          </div>
        </div>
        <div className="project-card">
        <img src={VandrilCoaching} alt="VandrilCoaching" className="projects-img"/>
          <div className="overlay">
            <h2>VanDril Coaching</h2>
            <a href="https://github.com/tmitchellisaac/vandril_coaching" target="_blank" rel="noopener noreferrer" class="repo-link">Repo</a>
            <a href="https://vandril-movement-coaching.com/" target="_blank" rel="noopener noreferrer" class="repo-link">Live Site</a>
          </div>
        </div>
        <div className="project-card">
        <img src={PortfolioSite} alt="PortfolioSite" className="projects-img"/>
          <div className="overlay">
            <h2>My Portfolio</h2>
            <a href="https://github.com/tmitchellisaac/isaacs_portfolio" target="_blank" rel="noopener noreferrer" class="repo-link">Back End Repo</a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" class="repo-link">Live Site</a>
          </div>
        </div>
        <div className="project-card">
        <img src={ClinicalNet} alt="ClinicalNet" className="projects-img"/>
          <div className="overlay">
            <h2>Clinical Net Intern</h2>
            <a href="https://www.linkedin.com/in/tmitchellisaac/details/recommendations" target="_blank" rel="noopener noreferrer" class="repo-link">CEO/Founder Rec</a>
            <a href="https://trials.clinicalnet.com/" target="_blank" rel="noopener noreferrer" class="repo-link">Site</a>
            <a href="https://www.linkedin.com/company/clinical-net/posts/?feedView=all" target="_blank" rel="noopener noreferrer" class="repo-link">LinkedIn</a>
          </div>
        </div>
        <div className="project-card">
        <img src={ChickenTracker2} alt="ChickenTracker2.0" className="projects-img"/>
          <div className="overlay">
            <h2>Chicken Tracker 2.0</h2>
          <p>Coming Soon!</p>
          </div>
        </div>
      </div>
      <a href="https://www.github.com/tmitchellisaac" target="_blank" rel="noopener noreferrer" className="projects-btn"> 
        See More on GitHub
      </a>
    </section>
  );
}

export default Projects;
