import { test, expect } from '@playwright/test'

test.describe('Layout mobile', () => {
  test.use({ viewport: { width: 390, height: 844 } })

  test('home mobile senza overflow orizzontale e CTA visibili', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await expect(page.getByRole('link', { name: 'home', exact: true })).toBeVisible()
    await expect(page.getByRole('link', { name: 'about', exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Marino Panariello/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /Esplora i lavori/i })).toBeVisible()

    const hasOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1)
    expect(hasOverflow).toBe(false)
  })

  test('works mostra immagini in layout mobile', async ({ page }) => {
    await page.goto('http://localhost:3000/works')
    const mobileGallery = page.locator('div.md\\:hidden').first()
    await expect(mobileGallery).toBeVisible()
    await expect(mobileGallery.locator('button').first()).toBeVisible()
  })
})
