import locators from "./login.locators";

export const signUpButton = () => {
    return cy.get('div').contains(locators.signUpButtonText);
}

// export const submitButton = () => {
//     return cy.findByText(locators.submitButtonText);
// }

export const userNameTextBox = () => {
    return cy.get(locators.userNameTextBox);
}

export const userEmailTextBox = () => {
    return cy.get(locators.emailTextBox);
}

export const userPasswordTextBox = () => {
    return cy.get(locators.userPassTextBox);
}

export const acceptTAC = () => {
    return cy.get(locators.acceptTACCheckbox);
}

export const submitButton = () => {
    return cy.get('div').contains(locators.submitButtonText);
}

export const errorMessageDuplicateEmail = () => {
    return cy.get('div').contains(locators.emailErrorMessage);
}

export const infoMessageWeakPassword = () => {
    return cy.get('div').contains(locators.weakPasswordMessageText);
}

export const infoMessageMediumPassword = () => {
    return cy.get('div').contains(locators.mediumPasswordMessageText);
}

export const infoMessageGoodPassword = () => {
    return cy.get('div').contains(locators.goodMessageText);
}

export const miroLogo = () => {
    return cy.get('title').contains(locators.logoText);
}

export const loginButton = () => {
    return cy.get('a').contains(locators.loginButtonText);
}

export const gmailButton = () => {
    return cy.get('button').contains(locators.gmailButtonText);
}

export const slackButton = () => {
    return cy.get(locators.slackButtonImageAlt);
}

export const ms365Button = () => {
    return cy.get(locators.ms365ButtonImageAlt);
}

export const appleButton = () => {
    return cy.get(locators.appleButtonImageAlt);
}

export const facebookButton = () => {
    return cy.get(locators.facebookButtonImageAlt);
}

export const ssoTosCheckbox = () => {
    return cy.get(locators.acceptTosCheckbox);
}

export const ssoProceedWithRegistrationButton = () => {
    return cy.get('button').contains(locators.proceedWithRegistrationButtonText);
}
