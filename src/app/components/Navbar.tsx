"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
            <nav className="max-w-screen-xl mx-auto px-4 md:px-6">
                <div className="flex h-14 items-center justify-between">
                    <Link href="/" className="front semibold text-grey-900">
                        Shubham Chaudhari
                    </Link>

                    <button
                      aria-label="Toggle menu"
                      onClick={() => setIsOpen(!isOpen)}
                      className="md:hidden inline-flex items-center justify-center p-2 rounded hover:bg-gray-100">
                        <svg width="24" height="24" fill="none" stroke="currentColor">
                            <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>

                    <ul className="hidden md:flex gap-6 text-sm text-grey-600">
                        <li><a href="#about" className="hover:text-black">About</a></li>
                        <li><a href="#projects" className="hover:text-black">Projects</a></li>
                        <li><a href="#contact" className="hover:text-black">Contact</a></li>
                        <li><a href="https://linkedin.com/in/shubham-chaudhary-57b832233" target="_blank"  className="hover:text-black">LinkedIn</a></li>
                        <li><a href="mailto:shubham7724chaudhary@gmail.com" className="hover:text-black">Email</a></li>
                    </ul>
                </div>

                {isOpen && (
                    <ul className="md:hidden pb-3 space-y-2 text-sm text-gray-700">
                            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                            <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
                            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                            <li><a href="https://linkedin.com/in/shubham-chaudhary-57b832233" target="_blank" onClick={() => setIsOpen(false)}>LinkedIn</a></li>
                            <li><a href="mailto:shubham7724chaudhary@gmail.com" onClick={() => setIsOpen(false)}>Email</a></li>
                        </ul>
               )}
            </nav>
        </header>
    );
}