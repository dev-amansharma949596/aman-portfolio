import { motion } from "framer-motion";

const designSkills = [
  { name: "PHOTOSHOP", value: 90 },
  { name: "FIGMA", value: 95 },
  { name: "ADOBE XD", value: 85 },
  { name: "ADOBE ILLUSTRATOR", value: 70 },
  { name: "CANVA", value: 60 },
];

const devSkills = [
  { name: "HTML & CSS", value: 100 },
  { name: "BOOTSTRAP & TAILWINDCSS", value: 97 },
  { name: "JAVASCRIPT & REACT", value: 95 },
  { name: "EXPRESS & MONGODB", value: 90 },
  { name: "PHP & MYSQL", value: 75 },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-zinc-0 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <SkillColumn title="Design Skill" items={designSkills} />
          <SkillColumn title="Development Skill" items={devSkills} />
        </div>
      </div>
    </section>
  );
}

function SkillColumn({ title, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
    >
      <HeaderWithLine title={title} />

      <div className="mt-10 space-y-10">
        {items.map((s, idx) => (
          <SkillRow key={s.name} skill={s} delay={idx * 0.06} />
        ))}
      </div>
    </motion.div>
  );
}

function HeaderWithLine({ title }) {
  return (
    <div className="flex items-center gap-6">
      <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-100">
        {title}
      </h2>

      {/* line with dots */}
      <div className="hidden sm:flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-zinc-950 dark:bg-zinc-100" />
        <span className="h-[2px] w-24 bg-zinc-800 dark:bg-zinc-100" />
        <span className="h-2 w-2 rounded-full bg-zinc-950 dark:bg-zinc-100" />
      </div>
    </div>
  );
}

function SkillRow({ skill, delay = 0 }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-sm font-extrabold tracking-widest text-zinc-950 dark:text-zinc-100">
          {skill.name}
        </div>
        <div className="text-sm font-extrabold text-zinc-950 dark:text-zinc-100">
          {skill.value}%
        </div>
      </div>

      {/* track */}
      <div className="mt-4 h-[10px] w-full rounded-full bg-zinc-400/100">
        {/* fill */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay, ease: "easeOut" }}
          className="h-[10px] rounded-full bg-green-900 shadow-[0_0_30px_rgba(236,72,153,0.25)]"
        />
      </div>
    </div>
  );
}
