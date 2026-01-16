import { motion } from "framer-motion";
import {
  Monitor,
  Layers,
  PencilRuler,
  Bug,
} from "lucide-react";

const cards = [
  {
    icon: Monitor,
    topLabel: "Front-End\nDevelopment",
    title: "Front-End Development",
    count: "100 Projects",
  },
  {
    icon: Layers,
    topLabel: "MERN Stack",
    title: "MERN Stack Development",
    count: "20 Projects",
  },
  {
    icon: PencilRuler,
    topLabel: "Redesigning\nWebsite",
    title: "Redesigning Website",
    count: "40 Projects",
  },
  {
    icon: Bug,
    topLabel: "Error &\nBug Fixing",
    title: "Error & Bug Fixing",
    count: "30 Projects",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-zinc-0 dark:bg-zinc-950 py-16"
    >
      <div className="mx-auto max-w-6xl px-4">
         

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[28px] border border-green-900/20 bg-zinc-950 dark:bg-green-900 p-8 shadow-[0_10px_10px_rgba(0,0,0,0.55)] backdrop-blur"
            >
              {/* glow */}
              <div className="pointer-events-none absolute -inset-24 opacity-0 blur-3xl transition group-hover:opacity-100">
                <div className="h-full w-full rounded-full bg-green-900/15" />
              </div>

              {/* top icon area */}
              <div className="mb-6 grid place-items-center">
                <div className="relative grid h-24 w-24 place-items-center rounded-2xl border border-green-900/20 bg-white/5">
                  <c.icon className="h-12 w-12 text-zinc-100 " strokeWidth={1.6} />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_40px_rgba(236,72,153,0.22)] opacity-0 transition group-hover:opacity-100" />
                </div>

                {/* small green label like your screenshot */}
                <div className="mt-4 text-center text-sm font-semibold whitespace-pre-line leading-5 text-zinc-100  ">
                  {c.topLabel}
                </div>
              </div>

              {/* main title */}
              <h3 className="text-center text-xl font-extrabold text-zinc-100 ">
                {c.title}
              </h3>

              {/* project count */}
              <p className="mt-4 text-center text-zinc-100 ">
                {c.count}
              </p>

              {/* subtle hover border brighten */}
              <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-green-900/0 transition group-hover:ring-green-900/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
