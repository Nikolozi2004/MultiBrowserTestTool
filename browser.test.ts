import { test } from '@playwright/test'

test('test browser', async ({ page }) => {
  // point this to wherever you want
  await page.goto('https://nikolozi2004.github.io/portfolio/')

  // keep browser open
  await page.pause()
})