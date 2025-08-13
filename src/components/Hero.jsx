import React from "react";
export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-left">
        <h1>
          Hi, I’m Ahad —{" "}
          <span style={{ color: "#00aaff" }}>MERN Stack Developer</span>
        </h1>
        <p>
          I build production-focused web applications using React, Node, Express
          and MongoDB. I enjoy building real-time features with Socket.IO,
          secure JWT authentication, and deploying apps to AWS.
        </p>
        <div className="hero-cta">
          <a className="btn" href="mailto:ahadsherif40@gmail.com">
            Contact Me
          </a>
          <a
            className="btn-outline"
            href="https://github.com/AhadSherif/my-resume/raw/main/Ahadullah_Sherif_Resume.pdf"
            target="_blank"
          >
            Download Resume
          </a>
        </div>
      </div>
      <aside className="profile-card">
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <div className="avatar">AS</div>
          <div>
            <div style={{ fontWeight: 700 }}>Ahadullah Sherif</div>
            <div style={{ color: "#9aa4b2", fontSize: 13 }}>
              MCA • MERN Developer • Chennai
            </div>
          </div>
        </div>
        <div style={{ marginTop: 14, color: "#9aa4b2", fontSize: 14 }}>
          <div>Experience: Junior MERN Developer (Agraga)</div>
          <div style={{ marginTop: 8 }}>
            Open to internships & junior roles. Available immediately.
          </div>
        </div>
      </aside>
    </section>
  );
}
