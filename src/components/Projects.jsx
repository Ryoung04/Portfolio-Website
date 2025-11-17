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
  const modalRef = useRef(null);
  const lastFocusedRef = useRef(null);

  function openProject(p) {
    lastFocusedRef.current = document.activeElement;
    setSelected(p);
    // hide main content from screen readers
    const main = document.getElementById('main-content');
    if (main) main.setAttribute('aria-hidden', 'true');
  }

  function closeProject() {
    setSelected(null);
    const main = document.getElementById('main-content');
    if (main) main.removeAttribute('aria-hidden');
    // return focus to opener
    setTimeout(() => lastFocusedRef.current?.focus(), 0);
  }

  // close modal on Escape and trap Tab inside modal
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') closeProject();
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll('a, button, input, [tabindex]:not([tabindex="-1"])');
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    }
    if (selected) {
      document.addEventListener('keydown', onKey);
      // focus close button in modal
      setTimeout(() => modalRef.current?.querySelector('button')?.focus(), 0);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [selected]);

  return (
    <section id="projects" className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p) => (
          <article
            key={p.name}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transform hover:-translate-y-1 transition cursor-pointer reveal-child"
            onClick={() => openProject(p)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' ? openProject(p) : null)}
          >
            <div className="h-36 mb-4 rounded-md overflow-hidden bg-gray-800 flex items-center justify-center">
              <img src={p.img} alt={p.name} className="h-20 w-auto" loading="lazy" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">{p.name}</h3>
            <p className="text-gray-700 mb-2">{p.description}</p>
            <p className="text-sm text-gray-500 mb-4">{p.tech}</p>
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
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            className="relative bg-gray-900 rounded-lg max-w-3xl w-full p-6 z-10 modal"
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
                <img src={selected.img} alt={selected.name} className="h-32 w-auto" loading="lazy" />
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

