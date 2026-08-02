import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="text-foreground">
      <Navbar />
      <Hero />
      <main>
        <Technologies />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="section-gradient border-t-2 border-line py-8 text-center text-xs uppercase tracking-widest text-muted">
        <div className="container mx-auto max-w-5xl px-4">
          {"// Diego Henriquez — Front End Developer © 2026"}
        </div>
      </footer>
    </div>
  );
}
