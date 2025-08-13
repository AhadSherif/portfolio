import React from 'react';
export default function Footer(){
  return (
    <footer>
      <div className="container">
        © {new Date().getFullYear()} Ahadullah Sherif — MERN Stack Developer
      </div>
    </footer>
  );
}