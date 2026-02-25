import { Page, expect } from "@playwright/test";
SignUpPage.FirstNameFieldPlaceholder = "First Name *"
SignUpPage.LastNameFieldPlaceholder = "Last Name *"
SignUpPage.UsernameFieldPlaceholder = "Username *"
SignUpPage.EmailFieldPlaceholder = "Email *"
SignUpPage.PasswordFieldPlaceholder = "Password *"
SignUpPage.ConfirmPasswordFieldPlaceholder = "Confirm Password *"
SignUpPage.SignUpButtonLocator = `//button[.='Sign Up']`
export default function SignUpPage(page: Page) {
    const fieldLocatorByPlaceholder = (placeholder: string) => `[placeholder='${placeholder}']`
    return {
        async enterFieldByName(placeholder: string, value: string) {
            await page.fill(fieldLocatorByPlaceholder(placeholder), value)
        },
        async clickSignUpButton() {
            await page.click(SignUpPage.SignUpButtonLocator)
        },
        async verifyErrorForFieldByPlaceHolder(palceholder: string, error: string) {
            await expect(page.locator(`[placeholder="${palceholder}"] + [data-slot='form-message']`)).toHaveText(error)
        }
    }
}