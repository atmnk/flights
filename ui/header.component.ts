import { Page, expect } from "@playwright/test";
HeaderComponent.LoginLocator = `//a[.='Login']`
export default function HeaderComponent(page: Page) {
    return {
        async navigateToLogin() {
            await page.click(HeaderComponent.LoginLocator)
        },
        async verifyUserIsRegistered() {
            await expect(page.locator(`[data-sonner-toast]`)).toHaveText("User registered successfully.")
        }
    }
}