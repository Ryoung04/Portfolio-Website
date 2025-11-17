import { useState, useEffect } from 'react'

export default function Projects() {
  const projects = [
    {
      name: "2D Graphics Modeler",
      description: "Qt-based graphics program with shape inheritance and object rendering.",
      tech: "C++, Qt",
      link: "https://github.com/",
      img: '/assets/react.svg',
    },
    {
      name: "College Tour Planner",
      description: "Pathfinding-based campus planner with souvenirs and recursion.",
      tech: "Java, OOP, Graphs",
      link: "https://github.com/",
      img: '/assets/react.svg',
    },
    {
      name: "Personal Portfolio",
      description: "React + Vite + Tailwind website to showcase skills and projects.",
      tech: "React, Tailwind, Vite",
      link: "https://github.com/",
      img: '/assets/react.svg',
    },
  ];

  const [selected, setSelected] = useState(null);

  function openProject(p) {
    setSelected(p);
  }

  function closeProject() {
    setSelected(null);
  }

  // close modal on Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') closeProject();
    }
    if (selected) {
      document.addEventListener('keydown', onKey);
    }
    return () => document.removeEventListener('keydown', onKey);
  }, [selected]);

  return (
    <section id="projects" className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p) => (
          <article
            key={p.name}
            className="bg-gradient-to-b from-gray-900/80 to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition cursor-pointer"
            onClick={() => openProject(p)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' ? openProject(p) : null)}
          >
            <div className="h-36 mb-4 rounded-md overflow-hidden bg-gray-800 flex items-center justify-center">
              <img src={p.img} alt={p.name} className="h-20 w-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">{p.name}</h3>
            <p className="text-gray-400 mb-2">{p.description}</p>
            <p className="text-sm text-blue-400 mb-4">{p.tech}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-2 text-blue-400 hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              View on GitHub →
            </a>
          </article>
        ))}
      </div>

      {/* Project modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={closeProject} />
          <div
            role="dialog"
            aria-modal="true"
            className="relative bg-gray-900 rounded-lg max-w-3xl w-full p-6 z-10"
          >
            <button
              className="absolute top-4 right-4 text-gray-300"
              onClick={closeProject}
              aria-label="Close project details"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3 flex items-center justify-center bg-gray-800 rounded-md p-4">
                <img src={selected.img} alt={selected.name} className="h-32 w-auto" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{selected.name}</h3>
                <p className="text-gray-300 mb-4">{selected.description}</p>
                <p className="text-sm text-blue-400 mb-4">{selected.tech}</p>
                <a href={selected.link} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">Open repository</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

