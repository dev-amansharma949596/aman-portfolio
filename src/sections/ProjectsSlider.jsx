import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const projects = [
  {
    title: "Orange Car Wash",
    img: "/projects/Orange-Car-Wash.png",
    live: "https://example.com",
  },
  {
    title: "My Living Choice",
    img: "/projects/My-Living-Choice.png",
    live: "https://example.com",
  },
  {
    title: "My Living Choice2",
    img: "/projects/My-Living-Choice.png",
    live: "https://example.com",
  },
  {
    title: "My Living Choice3",
    img: "/projects/My-Living-Choice.png",
    live: "https://example.com",
  },
  {
    title: "My Living Choice4",
    img: "/projects/My-Living-Choice.png",
    live: "https://example.com",
  },
  {
    title: "My Living Choice5",
    img: "/projects/My-Living-Choice.png",
    live: "https://example.com",
  }, 
  // add more...
];

export default function ProjectsSlider() {
  return (
    <section id="projects" className="bg-white py-16 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-white sm:text-3xl">
            Recent Project&apos;s
          </h2>

          {/* underline */}
          <div className="mx-auto mt-4 flex w-[200px] items-center justify-center gap-2">
            <div className="h-[3px] flex-1 bg-zinc-300 dark:bg-white/15" />
            <div className="h-[6px] w-10 rounded-full bg-green-700 dark:bg-green-900" />
            <div className="h-[3px] flex-1 bg-zinc-300 dark:bg-white/15" />
          </div>
        </div>

        {/* Slider */}
        <div className="mt-10">
          <Swiper
            modules={[EffectCoverflow, Autoplay]}
            effect="coverflow"
            centeredSlides
            grabCursor
            loop
            slidesPerView="auto"
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            coverflowEffect={{ rotate: 45, depth: 260, modifier: 1 }}

            className="!py-8"
          >
            {projects.map((p) => (
              <SwiperSlide
                key={p.title}
                className="!w-[320px] sm:!w-[360px] md:!w-[420px]"
              >
                <ProjectCard project={p} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="group relative overflow-hidden rounded-[18px] bg-white/5   ring-1 ring-white/10">
      <img
        src={project.img}
        alt={project.title}
        className="h-[420px] w-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />

       

      {/* bottom label */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent p-5">
        <div className="text-center">
          <div className="text-xl font-extrabold text-green-700 dark:text-green-900">
            {project.title}
          </div>
          {project.live && (
            <div className="mt-1 text-sm font-semibold text-white/80">
              Live Link
            </div>
          )}
        </div>
      </div>

      {/* clickable overlay */}
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="absolute inset-0"
          aria-label={`Open ${project.title}`}
        />
      )}
    </div>
  );
}
