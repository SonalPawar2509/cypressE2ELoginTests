/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
/// <reference types="@types/node" />

import acceptCookies from "../../helpers/acceptCookies";
import {
    appleButton, facebookButton,
    gmailButton, ms365Button,
    signUpButton, slackButton, ssoProceedWithRegistrationButton, ssoTosCheckbox
} from "./login.objects";


describe('Miro Login SSO Navigation Test Suite', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    })

    it('1.Miro Gmail SSO Test',  () => {
        acceptCookies();
        signUpButton().click();
        gmailButton().click();
        ssoTosCheckbox().click({force:true});
        ssoProceedWithRegistrationButton().should('exist');
    });

    it('2.Miro Slack SSO Test',  () => {
        acceptCookies();
        signUpButton().click();
        slackButton().click();
        ssoTosCheckbox().click({force:true});
        ssoProceedWithRegistrationButton().should('exist');
    });

    it('3.Miro MS 365 SSO Test',  () => {
        acceptCookies();
        signUpButton().click();
        ms365Button().click();
        ssoTosCheckbox().click({force:true});
        ssoProceedWithRegistrationButton().should('exist');
    });

    it('4.Miro Apple SSO Test',  () => {
        acceptCookies();
        signUpButton().click();
        appleButton().click();
        ssoTosCheckbox().click({force:true});
        ssoProceedWithRegistrationButton().should('exist');
    });

    it('5.Miro facebook SSO Test',  () => {
        acceptCookies();
        signUpButton().click();
        facebookButton().click();
        ssoTosCheckbox().click({force:true});
        ssoProceedWithRegistrationButton().should('exist');
    });
});

