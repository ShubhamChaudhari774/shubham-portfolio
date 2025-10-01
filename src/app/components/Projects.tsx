type Project = {
    title: string;
    summary: string;
    stack: string[];
    links?: { label: string; href: string }[];
  };
  
  const projects: Project[] = [
    {
      title: "Book Manager (JavaFX + Google Books API)",
      summary:
        "Desktop app to manage personal book collections with CRUD operations. Integrated Google Books API to search and fetch online book details. Implemented MVC architecture with intuitive UI for seamless user experience.",
      stack: ["Java", "JavaFX", "Google Books API", "MVC"],
      links: [],
    },
    {
      title: "Personal Financial Manager",
      summary:
        "React-based expense tracking application with AI-powered cost optimization suggestions. Helps users identify spending patterns and provides actionable recommendations to reduce expenses by 10-20%.",
      stack: ["React", "TypeScript", "Node.js", "AI Integration"],
      links: [],
    },
  ];
  
  export default function Projects() {
    return (
      <section id="projects" className="max-w-screen-xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Projects</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <article key={project.title} className="rounded-lg border border-gray-200 p-5 bg-white hover:shadow-sm transition">
              <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
              <p className="mt-2 text-gray-700">{project.summary}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.stack.map(tech => (
                  <li key={tech} className="text-xs bg-gray-100 text-gray-800 rounded px-2 py-1 border border-gray-200">
                    {tech}
                  </li>
                ))}
              </ul>
              {project.links && project.links.length > 0 && (
                <div className="mt-4 flex gap-3">
                  {project.links.map(link => (
                    <a 
                      key={link.href} 
                      href={link.href} 
                      target="_blank" 
                      className="text-sm text-gray-800 underline hover:text-black"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    );
  }