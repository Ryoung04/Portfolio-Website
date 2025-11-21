
import { useLocation, useNavigate, Link } from "react-router-dom";

export default function NavBar() {
  const loc = useLocation();
  const navigate = useNavigate();
  const path = loc.pathname || "/";

  function linkClass(id) {
    const base = "transition text-base font-medium no-underline visited:text-black";
    const active = (loc.pathname === "/" && loc.hash === `#${id}`) || (loc.pathname === `/${id}`);
    return `${base} ${active ? "text-black font-semibold" : "text-black/80 hover:text-black"}`;
  }

  const handleNavClick = (e, id) => {
    e.preventDefault();
    // if we're not on the home route, navigate there first
    if (loc.pathname !== "/") {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', `#${id}`);
      }, 220);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <nav className="site-nav">
      <div className="nav-container">
        <Link to="/" className="site-title">Reise Young</Link>

        <div className="nav-links" role="navigation" aria-label="Primary">
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className={linkClass('about')}>About Me</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className={linkClass('projects')}>Projects</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className={linkClass('skills')}>Skills</a>
          <a href="#submit-message" onClick={(e) => handleNavClick(e, 'submit-message')} className={linkClass('submit-message')}>Contact</a>
        </div>
        
        {/* Resume button: opens resume in a new tab so users can preview or download */}
        <div className="ml-6">
          <a href="/assets/Reise_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn primary">Resume</a>
        </div>
      </div>
    </nav>
  );
}
