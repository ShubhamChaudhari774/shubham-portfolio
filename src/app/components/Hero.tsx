export default function Hero() {
    return (
      <section className="max-w-screen-xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <p className="text-sm uppercase tracking-wide text-gray-600">Software Engineer</p>
            <h1 className="mt-2 text-3xl md:text-5xl font-bold text-gray-900">
              Shubham Chaudhari
            </h1>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Detail-oriented Computer Science student (GPA 3.9+) with strong foundation in software engineering,
              web development, and problem-solving. Experienced tutor and mentor, improving outcomes through
              personalized strategies. Full‑stack skills in Python, JavaScript, React, Node.js, SQL, and MongoDB.
              Seeking internship opportunities to apply technical and collaborative skills.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-2.5 hover:bg-black">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-2.5 hover:bg-gray-50">
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-square rounded-xl border border-dashed border-gray-300 grid place-content-center text-gray-500">
              <span className="text-sm">Your Photo</span>
            </div>
          </div>
        </div>
      </section>
    );
  }