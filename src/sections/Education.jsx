import { motion } from "framer-motion";
import HoverGlowCard from "../components/HoverGlowCard";

const educationItems = [
  {
    title: "Higher Secondary Education",
    place: "Sherpur Govt. College",
    year: "2018-2020",
    desc:
      "Built a strong foundation in science and problem-solving that guided my academic and career path.",
  },
  {
    title: "B.S.c in Physics",
    place: "National University, Bangladesh",
    year: "2020-2024",
    desc:
      "Developed analytical and research skills while gaining a deeper understanding of logical thinking and scientific methods.",
  },
  {
    title: "Web Development With Latest Version (PHP)",
    place: "eShikhon",
    year: "2022-2023",
    desc:
      "Acquired practical web development skills through project-based training, focusing on dynamic and responsive applications.",
  },
  {
    title: "MERN Stack Web Development",
    place: "Programming Hero",
    year: "2025",
    desc:
      "Hands-on training with modern full-stack technologies to build scalable, user-friendly web applications.",
  },
];

const experiences = [
  {
    tag: "experience",
    company: "KM IT Firm",
    years: "(2 Years)",
    role: "Front-End Developer",
    desc:
      "Created responsive, SEO-friendly websites using React.js, Tailwind CSS, and Bootstrap. Delivered pixel-perfect UI, improved site speed by 35%, and ensured cross-device seamless user experience.",
  },
  {
    tag: "experience",
    company: "ASAD IT Firm",
    years: "(3 Years)",
    role: "MERN Stack Developer",
    desc:
      "Developed scalable MERN applications with REST APIs, authentication, and real-time features. Built dashboards, optimized MongoDB, and delivered impactful, client-focused digital products with strong functionality.",
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-white py-16 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4">
        {/* Top heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <div className="text-xs font-extrabold tracking-[0.3em] text-green-800 dark:text-green-900">
            EDUCATION & TRAINING
          </div>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            Empowering Creativity <br className="hidden sm:block" />
            through
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-white/65 sm:text-base">
            A journey of learning and coding, from academic milestones to hands-on
            training programs, sharpening my skills and preparing me to craft
            impactful digital solutions.
          </p>
        </motion.div>

  {/* Section label like screenshot */}
        <div className="mt-12 flex items-center gap-6">
          <h3 className="text-2xl font-extrabold text-zinc-950 dark:text-zinc-100">Education</h3>
          <div className="hidden sm:flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-zinc-950 dark:bg-zinc-100" />
            <span className="h-[2px] w-24 bg-zinc-950 dark:bg-zinc-100" />
            <span className="h-2 w-2 rounded-full bg-zinc-950 dark:bg-zinc-100" />
          </div>
        </div>

        {/* Cards grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {educationItems.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
            >
              <HoverGlowCard className="p-8 min-h-[220px] dark:bg-green-900 bg-zinc-950">
                <h4 className="text-xl font-extrabold text-white">
                  {it.title}
                </h4>

                <div className="mt-2 text-sm font-bold text-green-500 dark:text-zinc-300">
                  {it.org}
                </div>

                <div className="mt-3 text-sm font-semibold text-white/85">
                  {it.year}
                </div>

                <p className="mt-6 text-sm leading-6 text-white/60">
                  {it.desc}
                </p>
              </HoverGlowCard>
            </motion.div>
          ))}
        </div>

        {/* Experiences block (like screenshot) */}
        <div className="mt-16 grid items-start gap-10 lg:grid-cols-2">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-6">
              <h3 className="text-2xl font-extrabold text-zinc-900 dark:text-white">
                Experiences
              </h3>

              <div className="hidden sm:flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-zinc-800 dark:bg-white/80" />
                <span className="h-[2px] w-24 bg-zinc-300 dark:bg-white/30" />
                <span className="h-2 w-2 rounded-full bg-zinc-800 dark:bg-white/80" />
              </div>
            </div>

            <div className="mt-10 space-y-12">
              {experiences.map((ex, idx) => (
                <motion.div
                  key={ex.company}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                >
                  <div className="text-sm font-extrabold text-green-800 dark:text-green-900">
                    {ex.tag}
                  </div>

                  <div className="mt-2 text-xl font-extrabold text-zinc-900 dark:text-white">
                    {ex.company} <span className="text-white/0 dark:text-white/0"> </span>
                    <span className="text-zinc-700 dark:text-white/80">
                      {ex.years}
                    </span>
                  </div>

                  <div className="mt-2 text-sm font-bold text-zinc-900 dark:text-white">
                    {ex.role}
                  </div>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-600 dark:text-white/60">
                    {ex.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="mx-auto w-full max-w-[640px]"
          >
            <div className="overflow-hidden rounded-[22px] bg-zinc-200 shadow-[0_22px_70px_rgba(0,0,0,0.20)] dark:bg-white/5 dark:shadow-[0_22px_70px_rgba(0,0,0,0.45)]">
              {/* Put image in public/experience.jpg */}
              <img
                src="/experience.jpg"
                alt="Work"
                className="h-[320px] w-full object-cover md:h-[360px]"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              {/* fallback */}
              <div className="grid h-[320px] place-items-center text-sm text-zinc-700 dark:text-white/70 md:h-[360px]">
                Add <code className="mx-2 rounded bg-black/10 px-2 py-1 dark:bg-black/40">public/experience.jpg</code>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
