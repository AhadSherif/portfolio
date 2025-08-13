import React from "react";
const projects = [
  {
    title: "Real-Time Chat App",
    desc: "MERN + Socket.IO. Auth, rooms, history.",
    live: "https://realtime-chatapp-j0cy.onrender.com",
    repo: "https://github.com/AhadSherif/RealTime-ChatApp",
  },
  {
    title: "E-commerce Cart",
    desc: "React + Redux cart flow, localStorage persist.",
    live: "#",
    repo: "https://github.com/AhadSherif/ecommerce",
  },
  {
    title: "Blog App",
    desc: "Node/Express API, JWT auth, image upload with multer/S3.",
    live: "#",
    repo: "https://github.com/AhadSherif/Blog-App",
  },
];
export default function Projects() {
  return (
    <section id="projects" className="section container">
      <h2>Projects</h2>
      <div className="projects-grid" style={{ marginTop: 12 }}>
        {projects.map((p) => (
          <div className="project" key={p.title}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
              }}
            >
              <div>
                <div style={{ fontWeight: 700 }}>{p.title}</div>
                <div className="meta">{p.desc}</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {p.live !== "#" && (
                  <a href={p.live} target="_blank">
                    Live
                  </a>
                )}
                <a href={p.repo} target="_blank">
                  Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
