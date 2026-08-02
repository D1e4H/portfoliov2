"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";

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
  const activeProject = projects[active];

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
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.title}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Screenshot project={activeProject} />
              </motion.div>
            </AnimatePresence>
          </div>

          <ul className="order-none lg:order-none flex flex-col divide-y divide-line border-y-2 border-line">
            {projects.map((project, i) => {
              const isActive = i === active;
              return (
                <li
                  key={project.title}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group relative cursor-pointer"
                >
                  <motion.a
                    href={project.link ?? "#projects"}
                    className={`relative flex items-baseline gap-4 py-8 pr-4 pl-2 transition-colors sm:gap-6 ${
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
                  </motion.a>

                  {isActive && (
                    <motion.div
                      layoutId="project-indicator"
                      className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent to-accent-2"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
