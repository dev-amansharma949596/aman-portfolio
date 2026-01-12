import SectionTitle from "../components/SectionTitle";

const skills = ["React", "Node.js", "Express", "MongoDB", "Tailwind", "Git"];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle title="Skills" subtitle="Tools I use to build products." />
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span key={s} className="rounded-full border px-3 py-1 text-sm">
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
