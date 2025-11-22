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
                <div className="skill-card"><div className="skill-icon">Bsh</div><div className="skill-label">Bash</div></div>
                <div className="skill-card"><div className="skill-icon">C#</div><div className="skill-label">C#</div></div>
                <div className="skill-card"><div className="skill-icon">Jv</div><div className="skill-label">Java</div></div>
                <div className="skill-card"><div className="skill-icon">JS</div><div className="skill-label">JavaScript</div></div>
                <div className="skill-card"><div className="skill-icon">Lu</div><div className="skill-label">Lua</div></div>
                <div className="skill-card"><div className="skill-icon">Py</div><div className="skill-label">Python</div></div>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="skills-heading">Front-End</h3>
              <div className="skills-grid">
                <div className="skill-card"><div className="skill-icon">Bs</div><div className="skill-label">Bootstrap</div></div>
                <div className="skill-card"><div className="skill-icon">CSS</div><div className="skill-label">CSS</div></div>
                <div className="skill-card"><div className="skill-icon">HTML</div><div className="skill-label">HTML</div></div>
                <div className="skill-card"><div className="skill-icon">R</div><div className="skill-label">React</div></div>
                <div className="skill-card"><div className="skill-icon">Tw</div><div className="skill-label">Tailwind CSS</div></div>
                <div className="skill-card"><div className="skill-icon">WP</div><div className="skill-label">WordPress</div></div>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="skills-heading">Back-End and Databases</h3>
              <div className="skills-grid">
                <div className="skill-card"><div className="skill-icon">Dj</div><div className="skill-label">Django</div></div>
                <div className="skill-card"><div className="skill-icon">Fl</div><div className="skill-label">Flask</div></div>
                <div className="skill-card"><div className="skill-icon">Mg</div><div className="skill-label">MongoDB</div></div>
                <div className="skill-card"><div className="skill-icon">Node</div><div className="skill-label">Node.js</div></div>
                <div className="skill-card"><div className="skill-icon">Sp</div><div className="skill-label">Spring</div></div>
                <div className="skill-card"><div className="skill-icon">SQL</div><div className="skill-label">SQL</div></div>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="skills-heading">Other Tech Skills</h3>
              <div className="skills-grid">
                <div className="skill-card"><div className="skill-icon">AWS</div><div className="skill-label">AWS</div></div>
                <div className="skill-card"><div className="skill-icon">G.I.M.P</div><div className="skill-label">G.I.M.P</div></div>
                <div className="skill-card"><div className="skill-icon">Ink</div><div className="skill-label">Inkscape</div></div>
                <div className="skill-card"><div className="skill-icon">KD</div><div className="skill-label">KDENLive</div></div>
                <div className="skill-card"><div className="skill-icon">Tux</div><div className="skill-label">Linux</div></div>
                <div className="skill-card"><div className="skill-icon">Net</div><div className="skill-label">Netlify</div></div>
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
