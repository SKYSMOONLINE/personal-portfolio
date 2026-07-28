import { experiences } from "@/data/portfolio";
import SectionReveal from "./SectionReveal";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-shell">
      <SectionReveal>
        <div className="section-kicker"><span>04</span><span>EXPERIENCE</span></div>
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.5fr] lg:gap-24">
          <h2 className="section-title">A PATH<br /><span className="font-light italic">THROUGH</span><br />GROWTH.</h2>
          <ol>
            {experiences.map((item, index) => (
              <li key={item.period} className="grid gap-4 border-t border-line/50 py-8 sm:grid-cols-[120px_1fr]">
                <span className="micro-label text-muted">{item.period}</span>
                <div className="grid gap-4 md:grid-cols-[1fr_1.2fr]"><div><h3 className="text-xl">{item.role}</h3><p className="mt-1 text-sm text-accent">{item.company}</p></div><p className="leading-relaxed text-muted">{item.description}</p></div>
                <span className="hidden">{index + 1}</span>
              </li>
            ))}
          </ol>
        </div>
      </SectionReveal>
    </section>
  );
}
