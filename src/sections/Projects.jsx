import { useMemo, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";

const allTech = Array.from(new Set(projects.flatMap((p) => p.stack))).sort();

export default function Projects() {
  const [q, setQ] = useState("");
  const [tech, setTech] = useState("All");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesQuery =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query);
      const matchesTech = tech === "All" || p.stack.includes(tech);
      return matchesQuery && matchesTech;
    });
  }, [q, tech]);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionTitle title="Projects" subtitle="Some things I’ve built recently." />
        <Link className="text-sm underline" to="/projects">
          View all
        </Link>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search projects..."
          className="w-full rounded-xl border px-3 py-2 text-sm dark:border-zinc-800 dark:bg-zinc-900"
        />

        <select
          value={tech}
          onChange={(e) => setTech(e.target.value)}
          className="rounded-xl border px-3 py-2 text-sm dark:border-zinc-800 dark:bg-zinc-900"
        >
          <option value="All">All tech</option>
          {allTech.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {filtered.slice(0, 4).map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
