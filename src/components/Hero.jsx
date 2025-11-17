export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 bg-white">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-20">
        <div className="text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">Hi, I’m Reise Young</h1>

          <p className="text-gray-700 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
            Computer Science student at UC Irvine — I build full-stack apps,
            explore AI, and care about secure, maintainable software.
          </p>

          <div className="flex items-center gap-4">
            <a href="#projects" className="inline-block bg-black text-white font-medium px-6 py-3 rounded-md shadow-sm hover:shadow-lg transition">View Projects</a>
            <a href="#contact" className="inline-block border border-gray-300 text-gray-800 px-5 py-3 rounded-md hover:bg-gray-50 transition">Contact Me</a>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img src="/assets/react.svg" alt="Illustration" className="max-h-72 w-auto opacity-90" />
        </div>
      </div>
    </section>
  );
}
