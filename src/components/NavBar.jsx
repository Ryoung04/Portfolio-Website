export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/70 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold text-white">Reise Young</a>

        <div className="hidden md:flex items-center space-x-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        <div className="md:hidden text-gray-300">☰</div>
      </div>
    </nav>
  );
}
