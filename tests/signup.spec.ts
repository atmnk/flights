import { test, expect } from '@playwright/test';
import HomePage from '../ui/home.page';
import LoginPage from '../ui/login.page';
test('signup with valid details', async ({ page }) => {
    await HomePage(page).launch()

    await HomePage(page).navigateToLogin()

    await LoginPage(page).navigateToSignUp()

    await page.fill(`[placeholder="First Name *"]`, 'Atmaram')

    await page.fill(`[placeholder="Last Name *"]`, 'Naik')

    await page.fill(`[placeholder="Username *"]`, 'atmnk9')

    await page.fill(`[placeholder="Email *"]`, 'atmnk9@gmail.com')

    await page.fill(`[placeholder="Password *"]`, 'Test1234')

    await page.fill(`[placeholder="Confirm Password *"]`, 'Test1234')

    await page.click(`//button[.='Sign Up']`)

    await expect(page.locator(`[data-sonner-toast]`)).toHaveText("User registered successfully.")
})


test('signup without firstname should give error', async ({ page }) => {
    await HomePage(page).launch()

    await HomePage(page).navigateToLogin()

    await LoginPage(page).navigateToSignUp()

    await page.fill(`[placeholder="First Name *"]`, '')

    await page.fill(`[placeholder="Last Name *"]`, 'Naik')

    await page.fill(`[placeholder="Username *"]`, 'atmnk9')

    await page.fill(`[placeholder="Email *"]`, 'atmnk9@gmail.com')

    await page.fill(`[placeholder="Password *"]`, 'Test1234')

    await page.fill(`[placeholder="Confirm Password *"]`, 'Test1234')

    await page.click(`//button[.='Sign Up']`)

    expect(page.locator(`[placeholder="First Name *"] + [data-slot='form-message']`)).toHaveText("First Name must be 3 characters or more")
})