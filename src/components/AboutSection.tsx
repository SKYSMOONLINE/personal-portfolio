import { personalInfo, techStack } from "@/data/portfolio";
import SectionReveal from "./SectionReveal";

export default function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <SectionReveal>
        <div className="section-kicker"><span>01</span><span>ABOUT ME</span></div>
        <div className="grid gap-12 lg:grid-cols-[.8fr_2fr] lg:gap-24">
          <h2 className="section-title">DESIGNING<br /><span className="font-light italic text-accent">BETWEEN</span><br />DISCIPLINES.</h2>
          <div className="self-end">
            <p className="max-w-3xl text-2xl leading-[1.45] md:text-4xl md:leading-[1.3]">熟悉 Python、Java 等编程语言，能够独立使用 AI 编程工具进行项目开发，并具备 UI 设计审美。同时熟悉管理、谈判、招聘、现场统筹与工程施工管理，能够在技术与业务之间高效协作。</p>
            <p className="mt-8 max-w-2xl leading-relaxed text-muted">{personalInfo.intro}</p>
            <div className="mt-12 flex flex-wrap gap-2">
              {techStack.map((tech) => <span key={tech} className="tech-tag">{tech}</span>)}
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
