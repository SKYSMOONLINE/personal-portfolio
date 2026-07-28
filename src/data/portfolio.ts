export type Project = {
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
};

export const personalInfo = {
  name: "应宇烽",
  role: "AI 应用与管理人才",
  location: "CHINA · OPEN TO OPPORTUNITIES",
  tagline: "用清晰的逻辑拆解问题，用 AI 与数据工具把业务需求转化为可执行方案。",
  intro:
    "逻辑思维清晰，学习与接受能力强，能够快速掌握 AI 相关理论与工具。我注重效率，善于利用技术手段优化工作流程，具备较强的数据分析意识与问题拆解能力，能够将业务需求转化为清晰、可执行的方案。表达与总结能力强，善于跨团队沟通协作。",
  phone: "13858500827",
  email: "2358824531@qq.com",
  wechat: "YYF13858500827",
  avatar: "/avatar-profile.webp",
  socials: {
    github: "https://github.com/SKYSMOONLINE",
  },
};

export const projects: Project[] = [
  {
    title: "NOCTURNE OS",
    category: "DIGITAL PRODUCT · 2026",
    description: "为独立音乐人打造的沉浸式创作与发行工作台。",
    longDescription:
      "从信息架构、视觉系统到 WebGL 声音可视化的完整产品设计。通过可组合工作流，让音乐人能够在一个空间完成创作管理、协作与发行。",
    image: "/projects/nocturne.svg",
    tech: ["Next.js", "TypeScript", "WebGL", "GSAP"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/",
  },
  {
    title: "FIELD NOTES",
    category: "EDITORIAL PLATFORM · 2025",
    description: "连接城市、影像与私人观察的数字出版平台。",
    longDescription:
      "一个强调阅读节奏的内容平台。采用模块化编辑器、动态排版与离线优先策略，让长篇内容在不同设备上都保持出版物般的秩序。",
    image: "/projects/field-notes.svg",
    tech: ["React", "Sanity", "Framer Motion", "PWA"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/",
  },
  {
    title: "KINETIC LAB",
    category: "EXPERIMENTAL WEB · 2025",
    description: "探索字体、物理与声音关系的实时交互实验室。",
    longDescription:
      "一组浏览器端创意编码实验，用户可以通过鼠标、触摸与麦克风改变字体形态。项目重点关注性能预算与低动态偏好降级。",
    image: "/projects/kinetic.svg",
    tech: ["Three.js", "Web Audio", "GLSL", "Vite"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/",
  },
  {
    title: "COMMON GROUND",
    category: "BRAND EXPERIENCE · 2024",
    description: "面向城市公共空间计划的开放品牌与服务网站。",
    longDescription:
      "把复杂的公共参与流程转化为可理解的数字旅程。设计系统同时服务网站、活动物料和数据报告，并满足 WCAG AA 可访问性要求。",
    image: "/projects/common-ground.svg",
    tech: ["Next.js", "Tailwind", "Mapbox", "Contentful"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/",
  },
];

export const skills = [
  { name: "AI 工具与项目开发", level: 90, code: "01" },
  { name: "数据分析与问题拆解", level: 88, code: "02" },
  { name: "沟通、谈判与团队协作", level: 86, code: "03" },
  { name: "统筹协调与流程管理", level: 85, code: "04" },
];

export const techStack = [
  "Python",
  "Java",
  "AI 编程工具",
  "数据分析",
  "UI 设计",
  "Word / Excel / PowerPoint",
  "招聘与谈判",
  "工程施工管理",
  "财务统筹与报销",
  "C1 驾驶证",
];

export const experiences = [
  {
    period: "2026.06",
    role: "招聘数据分析",
    company: "江苏领航服务外包有限公司",
    description: "运用数据分析工具对招聘群体特征进行多维度分析，构建用户画像并制定招聘策略；优化渠道调研与区域拓展流程，以数据驱动的方式评估渠道效果，提升决策效率。",
  },
  {
    period: "2026.03 — 04",
    role: "工程资料管理",
    company: "杭州市设备安装有限公司",
    description: "利用数字化工具对施工资料进行结构化整理与分类归档，确保工程数据的准确性与完整性，为项目进度管理提供数据支撑。",
  },
  {
    period: "2022.09 — 2026.06",
    role: "管理学学士",
    company: "南京工业大学",
    description: "系统研究管理科学的发展与应用，形成管理、数据分析、沟通协作与问题解决等综合能力。",
  },
  {
    period: "在校期间",
    role: "生活委员",
    company: "班级事务管理",
    description: "独立负责班级活动经费的统筹、管理与报销，积累了财务记录、预算协调和集体事务沟通经验。",
  },
];

export const navItems = [
  { label: "关于", href: "#about" },
  { label: "作品", href: "#projects" },
  { label: "能力", href: "#skills" },
  { label: "经历", href: "#experience" },
  { label: "联系", href: "#contact" },
];
