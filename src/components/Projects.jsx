export default function Projects() {
  const projects = [
    {
      name: "2D Graphics Modeler",
      description: "Qt-based graphics program with shape inheritance and object rendering.",
      tech: "C++, Qt",
      link: "https://github.com/",
    },
    {
      name: "College Tour Planner",
      description: "Pathfinding-based campus planner with souvenirs and recursion.",
      tech: "Java, OOP, Graphs",
      link: "https://github.com/",
    },
    {
      name: "Personal Portfolio",
      description: "React + Vite + Tailwind website to showcase skills and projects.",
      tech: "React, Tailwind, Vite",
      link: "https://github.com/",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.name}
            className="bg-gradient-to-b from-gray-900/80 to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">{p.name}</h3>
            <p className="text-gray-400 mb-2">{p.description}</p>
            <p className="text-sm text-blue-400 mb-4">{p.tech}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-2 text-blue-400 hover:underline"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
