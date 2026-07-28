import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://skysmoonline.github.io"),
  title: "应宇烽 — AI 应用与管理人才",
  description: "应宇烽的个人作品集，聚焦 AI 工具应用、数据分析、项目开发与管理实践。",
  applicationName: "应宇烽个人作品集",
  authors: [{ name: "应宇烽", url: "https://github.com/SKYSMOONLINE" }],
  keywords: ["应宇烽", "AI 工具", "数据分析", "Python", "Java", "项目管理", "个人作品集"],
  alternates: { canonical: "/" },
  icons: { icon: "/icon.svg" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    title: "应宇烽 — AI 应用与管理人才",
    description: "聚焦 AI 工具应用、数据分析、项目开发与管理实践。",
    url: "/",
    siteName: "应宇烽个人作品集",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "应宇烽个人作品集" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "应宇烽 — AI 应用与管理人才",
    description: "聚焦 AI 工具应用、数据分析、项目开发与管理实践。",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
