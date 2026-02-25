import { Page, test } from "@playwright/test"
import SignUpPage from "../ui/signup.page"

export const trySignUpWithSomeDetails = async (page: Page, data:
    { firstName: string, lastName: string, username: string, email: string, password: string, confirmPassword: string }) => {
    await test.step('try sign up with some details', async () => {
        await SignUpPage(page).enterFieldByName(SignUpPage.FirstNameFieldPlaceholder, data.firstName)

        await SignUpPage(page).enterFieldByName(SignUpPage.LastNameFieldPlaceholder, data.lastName)

        await SignUpPage(page).enterFieldByName(SignUpPage.UsernameFieldPlaceholder, data.username)

        await SignUpPage(page).enterFieldByName(SignUpPage.EmailFieldPlaceholder, data.email)

        await SignUpPage(page).enterFieldByName(SignUpPage.PasswordFieldPlaceholder, data.password)

        await SignUpPage(page).enterFieldByName(SignUpPage.ConfirmPasswordFieldPlaceholder, data.confirmPassword)

        await SignUpPage(page).clickSignUpButton()
    })
}