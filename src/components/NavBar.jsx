
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const loc = useLocation();
  const path = loc.pathname || "/";

  function linkClass(to) {
    const base = "transition text-base font-medium";
    const active = path === to || (to === "/" && path === "/");
    return `${base} ${active ? "text-black font-semibold" : "text-gray-600 hover:text-black"}`;
  }

  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center">
        <div className="flex-shrink-0">
          <Link to="/" className="text-xl font-bold text-gray-900 tracking-tight">Reise Young</Link>
        </div>

        {/* Centered nav region that stretches and spaces links evenly */}
        <div className="flex-1">
          <div className="mx-auto w-full max-w-3xl">
            <nav className="flex justify-between">
              <Link to="/about" className={linkClass("/about")} aria-current={path === "/about" ? "page" : undefined}>About Me</Link>
              <Link to="/projects" className={linkClass("/projects")} aria-current={path === "/projects" ? "page" : undefined}>Projects</Link>
              <Link to="/skills" className={linkClass("/skills")} aria-current={path === "/skills" ? "page" : undefined}>Skills</Link>
              <Link to="/contact" className={linkClass("/contact")} aria-current={path === "/contact" ? "page" : undefined}>Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}
