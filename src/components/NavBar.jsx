
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const loc = useLocation();
  const path = loc.pathname || "/";

  function linkClass(to) {
    const base = "transition text-base font-medium no-underline visited:text-black";
    const active = path === to || (to === "/" && path === "/");
    // Use black for both active and inactive; active becomes bolder
    return `${base} ${active ? "text-black font-semibold" : "text-black/80 hover:text-black"}`;
  }

  return (
    <nav className="site-nav">
      <div className="nav-container">
        <Link to="/" className="site-title">Reise Young</Link>

        <div className="nav-links" role="navigation" aria-label="Primary">
          <Link to="/about" className={linkClass("/about")} aria-current={path === "/about" ? "page" : undefined}>About Me</Link>
          <Link to="/projects" className={linkClass("/projects")} aria-current={path === "/projects" ? "page" : undefined}>Projects</Link>
          <Link to="/skills" className={linkClass("/skills")} aria-current={path === "/skills" ? "page" : undefined}>Skills</Link>
          <Link to="/contact" className={linkClass("/contact")} aria-current={path === "/contact" ? "page" : undefined}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
