export default function Skills() {
  const skills = [
    "Java", "Python", "C++", "JavaScript", "React",
    "Tailwind", "Git", "Linux", "Node.js"
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-gray-800 px-4 py-2 rounded-full text-gray-200 border border-gray-700 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
