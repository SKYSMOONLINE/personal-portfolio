"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, Plus, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { projects, type Project } from "@/data/portfolio";
import SectionReveal from "./SectionReveal";

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button, a[href], [tabindex]:not([tabindex="-1"])'));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      triggerRef.current?.focus();
    };
  }, [selected]);

  return (
    <section id="projects" className="section-shell">
      <SectionReveal>
        <div className="section-kicker"><span>02</span><span>SELECTED WORK</span></div>
        <div className="mb-16 flex items-end justify-between gap-8">
          <h2 className="section-title">SELECTED<br /><span className="font-light italic">WORKS.</span></h2>
          <span className="micro-label hidden text-muted md:block">04 PROJECTS / 2024—26</span>
        </div>
        <div className="grid gap-x-5 gap-y-14 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.button key={project.title} onClick={(event) => { triggerRef.current = event.currentTarget; setSelected(project); }} whileHover="hover" className="project-card text-left" aria-haspopup="dialog">
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <motion.div variants={{ hover: { scale: 1.035 } }} transition={{ duration: .6 }} className="absolute inset-0">
                  <Image src={project.image} alt={`${project.title} 项目截图`} fill className="object-cover" />
                </motion.div>
                <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-black"><Plus size={18} /></span>
              </div>
              <div className="flex justify-between gap-6 border-t border-line/50 pt-5">
                <div><p className="micro-label uppercase text-muted">{project.category}</p><h3 className="mt-2 text-2xl md:text-3xl">{project.title}</h3></div>
                <span className="micro-label text-muted">0{index + 1}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </SectionReveal>

      <AnimatePresence>
        {selected && (
          <motion.div ref={dialogRef} className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-4 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(e) => e.target === e.currentTarget && setSelected(null)} role="dialog" aria-modal="true" aria-labelledby="project-dialog-title">
            <motion.div initial={{ opacity: 0, y: 40, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30 }} className="max-h-[92vh] w-full max-w-5xl overflow-y-auto border border-line/50 bg-paper">
              <div className="flex items-center justify-between border-b border-line/40 p-5"><span className="micro-label uppercase">PROJECT DETAIL</span><button ref={closeButtonRef} onClick={() => setSelected(null)} className="icon-button" aria-label="关闭弹窗"><X size={18} /></button></div>
              <div className="grid lg:grid-cols-2">
                <div className="relative min-h-72 bg-black lg:min-h-[560px]"><Image src={selected.image} alt={selected.title} fill className="object-cover" /></div>
                <div className="flex flex-col justify-between p-7 md:p-12">
                  <div><p className="micro-label uppercase text-muted">{selected.category}</p><h3 id="project-dialog-title" className="mt-5 text-5xl leading-none md:text-6xl">{selected.title}</h3><p className="mt-8 text-lg leading-relaxed text-muted">{selected.longDescription}</p><div className="mt-8 flex flex-wrap gap-2">{selected.tech.map((item) => <span className="tech-tag" key={item}>{item}</span>)}</div></div>
                  <div className="mt-12 flex flex-wrap gap-3"><a className="pill-button bg-ink text-paper" href={selected.demoUrl} target="_blank" rel="noreferrer">在线演示 <ExternalLink size={15} /></a><a className="pill-button border border-line/60" href={selected.githubUrl} target="_blank" rel="noreferrer">查看源码 <Github size={15} /></a></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
