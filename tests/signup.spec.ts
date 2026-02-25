import { test, expect } from '@playwright/test';
import HomePage from '../ui/home.page';
import LoginPage from '../ui/login.page';
import SignUpPage from '../ui/signup.page';
test('signup with valid details', async ({ page }) => {
    await HomePage(page).launch()

    await HomePage(page).navigateToLogin()

    await LoginPage(page).navigateToSignUp()

    await SignUpPage(page).enterFieldByName(SignUpPage.FirstNameFieldPlaceholder, 'Atmaram')

    await SignUpPage(page).enterFieldByName(SignUpPage.LastNameFieldPlaceholder, 'Naik')

    await SignUpPage(page).enterFieldByName(SignUpPage.UsernameFieldPlaceholder, 'atmnk9')

    await SignUpPage(page).enterFieldByName(SignUpPage.EmailFieldPlaceholder, 'atmnk9@gmail.com')

    await SignUpPage(page).enterFieldByName(SignUpPage.PasswordFieldPlaceholder, 'Test1234')

    await SignUpPage(page).enterFieldByName(SignUpPage.ConfirmPasswordFieldPlaceholder, 'Test1234')

    await page.click(`//button[.='Sign Up']`)

    await expect(page.locator(`[data-sonner-toast]`)).toHaveText("User registered successfully.")
})


test('signup without firstname should give error', async ({ page }) => {
    await HomePage(page).launch()

    await HomePage(page).navigateToLogin()

    await LoginPage(page).navigateToSignUp()

    await SignUpPage(page).enterFieldByName(SignUpPage.FirstNameFieldPlaceholder, '')

    await SignUpPage(page).enterFieldByName(SignUpPage.LastNameFieldPlaceholder, 'Naik')

    await SignUpPage(page).enterFieldByName(SignUpPage.UsernameFieldPlaceholder, 'atmnk9')

    await SignUpPage(page).enterFieldByName(SignUpPage.EmailFieldPlaceholder, 'atmnk9@gmail.com')

    await SignUpPage(page).enterFieldByName(SignUpPage.PasswordFieldPlaceholder, 'Test1234')

    await SignUpPage(page).enterFieldByName(SignUpPage.ConfirmPasswordFieldPlaceholder, 'Test1234')

    await page.click(`//button[.='Sign Up']`)

    expect(page.locator(`[placeholder="First Name *"] + [data-slot='form-message']`)).toHaveText("First Name must be 3 characters or more")
})