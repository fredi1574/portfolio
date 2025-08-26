import About from "./components/About";
import Contact from "./components/Contact";
import CurrentProject from "./components/CurrentProject";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Skills from "./components/Skills";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-blue-950 text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Current Project */}
      <CurrentProject />

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      <ScrollToTopButton />
    </div>
  );
}
