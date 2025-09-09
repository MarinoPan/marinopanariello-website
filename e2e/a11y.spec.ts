import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('Accessibility', () => {
  test('home has no critical a11y violations', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    // Skip link present
    await expect(page.locator('a.skip-link')).toBeVisible()
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze()
    const violations = accessibilityScanResults.violations
    const critical = violations.filter(v => ['serious', 'critical'].includes(v.impact || ''))
    console.log('A11y violations:', violations)
    expect(critical).toEqual([])
  })

  test('works page sections are reachable and have headings', async ({ page }) => {
    await page.goto('http://localhost:3000/works')
    // Ensure headings exist
    await expect(page.getByRole('heading', { name: /Works/i })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Launched/i })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Design/i })).toBeVisible()
  })
})

