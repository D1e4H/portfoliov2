"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur border-b-2 border-line"
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-lg font-bold tracking-widest text-foreground"
        >
          <span className="text-accent">{"<"}</span>
          {"DH"}
          <span className="text-accent-2">{"/>"}</span>
        </motion.a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <motion.a
                href={link.href}
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm uppercase tracking-widest text-muted hover:text-accent transition-colors"
              >
                {link.label}
              </motion.a>
            </li>
          ))}
        </ul>

        <motion.button
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden border-2 border-line px-2 py-1 text-foreground"
        >
          {open ? "[X]" : "[=]"}
        </motion.button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-background border-t-2 border-line"
          >
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-sm uppercase tracking-widest text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
