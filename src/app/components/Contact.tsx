"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus("sending");
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });
      
      if (response.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="max-w-screen-xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <motion.h2 
        className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>
      <motion.p 
        className="mt-2 text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Email: <a className="underline hover:text-black dark:hover:text-white" href="mailto:shubham7724chaudhary@gmail.com">shubham7724chaudhary@gmail.com</a> · Phone: (434) 806-0579
      </motion.p>
      
      <motion.form 
        onSubmit={onSubmit} 
        className="mt-6 grid gap-4 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <input 
          name="name" 
          required 
          placeholder="Your name" 
          className="rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 dark:placeholder-gray-400" 
        />
        <input 
          name="email" 
          required 
          type="email" 
          placeholder="Your email" 
          className="rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 dark:placeholder-gray-400" 
        />
        <textarea 
          name="message" 
          required 
          placeholder="Your message" 
          rows={5} 
          className="rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 dark:placeholder-gray-400" 
        />
        <motion.button
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 hover:from-blue-700 hover:to-purple-700 disabled:opacity-60 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </motion.button>
        {status === "sent" && <p className="text-green-700 dark:text-green-400">Thanks! I&apos;ll get back to you soon.</p>}
        {status === "error" && <p className="text-red-700 dark:text-red-400">Something went wrong. Try again.</p>}
      </motion.form>
      
      <motion.div 
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <a 
          className="text-gray-800 dark:text-gray-200 underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors" 
          href="https://linkedin.com/in/shubham-chaudhary-57b832233" 
          target="_blank"
        >
          LinkedIn Profile
        </a>
      </motion.div>
    </section>
  );
}