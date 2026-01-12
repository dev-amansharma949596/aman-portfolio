import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="rounded-2xl border p-5 hover:shadow-sm dark:border-zinc-800">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <Link
          to={`/projects/${project.id}`}
          className="text-sm underline"
        >
          Details
        </Link>
      </div>

      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        {project.description}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.stack.map((t) => (
          <span key={t} className="rounded-full border px-2 py-0.5 text-xs dark:border-zinc-800">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-3 text-sm">
        {project.live ? (
          <a className="underline" href={project.live} target="_blank">
            Live
          </a>
        ) : null}
        {project.github ? (
          <a className="underline" href={project.github} target="_blank">
            GitHub
          </a>
        ) : null}
      </div>
    </div>
  );
}
