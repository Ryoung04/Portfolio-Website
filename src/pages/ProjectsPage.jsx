import React from "react";

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">College Tour Planner</h2>
        <p className="text-gray-700 mt-2">Pathfinding-based campus planner with souvenirs and recursion. Designed an interactive planner using Qt with efficient route calculations, souvenir tracking, and customizable campus visits. Implemented dynamic data structures to manage campus and souvenir data with real-time updates and administrative controls.</p>
        <p className="mt-2 text-sm text-gray-600"><strong>Role:</strong> Product Owner — collaborated on backlog and project management via GitHub.</p>
        <p className="mt-1 text-sm text-gray-600"><strong>Tech:</strong> Python, Java, C, C++, JavaScript (where applicable)</p>
        <a className="inline-block mt-3 text-sm text-blue-600" href="#">View on GitHub →</a>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">2D Graphics Modeler</h2>
        <p className="text-gray-700 mt-2">Qt-based graphics program implementing a rendering engine using QPainter to draw basic shapes (lines, polygons, ellipses). Designed a sortable interface that allows ordering shapes by ID, area, perimeter, or attributes with real-time ascending/descending toggling.</p>
        <p className="mt-2 text-sm text-gray-600"><strong>Role:</strong> Scrum Master — led short sprints and coordinated development tasks.</p>
        <p className="mt-1 text-sm text-gray-600"><strong>Tech:</strong> C++, Qt</p>
        <a className="inline-block mt-3 text-sm text-blue-600" href="#">View on GitHub →</a>
      </section>

      <p className="text-sm text-gray-500">More projects and details coming soon. If you'd like specific links or images for a project, send them and I'll add gallery cards with screenshots and external links.</p>
    </div>
  );
}
