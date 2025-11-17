export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-6">
      
      <h1 className="text-5xl font-bold mb-4 text-center">
        Reise Young
      </h1>

      <h2 className="text-2xl text-blue-400 font-semibold mb-4 text-center">
        Computer Science @ UC Irvine • Aspiring Software Engineer
      </h2>

      <p className="max-w-xl text-center text-gray-300 mb-8">
        I’m a CS student passionate about building modern applications,
        exploring software engineering, and learning full-stack development.
      </p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="border border-gray-500 hover:bg-gray-800 px-6 py-3 rounded-lg font-medium"
        >
          Contact Me
        </a>
      </div>

    </div>
  );
}
