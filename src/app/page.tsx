import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-xl mx-auto px-4 md:px-6 py-12">
        <h1 className="text-2xl font-semibold text-grey-900">Home</h1>
        <p className="mt-2 text-grey-600">
          I&apos;m a software engineer with a passion for building web applications.
        </p>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
} 