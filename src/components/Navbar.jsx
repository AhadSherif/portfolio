import React from 'react';
export default function Navbar(){
  return (
    <div className="navbar">
      <div className="nav-inner container">
        <div className="brand">Ahadullah <span style={{color:'#00aaff'}}>Sherif</span></div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
}