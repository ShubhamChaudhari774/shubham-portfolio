"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <motion.div 
            className="md:col-span-7"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p 
              className="text-sm uppercase tracking-wide text-blue-600 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Software Engineer
            </motion.p>
            <motion.h1 
              className="mt-2 text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-blue-300 dark:via-purple-300 dark:to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Shubham Chaudhari
            </motion.h1>
            <motion.p 
              className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Detail-oriented Computer Science student (GPA 3.9+) with strong foundation in software engineering,
              web development, and problem-solving. Experienced tutor and mentor, improving outcomes through
              personalized strategies. Full‑stack skills in Python, JavaScript, React, Node.js, SQL, and MongoDB.
              Seeking internship opportunities to apply technical and collaborative skills.
            </motion.p>
            <motion.div 
              className="mt-6 flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.a 
                href="#projects" 
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a 
                href="#contact" 
                className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 px-6 py-3 font-medium hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="md:col-span-5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 border-2 border-dashed border-blue-300 dark:border-blue-600 grid place-content-center text-blue-600 dark:text-blue-300 shadow-lg">
                <img 
                  src="/Linkedin.png"
                  alt="Your Photo" 
                  className="aspect-square rounded-2xl w-full h-full object-cover shadow-lg border-2 border-dashed border-blue-300 dark:border-blue-600" />
              </div>
              <motion.div 
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}