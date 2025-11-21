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

        {/* Accessible form with client-side validation and Formspree wiring (configure VITE_FORMSPREE_ENDPOINT) */}
        <FormSpreeContact />
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
        {!endpoint && status !== 'sending' && <div className="hint-text">Note: to send messages without opening your email client, set the environment variable <code>VITE_FORMSPREE_ENDPOINT</code> to your Formspree endpoint.</div>}
      </div>
    </div>
  );
}
