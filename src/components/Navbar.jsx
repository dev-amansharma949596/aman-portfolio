import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur dark:bg-zinc-950/70">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          to="/"
          className="font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          Aman<span className="text-gray-500">.dev</span>
        </Link>

        <div className="flex items-center gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-700 hover:underline dark:text-gray-200"
            >
              {l.label}
            </a>
          ))}

          <Link
            to="/projects"
            className="rounded-lg border px-3 py-1.5 text-sm text-gray-800 hover:bg-gray-50 dark:border-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-900"
          >
            All Projects
          </Link>

          <button
            onClick={() => setDark((v) => !v)}
            className="rounded-lg border px-3 py-1.5 text-sm text-gray-800 hover:bg-gray-50 dark:border-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-900"
            type="button"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </nav>
    </header>
  );
}
