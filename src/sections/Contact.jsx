import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed");

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setError(err.message || "Something went wrong");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle title="Contact" subtitle="Let’s build something together." />

      <form
        className="grid gap-3 rounded-2xl border p-6 sm:max-w-xl dark:border-zinc-800"
        onSubmit={onSubmit}
      >
        <input
          className="rounded-lg border px-3 py-2 dark:border-zinc-800 dark:bg-zinc-900"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
        />
        <input
          className="rounded-lg border px-3 py-2 dark:border-zinc-800 dark:bg-zinc-900"
          placeholder="Your email"
          type="email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
        />
        <textarea
          className="min-h-32 rounded-lg border px-3 py-2 dark:border-zinc-800 dark:bg-zinc-900"
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
        />

        <button
          disabled={status === "sending"}
          className="rounded-lg bg-black px-4 py-2 text-white disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send"}
        </button>

        {status === "sent" && (
          <p className="text-sm text-green-600">Message sent successfully.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-600">{error}</p>
        )}
      </form>
    </section>
  );
}
