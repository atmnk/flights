import { test, expect } from '@playwright/test';
test('signup with valid details', async ({ page }) => {
    await page.goto('https://flights.sedinqa.com');

    await page.click(`//a[.='Login']`)

    await page.click(`//a[.='Sign Up']`)

    await page.fill(`[placeholder="First Name *"]`, 'Atmaram')

    await page.fill(`[placeholder="Last Name *"]`, 'Naik')

    await page.fill(`[placeholder="Username *"]`, 'atmnk9')

    await page.fill(`[placeholder="Email *"]`, 'atmnk9@gmail.com')

    await page.fill(`[placeholder="Password *"]`, 'Test1234')

    await page.fill(`[placeholder="Confirm Password *"]`, 'Test1234')

    await page.click(`//button[.='Sign Up']`)

    await expect(page.locator(`[data-sonner-toast]`)).toHaveText("User registered successfully.")
})