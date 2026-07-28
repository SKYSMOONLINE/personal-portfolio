"use client";

import { ArrowUpRight, Check, Copy, Github, Mail, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { personalInfo } from "@/data/portfolio";
import SectionReveal from "./SectionReveal";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyWechat = async () => {
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
    try {
      await navigator.clipboard.writeText(personalInfo.wechat);
    } catch {
      const input = document.createElement("textarea");
      input.value = personalInfo.wechat;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }
  };

  return (
    <section id="contact" className="section-shell relative overflow-hidden bg-accent text-white">
      <div className="crosshair left-8 top-32 !border-white/60" />
      <SectionReveal>
        <div className="section-kicker !border-white/30"><span>05</span><span>CONTACT</span></div>
        <p className="micro-label uppercase text-white/70">HAVE A PROJECT IN MIND?</p>
        <h2 className="display-slogan mt-8 text-[clamp(3.5rem,10vw,10rem)] font-normal leading-[.82] tracking-[-.05em]">LET&apos;S MAKE<br /><span className="font-light italic">IDEAS</span> REAL.</h2>
        <div className="mt-14 flex flex-col items-start gap-4">
          <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-4 border-b border-white/50 pb-3 text-xl transition-colors hover:border-white md:text-3xl"><Mail />{personalInfo.email}<ArrowUpRight /></a>
          <a href={`tel:${personalInfo.phone}`} className="inline-flex items-center gap-3 text-lg text-white/80 transition-colors hover:text-white"><Phone size={20} />{personalInfo.phone}</a>
          <button type="button" onClick={copyWechat} className="inline-flex items-center gap-3 text-lg text-white/80 transition-colors hover:text-white" aria-live="polite">
            <MessageCircle size={20} />微信：{personalInfo.wechat}
            {copied ? <><Check size={17} />已复制</> : <><Copy size={17} />复制</>}
          </button>
        </div>
        <div className="mt-24 flex flex-col justify-between gap-8 border-t border-white/30 pt-6 sm:flex-row sm:items-center">
          <div className="flex gap-3">
            <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" aria-label="访问 GitHub 主页" className="grid h-12 w-12 place-items-center rounded-full border border-white/40 transition-colors hover:bg-white hover:text-accent"><Github size={18} /></a>
            <a href={`tel:${personalInfo.phone}`} aria-label={`拨打电话 ${personalInfo.phone}`} className="grid h-12 w-12 place-items-center rounded-full border border-white/40 transition-colors hover:bg-white hover:text-accent"><Phone size={18} /></a>
          </div>
          <p className="micro-label uppercase">© 2026 {personalInfo.name} · BUILT WITH INTENTION</p>
        </div>
      </SectionReveal>
    </section>
  );
}
