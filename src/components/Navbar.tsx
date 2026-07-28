"use client";

import CardNav, { type CardNavItem } from "./CardNav";
import { personalInfo } from "@/data/portfolio";

const items: CardNavItem[] = [
  {
    label: "个人",
    bgColor: "#17131c",
    textColor: "#ffffff",
    links: [
      { label: "关于我", ariaLabel: "前往关于我", href: "#about" },
      { label: "个人优势", ariaLabel: "前往个人优势", href: "#skills" },
    ],
  },
  {
    label: "经历与作品",
    bgColor: "#302735",
    textColor: "#ffffff",
    links: [
      { label: "精选作品", ariaLabel: "前往精选作品", href: "#projects" },
      { label: "职业经历", ariaLabel: "前往职业经历", href: "#experience" },
    ],
  },
  {
    label: "联系方式",
    bgColor: "#f0140a",
    textColor: "#ffffff",
    links: [
      { label: "发送邮件", ariaLabel: `发送邮件至 ${personalInfo.email}`, href: `mailto:${personalInfo.email}` },
      { label: "GitHub", ariaLabel: "访问 GitHub 主页", href: personalInfo.socials.github },
      { label: "电话联系", ariaLabel: `拨打电话 ${personalInfo.phone}`, href: `tel:${personalInfo.phone}` },
    ],
  },
];

export default function Navbar() {
  return (
    <CardNav
      brand="应宇烽 · 个人作品集"
      logoAlt="应宇烽个人作品集"
      items={items}
      baseColor="#efefeb"
      menuColor="#111111"
      buttonBgColor="#111111"
      buttonTextColor="#ffffff"
      buttonLabel="联系我"
      buttonHref="#contact"
      ease="power3.out"
    />
  );
}
