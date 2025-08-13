import React, { useState } from "react";
export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="section container">
      <h2>Contact</h2>
      <div className="contact-grid" style={{ marginTop: 12 }}>
        <div className="card">
          <h3>Get in touch</h3>
          <p style={{ color: "#9aa4b2" }}>
            Email me at{" "}
            <a href="mailto:ahadsherif40@gmail.com">ahadsherif40@gmail.com</a>{" "}
            or call +91 93608 93659
          </p>
          <div style={{ marginTop: 12 }}>
            <div style={{ fontSize: 13, color: "#9aa4b2" }}>Location</div>
            <div>Chennai, Tamil Nadu</div>
          </div>
        </div>
        <div className="card form">
          {!sent ? (
            <form
              action="https://formspree.io/f/mldlzvle"
              method="POST"
              onSubmit={() => setSent(true)}
            >
              <input name="name" placeholder="Your name" required />
              <input name="email" type="email" placeholder="Email" required />
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                required
              />
              <button className="btn" type="submit">
                Send Message
              </button>
            </form>
          ) : (
            <div style={{ color: "#7bffdf" }}>
              Thanks — I will get back to you soon.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
