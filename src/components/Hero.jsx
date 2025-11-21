import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
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
              <a href="/contact" className="btn ghost">Contact Me</a>
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
    </>
  );
}
