"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";

const inputClass =
  "w-full border-2 border-line bg-surface px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent focus:bg-surface-2 transition-colors";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data), // Quitamos el null, 2 para enviar un JSON limpio
      });

      const result = await response.json();

      if (result.success) {
        setSent(true);
        formRef.current?.reset();
      } else {
        console.error("Error sending message:", result);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
      // Nota: Ya no apagamos setSent aquí para que el mensaje de éxito permanezca visible
    }
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
          ref={formRef}
        >
          <div>
            {/* Corregido a "access_key" con doble 's' */}
            <input type="hidden" name="access_key" value="dc18109c-e309-425a-9619-172c56e49a3a" />
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
            disabled={loading || sent}
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className=" cursor-pointer w-full border-2 border-accent bg-accent text-background py-4 uppercase tracking-widest text-sm font-bold hover:bg-accent-2 hover:border-accent-2 transition-colors disabled:opacity-50"
          >
            {loading ? "Sending..." : sent ? "Message Sent" : "Send Message"}
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
            href="mailto:diegoandrezenriquez@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="border-2 border-line px-4 py-2 text-foreground hover:border-accent hover:text-accent transition-colors"
          >
            Email
          </motion.a>
          <motion.a
            href="https://github.com/D1e4h"
            rel="noopener noreferrer"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="border-2 border-line px-4 py-2 text-foreground hover:border-accent hover:text-accent transition-colors"
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/diego-henriquezar/"
            rel="noopener noreferrer"
            target="_blank"
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
            className="mt-8 text-center text-sm uppercase tracking-widest text-accent"
          >
            {"Message received. I'll get back to you soon."}
          </motion.p>
        )}
      </div>
    </section>
  );
}