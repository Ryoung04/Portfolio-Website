export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800/80 backdrop-blur-md z-50 shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-blue-400">
          Reise Young
        </a>

        <div className="space-x-6">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}
