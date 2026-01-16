import { useLang } from "../i18n/LanguageProvider";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <button
      type="button"
      onClick={() => setLang(lang === "en" ? "hi" : "en")}
      className="rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm font-bold text-zinc-800 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10"
      aria-label="Switch language"
      title="Switch language"
    >
      {lang === "en" ? "हिंदी" : "ENG"}
    </button>
  );
}
