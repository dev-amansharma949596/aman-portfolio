import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import HoverGlowCard from "../components/HoverGlowCard";

function useCountUp(target, startWhenVisible = true, durationMs = 900) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(!startWhenVisible);

  useEffect(() => {
    if (!startWhenVisible) return;

    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [startWhenVisible]);

  useEffect(() => {
    if (!started) return;

    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setValue(Math.round(eased * target));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target, durationMs]);

  return { ref, value };
}

const stats = [
  { value: 150, suffix: "+", label: "Project Complete" },
  { value: 100, suffix: "+", label: "Natural Products" },
  { value: 100, suffix: "+", label: "Clients Reviews" },
  { value: 140, suffix: "+", label: "Satisfied Clients" },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-zinc-0 dark:bg-zinc-950 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* LEFT BIG CARD */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[28px] p-10 shadow-[0_20px_20px_rgba(0,0,0,0.55)]"
          >
            {/* gradient bg */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-zinc-950 to-green-900" />
            {/* subtle gloss */}
            <div className="pointer-events-none absolute inset-0 opacity-25">
              <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-green-900/100 blur-3xl" />
              <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-green-900/100 blur-3xl" />
            </div>

            <div className="relative">
              <div className="flex items-start gap-8">
                <div className="text-[96px] font-extrabold leading-none text-green-900 sm:text-[120px]">
                  05
                </div>

                <div className="pt-3">
                  <h3 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                    Years Of <br />
                    experience
                  </h3>
                </div>
              </div>

              <p className="mt-8 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                I provide design, development, bug fixing, and redesign services,
                ensuring responsive layouts, clean code, and optimized solutions
                that improve performance and enhance user experience.
              </p>
            </div>
          </motion.div>

          {/* RIGHT STATS 2x2 */}
          <div className="grid gap-6 sm:grid-cols-2">
            {stats.map((s, idx) => (
              <StatCard key={s.label} stat={s} delay={idx * 0.06} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, delay = 0 }) {
  const { ref, value } = useCountUp(stat.value, true, 850);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -6 }}
      >
        <HoverGlowCard
      className="group rounded-[22px] bg-zinc-900/100 dark:bg-green-900/100 p-10 text-center shadow-[0_10px_10px_rgba(0,0,0,0.45)] ring-1 ring-white/5 backdrop-blur transition"
    >
      <div className="text-5xl font-extrabold tracking-tight text-white">
        {value}
        {stat.suffix}
      </div>
      <div className="mt-4 text-sm font-medium text-white/65 sm:text-base">
        {stat.label}
      </div>

      {/* hover glow */}
      <div className="pointer-events-none mx-auto mt-6 h-1 w-20 bg-green-600/0 transition group-hover:bg-green-100/100" />
      </HoverGlowCard>
    </motion.div>
  );
}
