"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const inputClass =
  "w-full border-2 border-line bg-surface px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent focus:bg-surface-2 transition-colors";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      id="contact"
      className="section-gradient py-24 border-t-2 border-line"
    >
      <div className="max-w-2xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-center mb-4"
        >
          Contact Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-muted text-sm uppercase tracking-widest mb-12"
        >
          {"// Let's build something together"}
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-xs uppercase tracking-widest mb-2">
              Name
            </label>
            <input id="name" name="name" type="text" required className={inputClass} />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs uppercase tracking-widest mb-2">
              Email
            </label>
            <input id="email" name="email" type="email" required className={inputClass} />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-widest mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className={`${inputClass} resize-none`}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full border-2 border-accent bg-accent text-background py-4 uppercase tracking-widest text-sm font-bold hover:bg-accent-2 hover:border-accent-2 transition-colors"
          >
            Send Message
          </motion.button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm uppercase tracking-widest"
        >
          <motion.a
            href="mailto:hello@diegohenriquez.dev"
            whileHover={{ scale: 1.05 }}
            className="border-2 border-line px-4 py-2 text-foreground hover:border-accent hover:text-accent transition-colors"
          >
            Email
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="border-2 border-line px-4 py-2 text-foreground hover:border-accent hover:text-accent transition-colors"
          >
            GitHub
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="border-2 border-line px-4 py-2 text-foreground hover:border-accent hover:text-accent transition-colors"
          >
            LinkedIn
          </motion.a>
        </motion.div>

        {sent && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-center text-sm uppercase tracking-widest"
          >
            {"Message received. I'll get back to you soon."}
          </motion.p>
        )}
      </div>
    </section>
  );
}
