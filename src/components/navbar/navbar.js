import React, { useState } from 'react';
//css
import './navbar.css';
//images
import logo1 from '../../assets/isaac-logo-one.png'
import contactImg from '../../assets/contact.png'
import menu from '../../assets/blue-burger-copy.png'
//packages
import { Link } from 'react-scroll'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
      <img src={logo1} alt="Logo" className='logo'/>
      <div className='desktop-menu'>
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className='desktop-menu-list-item'>Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className='desktop-menu-list-item'>Skills</Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-75} duration={500} className='desktop-menu-list-item'>Projects</Link>
        <Link activeClass="active" to="contact-page" spy={true} smooth={true} offset={-100} duration={500} className='desktop-menu-list-item'>Resume</Link>
      </div>
      <button className='desktop-menu-btn' onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
      }}>
        <img src={contactImg} alt="Contact Button" className="desktop-menu-img"/>Contact Me
      </button>

      <img src={menu} alt="Menu" className="ham-menu" onClick={() => setShowMenu(!showMenu)}/>
      <div className="nav-menu" style={{display: showMenu? 'flex':'none'}}>
        <Link to="intro" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setShowMenu(false)} className='ham-list-menu'>Home</Link>
        <Link to="skills" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)} className='ham-list-menu'>Skills</Link>
        <Link to="projects" spy={true} smooth={true} offset={-75} duration={500} onClick={() => setShowMenu(false)} className='ham-list-menu'>Projects</Link>
        <Link to="contact-page" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setShowMenu(false)} className='ham-list-menu'>Resume</Link>
        <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)} className='ham-list-menu'>Contact</Link>
      </div>
    </nav>
  ) 
}

export default Navbar;
