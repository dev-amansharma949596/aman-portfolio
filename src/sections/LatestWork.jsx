import { motion } from "framer-motion";
import HoverGlowCard from "../components/HoverGlowCard";

const items = [
  {
    no: "01.",
    title: "A Portfolio of Creativity",
    desc:
      "A collection of unique and visually engaging projects that highlight my ability to bring ideas to life through thoughtful design and clean code.",
  },
  {
    no: "02.",
    title: "A Portfolio of Innovation",
    desc:
      "My work is driven by a commitment to innovation — combining strategy, modern technologies, and user-centric thinking to craft solutions that make a difference.",
  },
  {
    no: "03.",
    title: "A Showcase of My Projects",
    desc:
      "Browse through a selection of my featured projects, showcasing my expertise in responsive web design, frontend development, and modern UI/UX practices.",
  },
];

function cn(...s) {
  return s.filter(Boolean).join(" ");
}

export default function LatestWork() {
  return (
    <section id="latest-work" className="bg-zinc-0 dark:bg-zinc-950 py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Top heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <div className="text-xs font-extrabold tracking-[0.3em] text-green-900">
            LATEST WORK
          </div>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-100 sm:text-5xl">
            Showcasing My Creative <br className="hidden sm:block" />
            Journey
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-950 dark:text-zinc-100 sm:text-base">
            Explore a curated selection of my projects and services that reflect
            my passion for design, development, and delivering impactful digital
            experiences.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          {/* Left cards */}
          <div className="space-y-6">
            {items.map((it, idx) => (
              <motion.div
                key={it.no}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                whileHover={{ y: -6 }}
                >
                    <HoverGlowCard
                className="group rounded-[22px] bg-zinc-950 dark:bg-green-900 p-7 shadow-[0_22px_70px_rgba(0,0,0,0.45)] ring-1 ring-white/5 backdrop-blur transition"
              >
                <div className="flex items-start gap-3">
                  <div className="text-base font-extrabold text-white">
                    {it.no}
                  </div>
                  <div>
                    <div className="text-lg font-extrabold text-white">
                      {it.title}
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white/60">
                      {it.desc}
                    </p>
                  </div>
                </div>
                 </HoverGlowCard>
 
              </motion.div>
            ))}
          </div>

          {/* Right art/photo */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            {/* big dark ring behind */}
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5" />
            <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

            {/* floating pink circles */}
            <FloatingCircle className="left-10 top-24 h-14 w-14 bg-green-600" />
            <FloatingRing className="right-16 top-40 h-12 w-12 border-green-600" />
            <FloatingRing className="right-10 top-64 h-16 w-16 border-green-600/70" />
            <FloatingRing className="left-16 bottom-12 h-20 w-20 border-green-600" />

            {/* half circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute bottom-24 right-6 h-16 w-32 overflow-hidden"
            >
              <div className="h-32 w-32 rounded-full bg-green-600" />
            </motion.div>

            {/* photo container */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto grid h-[460px] w-[460px] place-items-end overflow-hidden rounded-full"
            >
              {/* glow */}
              <div className="pointer-events-none absolute inset-0 rounded-full shadow-[0_0_80px_rgba(236,72,153,0.18)]" />

              <img
                src="/profile.png"
                alt="Profile"
                className="h-[520px] w-[520px] object-cover object-top"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              {/* fallback if no image */}
              <div className="grid h-full w-full place-items-center rounded-full bg-gradient-to-b from-zinc-800 to-zinc-950 text-white/70">
                Add <code className="mx-2 rounded bg-black/40 px-2 py-1">public/profile.png</code>
              </div>

              {/* bottom cut shadow */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/** Decorations */
function FloatingCircle({ className = "" }) {
  return (
    <motion.div
      className={cn("absolute rounded-full opacity-90", className)}
      animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function FloatingRing({ className = "" }) {
  return (
    <motion.div
      className={cn("absolute rounded-full border-2", className)}
      animate={{ y: [0, 10, 0], x: [0, -6, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
