import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-2xl font-semibold">Project not found</h1>
          <Link className="mt-4 inline-block underline" to="/projects">
            Back to Projects
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-16">
        <Link className="text-sm underline" to="/projects">
          ← Back
        </Link>

        <h1 className="mt-4 text-3xl font-bold tracking-tight">
          {project.title}
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span
              key={t}
              className="rounded-full border px-3 py-1 text-sm dark:border-zinc-800"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          {project.live && (
            <a
              className="rounded-lg bg-black px-4 py-2 text-white"
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              className="rounded-lg border px-4 py-2 dark:border-zinc-800"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
