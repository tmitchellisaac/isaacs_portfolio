import React from 'react';
//css
import './navbar.css';
//images
import logo from '../../assets/isaac-mitchell-high-resolution-logo-transparent.png'
import contactImg from '../../assets/contact.png'
//packages
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt="Logo" className='logo'/>
      <div className='desktopMenu'>
        <Link className='desktopMenuListItem'>Home</Link>
        <Link className='desktopMenuListItem'>Clients/Skills</Link>
        <Link className='desktopMenuListItem'>About</Link>
        <Link className='desktopMenuListItem'>Portfolio</Link>
      </div>
      <button className='desktopMenuBtn'>
        <img src={contactImg} alt="Contact Button" className="desktopMenuImg"/>Contact Me
      </button>
    </nav>
  );
}

export default Navbar;
