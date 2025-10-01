"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  summary: string;
  stack: string[];
  links?: { label: string; href: string }[];
  gradient: string;
  icon: string;
};

const projects: Project[] = [
  {
    title: "Book Manager (JavaFX + Google Books API)",
    summary:
      "Desktop app to manage personal book collections with CRUD operations. Integrated Google Books API to search and fetch online book details. Implemented MVC architecture with intuitive UI for seamless user experience.",
    stack: ["Java", "JavaFX", "Google Books API", "MVC"],
    links: [],
    gradient: "from-blue-500 to-purple-600",
    icon: "📚"
  },
  {
    title: "Personal Financial Manager",
    summary:
      "React-based expense tracking application with AI-powered cost optimization suggestions. Helps users identify spending patterns and provides actionable recommendations to reduce expenses by 10-20%.",
    stack: ["React", "TypeScript", "Node.js", "AI Integration"],
    links: [],
    gradient: "from-green-500 to-teal-600",
    icon: "💰"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <motion.h2 
          className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <motion.p 
          className="text-center text-gray-600 dark:text-gray-300 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Here are some of my recent projects that showcase my skills
        </motion.p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article 
              key={project.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700">
                {/* Gradient Header */}
                <div className={`h-32 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-4 right-4 text-4xl opacity-80">
                    {project.icon}
                  </div>
                  <motion.div 
                    className="absolute -top-10 -right-10 w-20 h-20 bg-white/20 rounded-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {project.summary}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map(tech => (
                      <motion.span 
                        key={tech}
                        className="text-xs bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-200 rounded-full px-3 py-1 border border-gray-200 dark:border-gray-600"
                        whileHover={{ scale: 1.05, backgroundColor: "#3B82F6", color: "white" }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Action Button */}
                  <motion.button 
                    className="w-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-200 py-2 rounded-lg font-medium hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details
                  </motion.button>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-600/0 group-hover:from-blue-500/5 group-hover:to-purple-600/5 transition-all duration-500 pointer-events-none"></div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}