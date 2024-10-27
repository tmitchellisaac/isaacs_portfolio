import React, { useState } from 'react';
//css
import './navbar.css';
//images
import logo from '../../assets/isaac-mitchell-high-resolution-logo-transparent.png'
import contactImg from '../../assets/contact.png'
import menu from '../../assets/burger-menu.png'
//packages
import { Link } from 'react-scroll'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
      <img src={logo} alt="Logo" className='logo'/>
      <div className='desktopMenu'>
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Skills</Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-75} duration={500} className='desktopMenuListItem'>Projects</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-250} duration={500} className='desktopMenuListItem'>Resume</Link>
      </div>
      <button className='desktopMenuBtn' onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
      }}>
        <img src={contactImg} alt="Contact Button" className="desktopMenuImg"/>Contact Me
      </button>


      <img src={menu} alt="Menu" className="ham-menu" onClick={() => setShowMenu(!showMenu)}/>
      <div className="nav-menu" style={{display: showMenu? 'flex':'none'}}>
        <Link to="intro" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setShowMenu(false)} className='ham-list-menu'>Home</Link>
        <Link to="skills" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)} className='ham-list-menu'>Skills</Link>
        <Link to="projects" spy={true} smooth={true} offset={-75} duration={500} onClick={() => setShowMenu(false)} className='ham-list-menu'>Projects</Link>
        <Link to="contact" spy={true} smooth={true} offset={-250} duration={500} onClick={() => setShowMenu(false)} className='ham-list-menu'>Resume</Link>
        <Link to="contact" spy={true} smooth={true} offset={-250} duration={500} onClick={() => setShowMenu(false)} className='ham-list-menu'>Contact</Link>
      </div>
    </nav>
  ); 
}

export default Navbar;
