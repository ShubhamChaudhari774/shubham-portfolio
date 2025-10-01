"use client";

import { motion } from "framer-motion";

const skills = [
  "Python", "JavaScript", "C++", "Java", "C",
  "HTML", "CSS", "React", "Node.js",
  "MySQL", "MongoDB",
  "Git", "VS Code", "APIs", "Agile"
];

export default function About() {
  return (
    <section id="about" className="max-w-screen-xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <motion.h2 
        className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About
      </motion.h2>
      <motion.p 
        className="mt-4 text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        I enjoy building efficient, user‑focused applications and mentoring others. I care about clean architecture,
        readable code, and measurable impact. My experience in tutoring has taught me the importance of clear
        communication and breaking down complex problems into manageable solutions.
      </motion.p>
      <motion.h3 
        className="mt-8 text-lg font-semibold text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h3>
      <motion.ul 
        className="mt-3 flex flex-wrap gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.li 
            key={skill} 
            className="rounded-md border border-gray-200 dark:border-gray-700 px-3 py-1.5 text-sm text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}