import React from 'react';
export default function About(){
  return (
    <section id="about" className="section container">
      <h2>About Me</h2>
      <div className="card" style={{display:'flex',gap:18,alignItems:'center',flexWrap:'wrap'}}>
        <div style={{flex:'0 0 160px'}}>
          <div style={{width:140,height:140,borderRadius:12,background:'linear-gradient(135deg,#00aaff,#7c6bff)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,color:'#011'}}>AS</div>
        </div>
        <div style={{flex:1}}>
          <p style={{color:'#cfe9ff'}}>I am a MERN stack developer with hands-on experience building full-stack web applications. I focus on building secure APIs, responsive frontends, and real-time features. I like writing clean code and improving app performance.</p>
          <p style={{marginTop:12,color:'#9aa4b2'}}>Technologies I use: React, Redux, Node.js, Express, MongoDB, Socket.IO, JWT, AWS S3.</p>
        </div>
      </div>
    </section>
  );
}