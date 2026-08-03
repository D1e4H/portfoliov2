import type { Dictionary } from "../types";

export const en: Dictionary = {
  nav: {
    home: "Home",
    technologies: "Technologies",
    about: "About",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    greeting: "[ Hello world, im ]",
    name: "Diego Henriquez",
    lines: ["FRONT END", "DEVELOPER"],
    tagline: "// Building interfaces that feel alive",
    viewWork: "View Work",
    contactMe: "Contact Me",
  },
  footer: "// Diego Henriquez — Front End Developer © 2026",
  technologies: {
    title: "Technologies",
    subtitle: "// The tools I build with",
  },
  about: {
    title: "About Me",
    subtitle: "// The developer behind the screen",
    paragraphs: [
      "I'm a self-taught Front End Developer based in Venezuela who loves turning ideas into fast, accessible and beautiful interfaces. My journey started with a simple curiosity for how websites work, and it grew into a passion for building products that people enjoy using every day.",
      "When I'm not coding, you'll find me exploring new tools, sharing what I learn and always looking for the next challenge.",
    ],
    stats: [
      { value: "1", label: "Years of Experience" },
      { value: "8", label: "Technologies" },
      { value: "∞", label: "Cups of Coffee" },
      { value: "100%", label: "Passion" },
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "// Hover a project to preview it",
    view: "View",
    repoAria: "repository on GitHub",
    descriptions: {
      SismoVzla:
        "A web application that visualizes the damage caused by the earthquake in Venezuela on June 24 using Maplibre and Next.js, and consumes the api from reliefweb to show humanitarian data.",
      Keyvisualizer: "A 3D keyboard visualizer made with THREE.js.",
      "Pacman-Clone": "A pacman clone made with THREE.js.",
      "Contribution to Physicshub":
        "A webpage made to showcase physics simulations to help students. I fixed a bug related to the behaviour of the simulation pendulum it didn't followed the cursor properly.",
    },
  },
  contact: {
    title: "Contact Me",
    subtitle: "// Let's build something together",
    name: "Name",
    email: "Email",
    message: "Message",
    sending: "Sending...",
    sent: "Message Sent",
    send: "Send Message",
    received: "Message received. I'll get back to you soon.",
  },
};