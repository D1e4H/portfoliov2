"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

function AccordionPanel({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}

function ScreenshotLayer({
  project,
  isActive,
}: {
  project: (typeof projects)[number];
  isActive: boolean;
}) {
  return (
    <div
      aria-hidden={!isActive}
      style={{ willChange: "opacity, transform" }}
      className={`col-start-1 row-start-1 transition-opacity duration-150 ease-out ${
        isActive ? "z-10 opacity-100" : "z-0 opacity-0"
      }`}
    >
      <Screenshot project={project} />
    </div>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.94 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.19 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.89.12 3.19.77.84 1.24 1.92 1.24 3.23 0 4.61-2.8 5.63-5.48 5.93.43.37.81 1.1.81 2.23v3.31c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  );
}

function Screenshot({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="w-full border-2 border-line bg-surface shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_20px_60px_-15px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-2 border-b-2 border-line px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <div className="ml-auto flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted">
          <span className="border border-line px-2 py-0.5">
            {project.year}
          </span>
        </div>
      </div>

      <div className="relative aspect-video overflow-hidden bg-surface-2">
        {project.image ? (
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col">
            <div className="flex items-center justify-between border-b border-line px-5 py-3">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                {"<" + project.title.toLowerCase().replace(/\s+/g, "-") + "/>"}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-muted">
                https://diego.dev/{project.title.toLowerCase().replace(/\s+/g, "-")}
              </span>
            </div>
            <div className="flex flex-1 gap-4 px-5 py-5">
              <div className="flex flex-col gap-3 flex-1">
                <div className="h-4 w-3/4 bg-line" />
                <div className="h-4 w-1/2 bg-line/70" />
                <div className="mt-4 h-20 w-full bg-gradient-to-br from-accent/30 to-accent-2/30" />
                <div className="h-4 w-2/3 bg-line/50" />
              </div>
              <div className="hidden sm:flex w-1/3 flex-col gap-2">
                <div className="h-3 w-full bg-line/60" />
                <div className="h-3 w-5/6 bg-line/40" />
                <div className="h-3 w-4/6 bg-line/40" />
                <div className="h-3 w-3/6 bg-line/40" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="border-t-2 border-line px-4 py-3">
        <p className="text-sm uppercase tracking-widest text-foreground">
          {project.title}
        </p>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="section-gradient py-32 border-t-2 border-line"
    >
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-3xl font-bold uppercase tracking-widest md:text-5xl"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mb-16 text-center text-sm uppercase tracking-widest text-muted"
        >
          {"// Hover a project to preview it"}
        </motion.p>

        <div className="flex flex-col-reverse gap-12 lg:grid lg:grid-cols-[1fr_1.15fr] lg:items-start lg:gap-16">
          <div className="order-first lg:order-none lg:sticky lg:top-24">
            <div className="grid">
              {projects.map((project, i) => (
                <ScreenshotLayer
                  key={project.title}
                  project={project}
                  isActive={i === active}
                />
              ))}
            </div>
          </div>

          <ul className="order-none lg:order-none flex flex-col divide-y divide-line border-y-2 border-line">
            {projects.map((project, i) => {
              const isActive = i === active;
              const isOpen = i === expanded;
              return (
                <motion.li
                  key={project.title}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
                  className="group relative cursor-pointer"
                >
                  <button
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : i)}
                    className={`relative flex w-full items-baseline gap-4 py-8 pr-4 pl-2 text-left transition-colors sm:gap-6 ${
                      isActive
                        ? "bg-surface text-foreground"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    <span
                      className={`text-xs tracking-widest ${
                        isActive ? "text-accent" : "text-neutral-600"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-3xl font-bold uppercase tracking-widest sm:text-4xl">
                      {project.title}
                    </span>
                    <span className="ml-auto hidden shrink-0 text-xs tracking-widest text-neutral-600 sm:block">
                      {project.year}
                    </span>
                    <span
                      className={`hidden shrink-0 text-accent transition-transform duration-300 sm:block ${
                        isActive ? "translate-x-1 opacity-100" : "opacity-0"
                      }`}
                    >
                      {"->"}
                    </span>
                  </button>

                  {isActive && (
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent to-accent-2" />
                  )}

                  <AccordionPanel open={isOpen}>
                    <div className="border-t border-line px-4 py-5 pl-10">
                      <p className="mb-4 text-sm leading-relaxed text-muted">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="border border-line px-2 py-1 text-[10px] uppercase tracking-widest text-muted"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="ml-auto flex items-center gap-3">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 text-muted transition-colors hover:text-foreground"
                              aria-label={`${project.title} repository on GitHub`}
                            >
                              <GithubIcon className="h-5 w-5" />
                            </a>
                          )}
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="border border-line px-3 py-1.5 text-[10px] uppercase tracking-widest text-accent transition-colors hover:bg-accent hover:text-background"
                            >
                              View
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </AccordionPanel>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}