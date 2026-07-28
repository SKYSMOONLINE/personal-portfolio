"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { scrollToId } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-start overflow-hidden border-b border-line/30 pb-12 pt-24 md:pb-16 md:pt-28">
      <div className="crosshair left-[8.66vw] top-28" />
      <div className="crosshair bottom-28 right-[8.66vw]" />
      <div className="page-shell w-full">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="micro-label mb-12 flex items-center justify-between border-b border-line/40 pb-4 uppercase text-muted">
          <span>{personalInfo.location}</span><span className="explore-label">SCROLL TO EXPLORE ↓</span>
        </motion.div>

        <div className="grid items-end gap-10 lg:grid-cols-[1fr_280px]">
          <div>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }} className="mb-5 text-sm uppercase tracking-[.18em]">
              {personalInfo.role}
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1, duration: .9, ease: [0.22, 1, 0.36, 1] }} className="hero-title">
              DIGITAL <span className="font-light italic">IDEAS</span><br />BUILT TO <span className="text-accent">MOVE.</span>
            </motion.h1>
          </div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .45 }} className="space-y-7">
            <div className="relative h-40 w-40 overflow-hidden rounded-full border border-line/50 lg:ml-auto">
              <Image src={personalInfo.avatar} alt={`${personalInfo.name}的头像`} fill className="object-cover" priority />
            </div>
            <p className="text-lg leading-relaxed text-muted">{personalInfo.tagline}</p>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => scrollToId("#projects")} className="pill-button bg-ink text-paper">查看作品 <ArrowDownRight size={16} /></button>
              <a href={`mailto:${personalInfo.email}`} className="pill-button border border-line/60">联系我 <ArrowUpRight size={16} /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
