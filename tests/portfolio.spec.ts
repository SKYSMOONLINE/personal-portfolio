import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => sessionStorage.setItem("portfolio-intro-seen", "true"));
});

test("renders the portfolio and core sections", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /DIGITAL IDEAS/i })).toBeVisible();
  await expect(page.locator("#about")).toBeAttached();
  await expect(page.locator("#projects")).toBeAttached();
  await expect(page.locator("#skills")).toBeAttached();
  await expect(page.locator("#experience")).toBeAttached();
  await expect(page.locator("#contact")).toBeAttached();
});

test("opens the card navigation and reaches its links", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "打开菜单" }).click();
  await expect(page.getByText("经历与作品", { exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "前往精选作品" })).toBeVisible();
  await page.getByRole("link", { name: "前往关于我" }).click();
  await expect(page.getByRole("button", { name: "打开菜单" })).toBeVisible();
});

test("traps and restores focus for the project dialog", async ({ page }) => {
  await page.goto("/");
  const trigger = page.locator(".project-card").first();
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(page.getByRole("button", { name: "关闭弹窗" })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
});

test("copies the WeChat ID", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/#contact");
  const copyButton = page.getByRole("button", { name: /微信：YYF13858500827/ });
  await copyButton.click();
  await expect(copyButton).toContainText("已复制");
  await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toBe("YYF13858500827");
});

test("has no horizontal page overflow", async ({ page }) => {
  await page.goto("/");
  const dimensions = await page.evaluate(() => ({ width: document.documentElement.clientWidth, scrollWidth: document.documentElement.scrollWidth }));
  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.width + 1);
});
