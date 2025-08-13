import React from 'react';
const skills = ["JavaScript (ES6+)","React","Redux","Next.js","Node.js","Express","MongoDB","Socket.IO","JWT","AWS S3","HTML/CSS","Git"];
export default function Skills(){
  return (
    <section id="skills" className="section container">
      <h2>Skills</h2>
      <div className="card skills-grid" style={{marginTop:12}}>
        {skills.map(s => <div key={s} className="skill">{s}</div>)}
      </div>
    </section>
  );
}