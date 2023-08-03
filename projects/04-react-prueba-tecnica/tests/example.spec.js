// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'
const ENDPOINT_CAT_IMG = 'https://cataas.com/cat/says/'

test('app show random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imgSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imgSrc?.startsWith(ENDPOINT_CAT_IMG)).toBeTruthy()
})
