import { Page, test } from "@playwright/test"
import HomePage from "../ui/home.page"
import LoginPage from "../ui/login.page"

export const launchApplicationAndNavigateToSignUp = async (page: Page) => {
    await test.step('launch application and navigate to signup', async () => {
        await HomePage(page).launch()

        await HomePage(page).navigateToLogin()

        await LoginPage(page).navigateToSignUp()
    })

}