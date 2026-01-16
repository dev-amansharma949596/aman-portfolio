import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useLang } from "../i18n/LanguageProvider";
import {
  Instagram, 
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";

const sections = ["home", "about", "services", "projects" ];

function cn(...s) {
  return s.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { t } = useLang();
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
 const navItems = [
  { label: t("nav_home"), id: "home" },
  { label: t("nav_about"), id: "about" },
  { label: t("nav_services"), id: "services" },
  { label: t("nav_projects"), id: "projects" }, 
];
  // theme
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true; // default dark like your screenshot
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  // Scroll spy for active pill (only on home page with sections)
  useEffect(() => {
    if (!isHome) return;

    const els = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (els.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // pick the most visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { root: null, threshold: [0.2, 0.35, 0.5, 0.65] }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [isHome]);

  // close menu on route change
  useEffect(() => setMenuOpen(false), [pathname]);

  const social = useMemo(
    () => [
      { Icon: Instagram, href: "#" }, 
    ],
    []
  );

  return (
    <header className="sticky top-0 z-50 ">
      {/* top blur bar */}
      <div className="border-b bg-white/70 backdrop-blur dark:border-white/10 dark:bg-zinc-950/100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* Left: logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-green-900 text-white">
              <span className="font-bold">A</span>
            </div>
            <span className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              Aman
            </span>
          </Link>

          {/* Center: pill nav (desktop) */}
          <div className="hidden md:block">
            <div className="relative flex items-center gap-2 rounded-2xl  p-1 ">
              {navItems.map((item) => {
                const isActive = isHome && active === item.id;
                return (
                  <a
                    key={item.id}
                    href={isHome ? `#${item.id}` : "/"}
                    onClick={() => setActive(item.id)}
                    className={cn(
                      "relative rounded-xl px-4 py-2 text-sm font-medium transition",
                      isActive
                        ? "text-white"
                        : "text-zinc-800 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-white/10"
                    )}
                  >
                    {isActive && (
                      <span className="absolute inset-0 -z-10 rounded-xl bg-green-900 shadow-[0_0_30px_rgba(236,72,153,0.35)]" />
                    )}
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: socials + theme + hamburger */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2">
              {social.map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border bg-white/50 text-zinc-800 transition hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setDark((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border bg-white/50 text-zinc-800 transition hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full bg-green-900 text-white transition hover:brightness-110 md:hidden"
              aria-label="Open menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden">
            <div className="mx-auto max-w-6xl px-4 pb-4">
              <div className="rounded-2xl border bg-white/70 p-2 backdrop-blur dark:border-white/10 dark:bg-zinc-950/60">
                {navItems.map((item) => {
                  const isActive = isHome && active === item.id;
                  return (
                    <a
                      key={item.id}
                      href={isHome ? `#${item.id}` : "/"}
                      onClick={() => {
                        setActive(item.id);
                        setMenuOpen(false);
                      }}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium",
                        isActive
                          ? "bg-green-900 text-white"
                          : "text-zinc-800 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-white/10"
                      )}
                    >
                      {item.label}
                      <span className="text-xs opacity-80">↵</span>
                    </a>
                  );
                })}

                <div className="mt-2 flex items-center gap-2 px-2 pb-1 sm:hidden">
                  {social.map(({ Icon, href }, idx) => (
                    <a
                      key={idx}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="grid h-10 w-10 place-items-center rounded-full border bg-white/50 text-zinc-800 transition hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
                 
              </div>
              
            </div>
            
          </div>
        )}
       
      </div>
    </header>
  );
}
