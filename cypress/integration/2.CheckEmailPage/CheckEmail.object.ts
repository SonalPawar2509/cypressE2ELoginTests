import locators from './CheckEmail.locators';

export const checkYourEmailText = () => {
    return cy.contains(locators.checkYourEmailText);
}
