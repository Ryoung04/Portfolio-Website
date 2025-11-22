import React from "react";

export default function SkillsPage() {
  return (
    <div className="page-bg">
      <div className="page-content max-w-4xl mx-auto py-16 px-6">
        <div className="page-text">
          <h1 className="text-4xl font-bold mb-6">Skills</h1>

          <section className="skills-section">
            <div className="skills-category">
              <h3 className="skills-heading">Programming Languages</h3>
              <div className="skills-grid">
                <div className="skill-card"><div className="skill-icon">Py</div><div className="skill-label">Python</div></div>
                <div className="skill-card"><div className="skill-icon">Jv</div><div className="skill-label">Java</div></div>
                <div className="skill-card"><div className="skill-icon">C</div><div className="skill-label">C</div></div>
                <div className="skill-card"><div className="skill-icon">C++</div><div className="skill-label">C++</div></div>
                <div className="skill-card"><div className="skill-icon">JS</div><div className="skill-label">JavaScript</div></div>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="skills-heading">Frameworks & Libraries</h3>
              <div className="skills-grid">
                <div className="skill-card"><div className="skill-icon">R</div><div className="skill-label">React</div></div>
                <div className="skill-card"><div className="skill-icon">Nd</div><div className="skill-label">Node</div></div>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="skills-heading">Tools</h3>
              <div className="skills-grid">
                <div className="skill-card"><div className="skill-icon">G</div><div className="skill-label">Git</div></div>
                <div className="skill-card"><div className="skill-icon">SQL</div><div className="skill-label">SQL</div></div>
                <div className="skill-card"><div className="skill-icon">My</div><div className="skill-label">MySQL</div></div>
                <div className="skill-card"><div className="skill-icon">AWS</div><div className="skill-label">AWS</div></div>
                <div className="skill-card"><div className="skill-icon">XL</div><div className="skill-label">Excel</div></div>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="skills-heading">Concepts</h3>
              <div className="skills-grid">
                <div className="skill-card"><div className="skill-icon">FS</div><div className="skill-label">Fullstack Development</div></div>
                <div className="skill-card"><div className="skill-icon">FE</div><div className="skill-label">Frontend Development</div></div>
                <div className="skill-card"><div className="skill-icon">SE</div><div className="skill-label">Software Engineering</div></div>
              </div>
            </div>
          </section>

          <div className="mt-8">
            <h3 className="font-semibold mb-2">Certificates</h3>
            <p className="text-gray-700">Google Cybersecurity Professional Certificate — hands-on labs in SOC workflows, incident response, SIEM basics, Linux, SQL, and Python.</p>
          </div>
        </div>
        {/* right side reserved for charts or images */}
      </div>
    </div>
  );
}
