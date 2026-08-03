export type Lang = "en" | "es";

export type Dictionary = {
  nav: {
    home: string;
    technologies: string;
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    lines: string[];
    tagline: string;
    viewWork: string;
    contactMe: string;
  };
  footer: string;
  technologies: {
    title: string;
    subtitle: string;
  };
  about: {
    title: string;
    subtitle: string;
    paragraphs: string[];
    stats: { value: string; label: string }[];
  };
  projects: {
    title: string;
    subtitle: string;
    view: string;
    repoAria: string;
    descriptions: Record<string, string>;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    sending: string;
    sent: string;
    send: string;
    received: string;
  };
};
