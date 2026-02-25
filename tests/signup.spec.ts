import { test, expect } from '@playwright/test';
import HomePage from '../ui/home.page';
import LoginPage from '../ui/login.page';
import SignUpPage from '../ui/signup.page';
import { launchApplicationAndNavigateToSignUp } from '../steps/navigation.steps';
import { trySignUpWithSomeDetails } from '../steps/registration.steps';
test('signup with valid details', async ({ page }) => {

    await launchApplicationAndNavigateToSignUp(page)

    await trySignUpWithSomeDetails(page, {
        firstName: 'Atmaram',
        lastName: 'Naik',
        username: 'atmnk9',
        email: 'atmnk9@gmail.com',
        password: 'Test1234',
        confirmPassword: 'Test1234'
    })

    await HomePage(page).verifyUserIsRegistered()

})

for (const testcase of [{
    field: "firstName",
    placeholder: SignUpPage.FirstNameFieldPlaceholder,
    error: "First Name must be 3 characters or more"
}]) {
    test(`signup without ${testcase.field} should give error`, async ({ page }) => {

        await launchApplicationAndNavigateToSignUp(page)
        const data: any = {
            firstName: '',
            lastName: 'Naik',
            username: 'atmnk9',
            email: 'atmnk9@gmail.com',
            password: 'Test1234',
            confirmPassword: 'Test1234'
        }
        data[testcase.field] = ""
        await trySignUpWithSomeDetails(page, data)

        await SignUpPage(page).verifyErrorForFieldByPlaceHolder(testcase.placeholder, testcase.error)

    })
}
