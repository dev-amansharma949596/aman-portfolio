import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useLang } from "../i18n/LanguageProvider";


function cn(...s) {
  return s.filter(Boolean).join(" ");
}

function useTypewriter(words, speed = 85, pause = 1200) {
  const [i, setI] = useState(0); // word index
  const [sub, setSub] = useState(0); // substring length
  const [deleting, setDeleting] = useState(false);

  const current = words[i % words.length];

  useEffect(() => {
    const isDone = !deleting && sub === current.length;
    const isEmpty = deleting && sub === 0;

    const t = setTimeout(() => {
      if (isDone) {
        // pause then delete
        setDeleting(true);
        return;
      }
      if (isEmpty) {
        setDeleting(false);
        setI((v) => (v + 1) % words.length);
        return;
      }
      setSub((v) => v + (deleting ? -1 : 1));
    }, isDone ? pause : deleting ? speed * 0.6 : speed);

    return () => clearTimeout(t);
  }, [words, i, sub, deleting, current, speed, pause]);

  return current.slice(0, sub);
}

export default function Hero() {
  const { t } = useLang();
  const roles = useMemo(
    () => ["Web Developer", "Wordpress Developer", "Basic React Developer" ],
    []
  );
  const typed = useTypewriter(roles, 90, 1200);

  return (
    <section id="home" className="relative overflow-hidden">
       

      <div className="relative mx-auto grid min-h-[78vh] max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="z-10"
        > 

          <h1 className=" text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-100 sm:text-5xl">
            {t("hero_title_1")} <span className="text-zinc-950 dark:text-zinc-100 me-3">{t("hero_title_2")}</span>{t("hero_title_3")}
          </h1>

          {/* Typewriter role */}
          <div className="mt-4 flex items-end gap-2">
            <h2 className="text-5xl font-extrabold tracking-tight text-green-900  sm:text-5xl">
              {typed}
            </h2>
            <span
              className={cn(
                "mb-2 inline-block h-10 w-[3px] bg-zinc-950 dark:bg-zinc-100 ",
                "animate-pulse"
              )}
            />
          </div>

          <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-950 dark:text-zinc-100 sm:text-base">
           {t("hero_desc")}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-green-900 px-7 py-3 text-sm font-semibold text-white  transition hover:brightness-50"
            >
             {t("btn_view_projects")}
            </a>
             
          </div>
        </motion.div>

        {/* RIGHT */}
        <div className="relative ">
          

          {/* portrait card */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="relative mx-auto max-w-[420px]"
          >
            {/* glow behind image */}
            <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-green-900/10 blur-2xl" />

            {/* floating effect */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5  "
            >
              {/* Replace with your own image */}
              <img
                src="../src/assets/AmanSharma.jpeg"
                alt="Profile"
                className="h-[420px] w-full object-cover object-top"
                 
              />
 
            </motion.div>
          </motion.div>
        </div>
      </div> 
    </section>
  );
}
