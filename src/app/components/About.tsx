const skills = [
    "Python", "JavaScript", "C++", "Java", "C",
    "HTML", "CSS", "React", "Node.js",
    "MySQL", "MongoDB",
    "Git", "VS Code", "APIs", "Agile"
  ];
  
  export default function About() {
    return (
      <section id="about" className="max-w-screen-xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">About</h2>
        <p className="mt-4 text-gray-700">
          I enjoy building efficient, user‑focused applications and mentoring others. I care about clean architecture,
          readable code, and measurable impact. My experience in tutoring has taught me the importance of clear
          communication and breaking down complex problems into manageable solutions.
        </p>
        <h3 className="mt-8 text-lg font-semibold text-gray-900">Skills</h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {skills.map(skill => (
            <li key={skill} className="rounded-md border border-gray-200 px-3 py-1.5 text-sm text-gray-800 bg-white">
              {skill}
            </li>
          ))}
        </ul>
      </section>
    );
  }