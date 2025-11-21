import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById("submit-message");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", "#submit-message");
      // focus the first input after a short delay so the user can start typing
      setTimeout(() => {
        const first = el.querySelector('input, textarea, button');
        if (first) first.focus();
      }, 400);
    } else {
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

          <div className="submit-left">
            {/* Accessible form with client-side validation and Formspree wiring (configure VITE_FORMSPREE_ENDPOINT) */}
            <FormSpreeContact />
          </div>

          <aside className="contact-details" aria-label="Contact details">
            <div className="contact-inner">
              <h3 className="contact-name">Reise Young</h3>

              <div className="contact-item">
                <span className="contact-label">PHONE</span>
                <a href="tel:+19492883286" className="contact-value">(949) 288-3286</a>
              </div>

              <div className="contact-item">
                <span className="contact-label">EMAIL</span>
                <a href="mailto:reiseyoung@gmail.com" className="contact-value">reiseyoung@gmail.com</a>
              </div>

              <div className="contact-socials" aria-hidden="false">
                <a href="https://www.instagram.com/reise.young/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.2"/><path d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/reise-young" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.2"/><path d="M8.8 11.5v6.5M8.8 8.5v.1M12.2 8.5v.1c1.8 0 2.8 1 2.8 2.6v4.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
                <a href="https://github.com/Ryoung04" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.2"/><path d="M9 17c-3 1-4-1-4-1v-1c0-1 .4-1.6 1-2m7 4s-.2-1-.9-1.8c1.8-.2 3.7-.9 3.7-4 0-.9-.3-1.6-.8-2.1.1-.2.4-1-.1-2.1 0 0-.7-.2-2.3 1a7.9 7.9 0 0 0-4.2 0C8.3 6 7.6 6.2 7.6 6.2c-.5 1.1-.2 1.9-.1 2.1-.5.5-.8 1.2-.8 2.1 0 3.1 1.8 3.8 3.7 4-.6.5-.8 1.2-.9 1.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function FormSpreeContact() {
  const [values, setValues] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const statusRef = useRef(null);

  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || ""; // set in Vite env or leave empty

  const validate = () => {
    const e = {};
    if (!values.name.trim()) e.name = "Please enter your name.";
    if (!values.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) e.email = "Please enter a valid email address.";
    if (!values.message.trim()) e.message = "Please enter a message.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length) {
      const firstError = document.querySelector('#submit-message .submit-form .error-text');
      if (firstError) firstError.focus();
      return;
    }

    setStatus("sending");

    // If endpoint is configured, POST to Formspree
    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });
        if (res.ok) {
          setStatus("success");
          setValues({ name: "", email: "", phone: "", message: "" });
          statusRef.current && statusRef.current.focus();
        } else {
          const text = await res.text();
          setStatus("error");
          console.error('Form submit error', res.status, text);
        }
      } catch (err) {
        console.error(err);
        setStatus("error");
      }
    } else {
      // Fallback: open user's email client with prefilled body
      const subject = encodeURIComponent("Website message from " + values.name);
      const body = encodeURIComponent(`Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\n\n${values.message}`);
      window.location.href = `mailto:reiseyoung@gmail.com?subject=${subject}&body=${body}`;
      setStatus("success");
    }
  };

  return (
    <div>
      <form className="submit-form" onSubmit={handleSubmit} noValidate>
        <div>
          <label className="submit-label" htmlFor="contact-name">NAME</label>
          <input id="contact-name" aria-required="true" aria-invalid={errors.name ? "true" : "false"} aria-describedby={errors.name ? "name-error" : undefined} className="submit-input" name="name" type="text" value={values.name} onChange={handleChange} />
          {errors.name && <div tabIndex={-1} id="name-error" className="error-text" role="alert">{errors.name}</div>}
        </div>

        <div>
          <label className="submit-label" htmlFor="contact-email">EMAIL</label>
          <input id="contact-email" aria-required="true" aria-invalid={errors.email ? "true" : "false"} aria-describedby={errors.email ? "email-error" : undefined} className="submit-input" name="email" type="email" value={values.email} onChange={handleChange} />
          {errors.email && <div tabIndex={-1} id="email-error" className="error-text" role="alert">{errors.email}</div>}
        </div>

        <div>
          <label className="submit-label" htmlFor="contact-phone">PHONE</label>
          <input id="contact-phone" className="submit-input" name="phone" type="tel" value={values.phone} onChange={handleChange} />
        </div>

        <div>
          <label className="submit-label" htmlFor="contact-message">MESSAGE</label>
          <textarea id="contact-message" aria-required="true" aria-invalid={errors.message ? "true" : "false"} aria-describedby={errors.message ? "message-error" : undefined} className="submit-textarea" name="message" rows={6} value={values.message} onChange={handleChange} />
          {errors.message && <div tabIndex={-1} id="message-error" className="error-text" role="alert">{errors.message}</div>}
        </div>

        <div style={{ marginTop: '1rem' }}>
          <button type="submit" className="btn primary" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send Message'}</button>
        </div>
      </form>

      <div aria-live="polite" aria-atomic="true" tabIndex={-1} ref={statusRef} className="form-status">
        {status === 'success' && <div className="success-text" role="status">Thanks — your message was sent.</div>}
        {status === 'error' && <div className="error-text" role="alert">Sorry — we couldn't send your message. Try again later or email reiseyoung@gmail.com.</div>}
      </div>
    </div>
  );
}
