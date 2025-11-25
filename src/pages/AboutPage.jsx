import React from "react";

export default function AboutPage() {
  return (
    <div className="page-bg">
      <div className="page-content max-w-5xl mx-auto py-16 px-6">
        <div className="page-text">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>

          <p className="text-lg text-gray-800 mb-4">
            I'm Reise Young, a Computer Science student at the University of California, Irvine focused on building modern, scalable applications. I enjoy exploring AI, cybersecurity, backend development, and front-end design.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Education</h2>
          <div className="mb-4 text-gray-700">
            <strong>University of California, Irvine</strong> — Bachelor of Science, Computer Science
            <div>Expected Graduation: June 2027</div>
            <div className="mt-1">Campuswide Honors Collegium (selective honors program for top ~3% of undergraduates)</div>
            <div className="mt-1">Relevant coursework: Data Structures & Algorithms, Boolean Logic / Discrete Structures, Calculus I & II</div>
          </div>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Experience</h2>
          <div className="mb-4">
            <h3 className="font-medium">Stephanie Young Group — Realtor Assistant (2021 – Present)</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Provide front-line technical and customer support for digital tools (online listings, e-signature platforms, scheduling apps) and guide non-technical users.</li>
              <li>Manage client/property data in shared spreadsheets and cloud folders to improve information retrieval and reduce document errors.</li>
              <li>Coordinate email, calendars, and follow-up reminders to ensure clear communication and consistent turnaround for client interactions and open houses.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium">MyCentrality — Cybersecurity Intern (2023 – 2024)</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Reviewed program schematics and proposed alternative, cost-effective plan modifications for customers.</li>
              <li>Analyzed customer usage patterns and assisted with troubleshooting and recommending plans that fit technical requirements.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Certificates</h2>
          <div className="text-gray-700">
            <strong>Google Cybersecurity Professional Certificate</strong> — Hands-on labs in SOC workflows, Incident Response, SIEM Basics, Linux, SQL, and Python.
          </div>
        </div>
        {/* right side available for images: add <div className="page-side">...</div> when needed */}
      </div>
    </div>
  );
}
