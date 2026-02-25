import { Page } from "@playwright/test";
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
        async clickSignUpButton(){
            await page.click(SignUpPage.SignUpButtonLocator)
        }
    }
}