"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "React", slug: "react", color: "#61DAFB" },
  { name: "Next.js", slug: "nextdotjs", color: "#FFFFFF" },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "#38BDF8" },
  { name: "JavaScript", slug: "javascript", color: "#F7DF1E" },
  { name: "TypeScript", slug: "typescript", color: "#3178C6" },
  { name: "Git", slug: "git", color: "#F05032" },
  { name: "HTML", slug: "html5", color: "#E34F26" },
  { name: "CSS", slug: "CSS", color: "#1572B6" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="section-gradient py-24 border-t-2 border-line"
    >
      <div className="mx-auto max-w-4xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-3xl font-bold uppercase tracking-widest md:text-4xl"
        >
          Technologies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12 text-center text-sm uppercase tracking-widest text-muted"
        >
          {"// The tools I build with"}
        </motion.p>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {technologies.map((tech) => (
            <motion.li
              key={tech.name}
              variants={item}
              whileHover={{ scale: 1.05, y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group flex flex-col items-center justify-center gap-4 border-2 border-line bg-surface px-4 py-8 text-center transition-colors hover:border-accent hover:bg-surface-2"
            >
              <img
                src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace(
                  "#",
                  ""
                )}`}
                alt={`${tech.name} logo`}
                loading="lazy"
                width={40}
                height={40}
                className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-sm uppercase tracking-widest text-foreground">
                {tech.name}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
