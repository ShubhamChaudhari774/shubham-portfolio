"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check if user has a saved preference
        const saved = localStorage.getItem('darkMode');
        if (saved) {
            setDarkMode(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        // Apply dark mode to document
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        // Save preference
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700 transition-colors">
            <nav className="max-w-screen-xl mx-auto px-4 md:px-6">
                <div className="flex h-14 items-center justify-between">
                    <Link href="/" className="font-semibold text-gray-900 dark:text-white transition-colors">
                        Shubham Chaudhari
                    </Link>

                    <div className="flex items-center gap-4">
                        {/* Dark Mode Toggle */}
                        <motion.button
                            onClick={() => setDarkMode(!darkMode)}
                            className="relative w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md"
                                animate={{ x: darkMode ? 24 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                            <div className="absolute inset-0 flex items-center justify-between px-1">
                                <span className="text-xs">🌙</span>
                                <span className="text-xs">☀️</span>
                            </div>
                        </motion.button>

                        <button
                            aria-label="Toggle menu"
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden inline-flex items-center justify-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            <svg width="24" height="24" fill="none" stroke="currentColor" className="text-gray-900 dark:text-white">
                                <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </button>
                    </div>

                    <ul className="hidden md:flex gap-6 text-sm text-gray-700 dark:text-gray-300">
                        <li><a href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</a></li>
                        <li><a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</a></li>
                        <li><a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</a></li>
                        <li><a href="https://linkedin.com/in/shubham-chaudhary-57b832233" target="_blank" className="hover:text-black dark:hover:text-white transition-colors">LinkedIn</a></li>
                        <li><a href="mailto:shubham7724chaudhary@gmail.com" className="hover:text-black dark:hover:text-white transition-colors">Email</a></li>
                    </ul>
                </div>

                {isOpen && (
                    <motion.ul 
                        className="md:hidden pb-3 space-y-2 text-sm text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
                        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                        <li><a href="https://linkedin.com/in/shubham-chaudhary-57b832233" target="_blank" onClick={() => setIsOpen(false)}>LinkedIn</a></li>
                        <li><a href="mailto:shubham7724chaudhary@gmail.com" onClick={() => setIsOpen(false)}>Email</a></li>
                    </motion.ul>
                )}
            </nav>
        </header>
    );
}