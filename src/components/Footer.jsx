import { Send } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 pt-16">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            {/* Brand */}
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-green-700 text-white dark:bg-green-900">
                <span className="font-extrabold">A</span>
              </div>
              <div className="text-2xl font-extrabold text-zinc-900 dark:text-white">
                Aman
              </div>
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-600 dark:text-white/65">
              I help transform your ideas into pixel-perfect, responsive, and
              high-performing web applications. With expertise in modern front-end
              and MERN stack development, I ensure every project is scalable,
              efficient, and user-friendly. Let&apos;s collaborate and bring your
              vision online with clean code, creative design, and impactful
              results.
            </p>

            <h3 className="mt-10 text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
              Get Ready To Create Great
            </h3>

            {/* Email input */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex max-w-xl overflow-hidden rounded-md border border-zinc-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <input
                type="email"
                placeholder="Enter Your E-mail"
                className="w-full bg-transparent px-5 py-4 text-sm text-zinc-900 outline-none placeholder:text-zinc-500 dark:text-white dark:placeholder:text-white/50"
              />
              <button
                type="submit"
                className="grid w-16 place-items-center bg-green-700 text-white transition hover:brightness-110 dark:bg-green-900"
                aria-label="Send"
              >
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="text-2xl font-extrabold text-zinc-900 dark:text-white">
              Contact Info
            </h3>

            <div className="mt-6 space-y-3 text-sm font-semibold text-zinc-700 dark:text-white/60">
              <p>
                <span className="font-extrabold text-zinc-900 dark:text-white/80">
                  Address :
                </span>{" "}
                Mohali, India
              </p>
              <p>
                <span className="font-extrabold text-zinc-900 dark:text-white/80">
                  Mobile :
                </span>{" "}
                801701028688
              </p>
              <p>
                <span className="font-extrabold text-zinc-900 dark:text-white/80">
                  E-mail :
                </span>{" "}
                amansharmacool91@gmail.com
              </p>
            </div>

            {/* Map */}
            <div className="mt-6 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
              <iframe
                title="Map"
                className="h-[220px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d857.4917433508645!2d76.7059175323505!3d30.719328854818457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef2ee4ac8fd7%3A0x462653256b066f35!2sForce%20Gym!5e0!3m2!1sen!2sus!4v1768538610132!5m2!1sen!2sus"
              /> 
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-zinc-200 dark:bg-white/10" />

        {/* Bottom */}
        <div className="py-6 text-center text-sm font-semibold text-zinc-600 dark:text-white/60">
          ©{new Date().getFullYear()} | All Rights Reserved By{" "}
          <span className="text-zinc-900 dark:text-white/80">Rakeeb Hasan</span>
        </div>
      </div>
    </footer>
  );
}
