import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LanguageSwitcher from "./components/LanguageSwitcher";

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
      <Footer />
      <LanguageSwitcher />
    </div>
  );
}
