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
                <div className="skill-card brand-python">
                  <img className="skill-svg" src="/assets/icons/python.svg" alt="Python icon" draggable="false" />
                  <div className="skill-label">Python</div>
                </div>
                <div className="skill-card brand-java">
                  <img className="skill-svg" src="/assets/icons/java.svg" alt="Java icon" draggable="false" />
                  <div className="skill-label">Java</div>
                </div>
                <div className="skill-card brand-c">
                  <img className="skill-svg" src="/assets/icons/c.svg" alt="C icon" draggable="false" />
                  <div className="skill-label">C</div>
                </div>
                <div className="skill-card brand-cpp">
                  <img className="skill-svg" src="/assets/icons/cpp.svg" alt="C++ icon" draggable="false" />
                  <div className="skill-label">C++</div>
                </div>
                <div className="skill-card brand-javascript">
                  <img className="skill-svg" src="/assets/icons/javascript.svg" alt="JavaScript icon" draggable="false" />
                  <div className="skill-label">JavaScript</div>
                </div>
                <div className="skill-card brand-css">
                  <img className="skill-svg" src="/assets/icons/css.svg" alt="CSS icon" draggable="false" />
                  <div className="skill-label">CSS</div>
                </div>
                <div className="skill-card brand-html">
                  <img className="skill-svg" src="/assets/icons/html.svg" alt="HTML icon" draggable="false" />
                  <div className="skill-label">HTML</div>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="skills-heading">Frameworks & Libraries</h3>
              <div className="skills-grid">
                <div className="skill-card brand-react">
                  <img className="skill-svg" src="/assets/icons/react.svg" alt="React icon" draggable="false" />
                  <div className="skill-label">React</div>
                </div>
                <div className="skill-card brand-node">
                  <img className="skill-svg" src="/assets/icons/node.svg" alt="Node icon" draggable="false" />
                  <div className="skill-label">Node</div>
                </div>
                <div className="skill-card brand-vercel">
                  <img className="skill-svg" src="/assets/icons/vercel.svg" alt="Vercel icon" draggable="false" />
                  <div className="skill-label">Vercel</div>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="skills-heading">Tools</h3>
              <div className="skills-grid">
                <div className="skill-card brand-git">
                  <img className="skill-svg" src="/assets/icons/git.svg" alt="Git icon" draggable="false" />
                  <div className="skill-label">Git</div>
                </div>
                <div className="skill-card brand-sql">
                  <img className="skill-svg" src="/assets/icons/sql.svg" alt="SQL icon" draggable="false" />
                  <div className="skill-label">SQL</div>
                </div>
                <div className="skill-card brand-mysql">
                  <img className="skill-svg" src="/assets/icons/mysql.svg" alt="MySQL icon" draggable="false" />
                  <div className="skill-label">MySQL</div>
                </div>
                <div className="skill-card brand-aws">
                  <img className="skill-svg" src="/assets/icons/aws.svg" alt="AWS icon" draggable="false" />
                  <div className="skill-label">AWS</div>
                </div>
                <div className="skill-card brand-excel">
                  <img className="skill-svg" src="/assets/icons/excel.svg" alt="Excel icon" draggable="false" />
                  <div className="skill-label">Excel</div>
                </div>
                <div className="skill-card brand-wordpress">
                  <img className="skill-svg" src="/assets/icons/wordpress.svg" alt="WordPress icon" draggable="false" />
                  <div className="skill-label">WordPress</div>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="skills-heading">Concepts</h3>
              <div className="skills-grid">
                <div className="skill-card">
                  <div className="skill-icon">FS</div>
                  <div className="skill-label">Fullstack Development</div>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">FE</div>
                  <div className="skill-label">Frontend Development</div>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">SE</div>
                  <div className="skill-label">Software Engineering</div>
                </div>
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
