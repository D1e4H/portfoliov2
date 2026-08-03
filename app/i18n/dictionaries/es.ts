import type { Dictionary } from "../types";

export const es: Dictionary = {
  nav: {
    home: "Inicio",
    technologies: "Tecnologías",
    about: "Sobre mí",
    projects: "Proyectos",
    contact: "Contacto",
  },
  hero: {
    greeting: "[ Hola mundo, soy ]",
    name: "Diego Henriquez",
    lines: ["FRONT END", "DEVELOPER"],
    tagline: "// Construyendo interfaces que se sienten vivas",
    viewWork: "Ver Proyectos",
    contactMe: "Contáctame",
  },
  footer: "// Diego Henriquez — Desarrollador Front End © 2026",
  technologies: {
    title: "Tecnologías",
    subtitle: "// Las herramientas con las que trabajo",
  },
  about: {
    title: "Sobre Mí",
    subtitle: "// El desarrollador detrás de la pantalla",
    paragraphs: [
      "Soy un Desarrollador Front End autodidacta con base en Venezuela al que le encanta convertir ideas en interfaces rápidas, accesibles y hermosas. Mi viaje comenzó con una simple curiosidad por cómo funcionan los sitios web, y creció hasta convertirse en una pasión por construir productos que la gente disfruta usar todos los días.",
      "Cuando no estoy programando, me encontrarás explorando nuevas herramientas, compartiendo lo que aprendo y siempre buscando el siguiente reto.",
    ],
    stats: [
      { value: "1", label: "Años de Experiencia" },
      { value: "8", label: "Tecnologías" },
      { value: "∞", label: "Tazas de Café" },
      { value: "100%", label: "Pasión" },
    ],
  },
  projects: {
    title: "Proyectos",
    subtitle: "// Pasa el cursor sobre un proyecto para previsualizarlo",
    view: "Ver",
    repoAria: "repositorio en GitHub",
    descriptions: {
      SismoVzla:
        "Una aplicación web que muestra los daños causados por el terremoto en Venezuela el pasado 24 de junio usando Maplibre y Next.js. Ademas consume la API de reliefweb para mostrar datos humanitarios.",
      Keyvisualizer: "Un visualizador de teclado 3D hecho con THREE.js.",
      "Pacman-Clone": "Un clon de Pacman hecho con THREE.js. ",
      "Contribution to Physicshub":
        "Una página web creada para mostrar simulaciones físicas pensada para ayudar a los estudiantes. Arreglé un bug relacionado con el comportamiento de una de las simulaciones.",
    },
  },
  contact: {
    title: "Contáctame",
    subtitle: "// Construyamos algo juntos",
    name: "Nombre",
    email: "Correo",
    message: "Mensaje",
    sending: "Enviando...",
    sent: "Mensaje Enviado",
    send: "Enviar Mensaje",
    received: "Mensaje recibido. Te responderé pronto.",
  },
};
