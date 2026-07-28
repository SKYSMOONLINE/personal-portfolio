export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function scrollToId(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}
