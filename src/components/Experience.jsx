import React from 'react';
const exp = [
  {role:'Junior MERN Stack Developer', company:'Agraga', duration:'Jul 2024 – Jan 2025', desc:'Worked on logistics modules; integrated AWS S3 for document uploads.'},
  {role:'Frontend Developer (React)', company:'Creativano', duration:'Dec 2023 – Jun 2024', desc:'Built reusable UI components and improved responsiveness.'},
  {role:'Freelance MERN Developer', company:'Self', duration:'Feb 2025 – Jun 2025', desc:'Personal projects and upskilling with TypeScript and Next.js.'}
];
export default function Experience(){
  return (
    <section id="experience" className="section container">
      <h2>Experience</h2>
      <div className="card timeline" style={{marginTop:12}}>
        {exp.map(e => (
          <div className="job" key={e.role}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>
                <div style={{fontWeight:700}}>{e.role}</div>
                <div style={{color:'#9aa4b2',fontSize:13}}>{e.company}</div>
              </div>
              <div style={{color:'#9aa4b2',fontSize:13}}>{e.duration}</div>
            </div>
            <div style={{marginTop:8,color:'#cfe9ff'}}>{e.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}