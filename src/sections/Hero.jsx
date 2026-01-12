import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
  <div className="rounded-3xl border bg-gradient-to-b from-gray-50 to-white p-10 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950">
    
      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold tracking-tight sm:text-5xl"
      >
        React / MERN Developer
      </motion.h1>

      <p className="mt-4 max-w-2xl text-gray-600">
        I build fast, responsive web apps with React, Node.js, and MongoDB.
      </p>

      <div className="mt-8 flex gap-3">
        <a className="rounded-lg bg-black px-4 py-2 text-white" href="#projects">
          View Projects
        </a>
        <a className="rounded-lg border px-4 py-2" href="#contact">
          Contact
        </a>
      </div>
     </div>
    </section>
  );
}
