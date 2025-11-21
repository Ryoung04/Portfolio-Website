import React from "react";

export default function SkillsPage() {
  return (
    <div className="page-bg">
      <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6">Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Programming Languages</h3>
          <p className="text-gray-700">Python, Java, C, C++, JavaScript</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Frameworks & Libraries</h3>
          <p className="text-gray-700">React, Node, Qt, Vercel</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Tools</h3>
          <p className="text-gray-700">Git, SQL / MySQL, AWS, Excel</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Concepts</h3>
          <p className="text-gray-700">Fullstack Development, Frontend Development, Software Engineering</p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-semibold mb-2">Certificates</h3>
        <p className="text-gray-700">Google Cybersecurity Professional Certificate — hands-on labs in SOC workflows, incident response, SIEM basics, Linux, SQL, and Python.</p>
      </div>
      </div>
    </div>
  );
}
