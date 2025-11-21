import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById("submit-message");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // update the hash so users can copy the URL if they want
      history.replaceState(null, "", "#submit-message");
    } else {
      // fallback: navigate to the contact route
      navigate("/contact");
    }
  };

  return (
    <>
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-card">
            <h1 className="hero-title">Hi, I’m Reise Young</h1>

            <p className="hero-sub">
              Computer Science student at UC Irvine — I build full-stack apps, explore AI, and care about secure,
              maintainable software.
            </p>

            <div className="hero-ctas">
              <a href="/projects" className="btn primary">View Projects</a>
              <button onClick={scrollToContact} className="btn ghost">Contact Me</button>
            </div>
          </div>
        </div>

        <div className="hero-right" aria-hidden="true">
          <img src="/assets/Reise_Mug.jpeg" alt="Reise Young" className="illustration-img profile-photo-hero" />
        </div>
      </div>
    </section>

    {/* Features / boxes section below the hero content to add verticality (separate section) */}
    <section className="features-section" aria-label="Highlights">
      <div className="hero-features-inner">
        <Link to="/about" className="hero-box" aria-label="About Me">About Me</Link>
        <Link to="/projects" className="hero-box" aria-label="Projects">Projects</Link>
        <Link to="/skills" className="hero-box" aria-label="Skills">Skills</Link>
        <Link to="/contact" className="hero-box" aria-label="Contact">Contact</Link>
      </div>
    </section>

    {/* Submit a message section (anchored for smooth scroll) */}
    <section id="submit-message" className="submit-section" aria-label="Submit a message">
      <div className="submit-inner">
        <h2 className="submit-title">SUBMIT A MESSAGE</h2>

        <form className="submit-form" onSubmit={(e) => { e.preventDefault(); alert('Thanks — message handling not set up yet.'); }}>
          <label className="submit-label">NAME</label>
          <input className="submit-input" name="name" type="text" />

          <label className="submit-label">EMAIL</label>
          <input className="submit-input" name="email" type="email" />

          <label className="submit-label">PHONE</label>
          <input className="submit-input" name="phone" type="tel" />

          <label className="submit-label">MESSAGE</label>
          <textarea className="submit-textarea" name="message" rows={6} />

          <div style={{ marginTop: '1rem' }}>
            <button type="submit" className="btn primary">Send Message</button>
          </div>
        </form>
      </div>
    </section>
    </>
  );
}
