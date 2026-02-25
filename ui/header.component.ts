import { Page } from "@playwright/test";
HeaderComponent.LoginLocator=`//a[.='Login']`
export default function HeaderComponent(page:Page){
    return {
        async navigateToLogin(){
            await page.click(HeaderComponent.LoginLocator)
        }
    }
}