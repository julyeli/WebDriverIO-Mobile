const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

Given(/^I am on th page (\w+)$/, async (webpage) => {
    await pages[webpage].open()
} );

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

When(/^I type the text (\w+) on the field (\w+)$/, async (word, field) => {
    switch (field) {
        case "search":
            await LoginPage.search(word)
        default:
            console.log('The option isn´t defined. Verify.')
    }
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

Then(/^I should see the total number the items desplayed$/, async () => {
    var totalNumber = await LoginPage.searchTotalResult();
    console.log('The total nhumber of items desplayed was '+totalNumber);
})
