"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    
    try {
      // Placeholder: we will wire an API next
      await new Promise(resolve => setTimeout(resolve, 600));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="max-w-screen-xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Contact</h2>
      <p className="mt-2 text-gray-700">
        Email: <a className="underline hover:text-black" href="mailto:shubham7724chaudhary@gmail.com">shubham7724chaudhary@gmail.com</a> 
      </p>
      
      <form onSubmit={onSubmit} className="mt-6 grid gap-4 max-w-xl">
        <input 
          name="name" 
          required 
          placeholder="Your name" 
          className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" 
        />
        <input 
          name="email" 
          required 
          type="email" 
          placeholder="Your email" 
          className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" 
        />
        <textarea 
          name="message" 
          required 
          placeholder="Your message" 
          rows={5} 
          className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" 
        />
        <button
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-2.5 hover:bg-black disabled:opacity-60 transition"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        {status === "sent" && <p className="text-green-700">Thanks! I&apos;ll get back to you soon.</p>}
        {status === "error" && <p className="text-red-700">Something went wrong. Try again.</p>}
      </form>
      
      <div className="mt-6">
        <a 
          className="text-gray-800 underline hover:text-black" 
          href="https://linkedin.com/in/shubham-chaudhary-57b832233" 
          target="_blank"
        >
          LinkedIn Profile
        </a>
      </div>
    </section>
  );
}