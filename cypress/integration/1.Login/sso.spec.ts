/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
/// <reference types="@types/node" />

import acceptCookies from "../../helpers/acceptCookies";
import {
    appleButton, facebookButton,
    gmailButton, ms365Button,
    signUpButton, slackButton, ssoProceedWithRegistrationButton, ssoTosCheckbox
} from "./login.objects";
import presets from "../../helpers/presets";
import ViewportPreset = Cypress.ViewportPreset;


describe('Miro Login SSO Navigation Test Suite', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    })

    presets.forEach((device: ViewportPreset, index) => {
        it(`1-${index}.Miro Gmail SSO Test: on ${device}`,  () => {
            cy.viewport(device);
            acceptCookies();
            signUpButton().click();
            gmailButton().click();
            ssoTosCheckbox().click({force:true});
            ssoProceedWithRegistrationButton().should('exist');
        });
    });

    presets.forEach((device: ViewportPreset, index) => {
        it(`2-${index}.Miro Slack SSO Test: on ${device}`,  () => {
            cy.viewport(device);
            acceptCookies();
            signUpButton().click();
            slackButton().click();
            ssoTosCheckbox().click({force:true});
            ssoProceedWithRegistrationButton().should('exist');
        });
    });

    presets.forEach((device: ViewportPreset, index) => {
        it(`3-${index}.Miro MS 365 SSO Test: on ${device}`,  () => {
            cy.viewport(device);
            acceptCookies();
            signUpButton().click();
            ms365Button().click();
            ssoTosCheckbox().click({force:true});
            ssoProceedWithRegistrationButton().should('exist');
        });
    });

    presets.forEach((device: ViewportPreset, index) => {
        it(`4-${index}.Miro Apple SSO Test: on ${device}`,  () => {
            cy.viewport(device);
            acceptCookies();
            signUpButton().click();
            appleButton().click();
            ssoTosCheckbox().click({force:true});
            ssoProceedWithRegistrationButton().should('exist');
        });
    });

    presets.forEach((device: ViewportPreset, index) => {
        it(`4-${index}.Miro facebook SSO Test: on ${device}`,  () => {
            acceptCookies();
            signUpButton().click();
            facebookButton().click();
            ssoTosCheckbox().click({force:true});
            ssoProceedWithRegistrationButton().should('exist');
        });
    });
});

