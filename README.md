# 应宇烽个人作品集：技术文档

这是一个以中文内容为主的响应式个人作品集，采用 Next.js 静态导出架构，展示个人简介、项目、能力、教育与职业经历以及联系方式。

## 当前状态

- 开发地址：`http://localhost:3000`
- 构建模式：静态导出至 `out/`
- ESLint、TypeScript、生产构建均已通过
- Playwright 桌面端与移动端测试：10/10 通过
- npm 安全审计：0 个已知漏洞

## 技术栈

| 类别 | 技术 |
| --- | --- |
| 核心框架 | Next.js 16、React 19、App Router |
| 开发语言 | TypeScript、TSX、JavaScript、GLSL |
| 样式 | Tailwind CSS 3、普通 CSS |
| 动画 | Framer Motion、GSAP |
| WebGL | OGL、GLSL Shader |
| 主题 | next-themes |
| 图标 | Lucide React |
| 测试 | Playwright |
| 静态预览 | serve |

## 页面结构

首页由以下区块组成：

1. Hero：职业定位、主标语、头像和核心行动按钮
2. About：个人简介、技术能力和管理能力
3. Projects：项目卡片与详情弹窗
4. Skills：个人优势和能力进度
5. Experience：教育、工作和班级事务经历
6. Contact：邮箱、电话、微信复制和 GitHub

页面入口位于 `src/app/page.tsx`，各区块位于 `src/components/`。

## 核心组件

### CardNav

- 使用 GSAP 控制导航容器和卡片展开动画
- 将导航分为“个人、经历与作品、联系方式”三组
- 支持桌面端和移动端布局
- 包含亮暗主题切换按钮
- 展开内容使用真实锚点、邮箱、电话和 GitHub 链接

### Iridescence

- 使用 OGL 和 GLSL 绘制动态 WebGL 背景
- 桌面端最高 DPR 为 1.5，移动端限制为 1
- 页面进入后台时暂停动画帧
- 用户启用“减少动态效果”后仅渲染静态帧
- 页面内容上方使用半透明主题遮罩保证文字可读性

### EntranceLoader

- 首次进入当前浏览器会话时播放启动动画
- 使用 `sessionStorage` 避免同一会话重复播放
- 标准时长约 1.1 秒
- “减少动态效果”模式下缩短至约 150ms
- 动画期间锁定页面滚动，退出后恢复

### ProjectsSection

- 项目卡片支持鼠标悬停动画
- 点击后打开项目详情弹窗
- 支持 Esc 关闭
- 打开后自动聚焦关闭按钮
- Tab 焦点限制在弹窗内部
- 关闭后焦点返回原项目卡片

### ContactSection

- 邮箱使用 `mailto:`
- 电话使用 `tel:`
- GitHub 在新窗口打开
- 微信号通过 Clipboard API 复制
- Clipboard API 不可用时使用兼容复制方案
- 复制完成后显示短暂状态反馈

## 字体体系

- 大型英文标语：Bahnschrift
- 中文正文：MiSans
- 英文辅助标签：Myriad Pro / Myriad
- 未安装指定字体时自动回退至系统无衬线字体

当前字体通过 CSS 字体栈调用，没有将字体文件打包进项目。正式公开部署前需确认字体授权及跨平台显示需求。

## 视觉与内容语言

- 中文作为个人信息与正文的主要语言
- 大型视觉标语与辅助标签使用英文
- 强调色为红色，支持亮暗主题变量
- Hero 内容顶部对齐，在悬浮导航栏下保留安全距离

## 数据维护

个人资料集中维护在：

```text
src/data/portfolio.ts
```

该文件包含：

- 姓名、定位、简介
- 电话、邮箱、微信、GitHub
- 头像路径
- 项目列表
- 能力数据
- 技术栈
- 教育和职业经历

项目内容中的演示地址目前仍包含占位链接，后续应替换为真实项目地址。

## 静态资源

- 头像：`public/avatar-profile.webp`
- favicon：`public/icon.svg`
- 社交分享图：`public/og-image.png`
- 项目图片：`public/projects/`

头像已压缩为 640 × 640 WebP，文件约 45KB。

## SEO

项目已包含：

- 页面标题和描述
- 关键词及作者信息
- canonical URL
- Open Graph 元数据
- Twitter Card 元数据
- favicon
- `robots.txt`
- `sitemap.xml`

正式部署前，复制 `.env.example` 为 `.env.local`，设置：

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

## 本地开发

```bash
npm install
npm run dev
```

访问：

```text
http://localhost:3000
```

## 质量检查

```bash
npm run lint
npm run build
npm audit
npm run test:e2e
```

Playwright 覆盖：

- 首页与核心区块渲染
- CardNav 展开与锚点跳转
- 项目弹窗焦点管理
- 微信号复制
- 桌面端和移动端横向溢出检查

## 构建与预览

```bash
npm run build
npm run preview
```

`npm run build` 将静态站点生成至 `out/`，`npm run preview` 使用 `serve` 提供本地静态预览。

## 部署

`out/` 可部署到：

- GitHub Pages
- Cloudflare Pages
- Netlify
- Vercel 静态托管
- Nginx 或其他静态服务器

部署平台应将发布目录设置为 `out`。

## 目录结构

```text
portfolio-nextjs/
├─ public/                 静态图片、图标和分享图
├─ src/
│  ├─ app/                页面入口、全局样式、SEO 路由
│  ├─ components/         页面区块和交互组件
│  ├─ data/               个人资料与展示数据
│  └─ lib/                通用工具
├─ tests/                 Playwright 端到端测试
├─ next.config.js         Next.js 静态导出配置
├─ playwright.config.ts   E2E 测试配置
├─ tailwind.config.ts     Tailwind 主题配置
└─ package.json           脚本与依赖
```

## 已知待办

- 将四个示例项目替换为真实项目案例
- 替换项目演示与源码占位链接
- 根据授权和部署目标决定是否本地打包字体
- 正式部署时设置真实 `NEXT_PUBLIC_SITE_URL`
