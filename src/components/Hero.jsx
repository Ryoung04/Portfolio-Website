export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-6 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800"
    >
      <div className="max-w-4xl mx-auto py-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
          Hi, I’m Reise Young
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
          Computer Science student at UC Irvine — I build full-stack apps,
          explore AI, and care about secure, maintainable software.
        </p>

        <div className="flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-md transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="inline-block border border-gray-700 text-gray-200 px-5 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
