import { Page } from "@playwright/test"

LoginPage.SignUpLinkLocator=`//a[.='Sign Up']`
export default function LoginPage(page:Page){
    return {
        async navigateToSignUp(){
            await page.click(LoginPage.SignUpLinkLocator)
        }
    }
}