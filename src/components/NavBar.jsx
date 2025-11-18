
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div>
          <Link to="/" className="text-xl font-bold text-gray-900 tracking-tight">Reise Young</Link>
        </div>
        <div className="flex space-x-10 text-base font-medium">
          <Link to="/about" className="hover:text-black transition">About Me</Link>
          <Link to="/projects" className="hover:text-black transition">Projects</Link>
          <Link to="/skills" className="hover:text-black transition">Skills</Link>
          <Link to="/contact" className="hover:text-black transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
