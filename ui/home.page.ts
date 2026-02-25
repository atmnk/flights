import { Page } from "@playwright/test";
import HeaderComponent from "./header.component";

export default function HomePage(page:Page){
    return {
        ...HeaderComponent(page),
        async launch(){
             await page.goto('https://flights.sedinqa.com');
        }
    }
}