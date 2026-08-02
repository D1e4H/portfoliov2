export type Project = {
  title: string;
  description: string;
  stack: string[];
  year: string;
  image?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    title: "E-Commerce Storefront",
    description:
      "A clean e-commerce storefront built with React and Tailwind CSS.",
    stack: ["React", "Tailwind CSS", "Vite"],
    year: "2026",
  },
  {
    title: "Real-Time Dashboard",
    description:
      "A real-time dashboard using Next.js, TypeScript and REST APIs.",
    stack: ["Next.js", "TypeScript", "REST"],
    year: "2026",
  },
  {
    title: "Task Manager",
    description:
      "A personal task manager with state management powered by Redux.",
    stack: ["React", "Redux", "CSS3"],
    year: "2025",
  },
  {
    title: "Weather App",
    description:
      "A weather app with live location data and animated forecasts.",
    stack: ["JavaScript", "HTML5", "CSS3"],
    year: "2025",
  },
];
