"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import SectionReveal from "./SectionReveal";

export default function SkillsSection() {
  return (
    <section id="skills" className="section-shell bg-ink text-paper">
      <SectionReveal>
        <div className="section-kicker !border-paper/20"><span>03</span><span>CAPABILITIES</span></div>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div><h2 className="section-title">IDEAS,<br /><span className="font-light italic text-accent">MADE</span><br />ACTIONABLE.</h2><p className="mt-8 max-w-md leading-relaxed text-paper/60">以管理思维理解业务，以数据分析定位问题，以 AI 与编程工具提升执行效率，在沟通协作中推动方案落地。</p></div>
          <div className="self-end">
            {skills.map((skill) => (
              <div key={skill.name} className="border-t border-paper/20 py-7 last:border-b">
                <div className="mb-5 flex items-center justify-between"><span className="text-lg md:text-2xl">{skill.name}</span><span className="micro-label text-paper/50">{skill.code} / {skill.level}%</span></div>
                <div className="h-px bg-paper/15"><motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }} className="h-px bg-accent" /></div>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
