// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'

test('has title', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  await expect(page.getByText('Buscador de Peliculas')).toBeVisible()
  await expect(page.getByRole('banner')).toHaveClass('heading')
})

test('has input to search movies', async ({ page }) => {
  await page.goto(LOCALHOST_URL)
  await expect(page.getByLabel('Ingrese una pelicula:')).toBeVisible()
  await expect(page.getByRole('textbox')).toHaveAttribute('placeholder', 'Avengers, Batman, Shrek, Los Locos Adams, Matilda')
})

test('has input to sort movies', async ({ page }) => {
  await page.goto(LOCALHOST_URL)
  await expect(page.getByLabel('Ordernar por:')).toBeVisible()
  await expect(page.getByRole('option')).toHaveCount(4)
})
