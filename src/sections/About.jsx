import SectionTitle from "../components/SectionTitle";
import AnimatedSection from "../components/AnimatedSection";

export default function About() {
  return (
    <AnimatedSection id="about" className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle
        title="About"
        subtitle="A short intro about who you are and what you build."
      />
      <div className="rounded-2xl border p-6 text-gray-700 dark:border-zinc-800 dark:text-gray-200">
        <p>
          Write 3–5 lines about your experience, your tech stack, and what kind
          of projects you like building.
        </p>
      </div>
    </AnimatedSection>
  );
}
