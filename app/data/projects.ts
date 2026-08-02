export type Project = {
  title: string;
  description: string;
  stack: string[];
  year: string;
  image?: string;
  link?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "SismoVzla",
    description:
      "A web application that visualizes the damaged caused by the earthquake  in Venezuela the past 24 june using Maplibre and Next.js. and consumes the api from reliefweb to show humanitarian data",
    stack: ["Next.js", "Tailwind CSS", "Maplibre"],
    year: "2026",
    link: "https://sismovzla.vercel.app/",
    github: "https://github.com/D1e4H/sismo-vzla",
    image: "/sismovzlapreview.webp"
  },
  {
    title: "Keyvisualizer",
    description:
      "A 3D keyboard visualizer made with THREE.js.",
    stack: ["Next.js", "TypeScript", "THREE.JS"],
    year: "2026",
    link: "https://keyvisualizer.vercel.app/",
    github: "https://github.com/D1e4H/3dkeyboard",
    image: "/keyvisualizerpreview.webp"

  },
  {
    title: "Pacman-Clone",
    description:
      "A pacman clone made with THREE.js .",
    stack: ["React", "Vite", "THREE.JS"],
    year: "2026",
    link: "https://pacman-d1e4h.netlify.app/",
    github: "https://github.com/D1e4H/Pacman-Gamev2",
    image: "/pacmanpreview.webp"

  },
  {
    title: "Contribution to Physicshub",
    description:
      "A webpage made to showcase physics simulations to help students. I fixed a bug related to the behaviour of the simulation pendulum it didn't followed the cursor propperly.",
    stack: ["React", "Vite", "THREE.JS"],
    year: "2026",
    link: "https://physicshub.github.io/",
    github: "https://github.com/physicshub/physicshub.github.io/pull/289#issuecomment-4556342802",
    image: "/physicshubpreview.webp"
  }
];
