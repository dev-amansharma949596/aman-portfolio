export default function ToolkitMarquee() { 

  const logos = [
    { name: "Html", src: "/src/assets/logo/html-logo.png" },
    { name: "CSS3", src: "/src/assets/logo/css3-icon.png" },
    { name: "Bootstrap", src: "/src/assets/logo/bootstrap-logo.png" },
    { name: "Tailwind", src: "/src/assets/logo/Tailwind-Css-Logo.png" },
    { name: "JavaScript", src: "/src/assets/logo/js-icon.png" },
    { name: "jQuery", src: "/src/assets/logo/jquery-icon.png" },
    { name: "Php", src: "/src/assets/logo/php-logo.png" },
    { name: "React", src: "/src/assets/logo/react-icon.png" },
    { name: "Node.js", src: "/src/assets/logo/node-js-icon.png" },
    { name: "Git", src: "/src/assets/logo/git-crm-logo.png" },
    { name: "Github", src: "/src/assets/logo/Git-Hub-Logo.png" },
    { name: "MongoDB", src: "/src/assets/logo/mongodb-icon.png" },
    { name: "Mysql", src: "/src/assets/logo/mysql-logo.png" },
    { name: "Photoshop", src: "/src/assets/logo/photoshop-icon.png" },
    { name: "Figma", src: "/src/assets/logo/figma-icon.png" },
    { name: "XD", src: "/src/assets/logo/xd-icon.png" }, 
  ];

  // duplicate list for seamless loop
  const loop = [...logos, ...logos];

  return (
    <section id="toolkit" className="bg-white py-16 dark:bg-zinc-950">
      <div className="w-full px-4">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-white sm:text-3xl">
            My Development Toolkit
          </h2>

          {/* underline with small green center */}
          <div className="mx-auto mt-4 flex w-[220px] items-center justify-center gap-2">
            <div className="h-[3px] flex-1 bg-zinc-300 dark:bg-white/15" />
            <div className="h-[6px] w-10 rounded-full bg-green-700 dark:bg-green-900" />
            <div className="h-[3px] flex-1 bg-zinc-300 dark:bg-white/15" />
          </div>
        </div>

        {/* Marquee */}
        <div className="relative mt-10 overflow-hidden">
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent dark:from-zinc-950" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent dark:from-zinc-950" />

          <div
            className="flex w-[200%] gap-5"
            style={{
              animation: "marquee 45s linear infinite",
            }}
          >
            {loop.map((l, idx) => (
              <LogoCard key={`${l.name}-${idx}`} {...l} />
            ))}
          </div>
        </div>

        {/* Optional: pause on hover */}
        <style>{`
          #toolkit .marquee:hover { animation-play-state: paused; }
        `}</style>
      </div>
    </section>
  );
}

function LogoCard({ name, src }) {
  return (
    <div className="flex h-[100px] w-[130px] sm:w-[140px] lg:w-[150px] items-center justify-center  rounded-[16px] bg-zinc-900 shadow-sm ring-1 ring-black/5 dark:bg-white/5 dark:ring-white/10">
      <img
        src={src}
        alt={name}
        title={name}
        className="h-14 w-24 object-contain opacity-90"
        onError={(e) => {
          // fallback if logo missing
          e.currentTarget.style.display = "none";
        }}
      />
      <span className="sr-only">{name}</span>
    </div>
  );
}
