/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
/// <reference types="@types/node" />

import randomer from "complete-randomer";
import acceptCookies from "../../helpers/acceptCookies";
import checkEmailLocators from '../2.CheckEmailPage/CheckEmail.locators';
import {
    errorMessageDuplicateEmail, infoMessageGoodPassword,
    infoMessageMediumPassword,
    infoMessageWeakPassword, loginButton, miroLogo,
    signUpButton
} from "./login.objects";
import loginLocators from './login.locators';
import {checkYourEmailText} from "../2.CheckEmailPage/CheckEmail.object";
import {doFormSignup} from "./login.actions";
import presets from "../../helpers/presets";
import ViewportPreset = Cypress.ViewportPreset;


describe('Miro Login Test Suite', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    })

    presets.forEach((device: ViewportPreset, index) => {
        it(`1-${index}.Miro Login test suite: on ${device}`,  () => {
            cy.fixture('1.login/login.json').then((loginFixture) => {
                cy.viewport(device);
                acceptCookies();
                signUpButton().click();

                const randomEmail = randomer.EMAIL.SINGLE(loginFixture.email_domain)
                process.env['randomEmail'] = randomEmail

                doFormSignup(loginFixture.userName, randomEmail, loginFixture.password);

                checkYourEmailText();
                checkYourEmailText().should('have.text', checkEmailLocators.checkYourEmailText);
            });
        });
    });

    presets.forEach((device: ViewportPreset, index) => {
        it(`2-${index}. Should throw an error while signup for existing user: on ${device}`, () => {
            cy.fixture('1.login/login.json').then((loginFixture) => {
                cy.viewport(device);
                acceptCookies();
                signUpButton().click();

                doFormSignup(loginFixture.userName, process.env.randomEmail || '', loginFixture.password);

                errorMessageDuplicateEmail().should('exist');
            });
        });
    });

    presets.forEach((device: ViewportPreset, index) => {
        it(`3-${index}. Should show message on weak password: on ${device}`, () => {
            cy.fixture('1.login/login.json').then((loginFixture) => {
                cy.viewport(device);
                acceptCookies();
                signUpButton().click();

                const randomEmail = randomer.EMAIL.SINGLE(loginFixture.email_domain)

                doFormSignup(loginFixture.userName, randomEmail, loginFixture.passwords.weak, false);

                infoMessageWeakPassword().should('exist');
            });
        });
    });

    presets.forEach((device: ViewportPreset, index) => {
        it(`4-${index}. Should show message on medium password: on ${device}`, () => {
            cy.fixture('1.login/login.json').then((loginFixture) => {
                cy.viewport(device);
                acceptCookies();
                signUpButton().click();

                const randomEmail = randomer.EMAIL.SINGLE(loginFixture.email_domain)
                doFormSignup(loginFixture.userName, randomEmail, loginFixture.passwords.medium, false);

                infoMessageMediumPassword().should('exist');
            });
        });
    });

    presets.forEach((device: ViewportPreset, index) => {
        it(`5-${index}. Should show message on good password: on ${device}`, () => {
            cy.fixture('1.login/login.json').then((loginFixture) => {
                cy.viewport(device);
                acceptCookies();
                signUpButton().click();

                const randomEmail = randomer.EMAIL.SINGLE(loginFixture.email_domain)
                doFormSignup(loginFixture.userName, randomEmail, loginFixture.passwords.good, false);

                infoMessageGoodPassword().should('exist');
            });
        });
    });

    presets.forEach((device: ViewportPreset, index) => {
        it(`6-${index}. Should contain miro app logo on signup page: on ${device}`, () => {
            cy.viewport(device);
            acceptCookies();
            signUpButton().click();
            miroLogo().should('exist');
        });
    });

    presets.forEach((device: ViewportPreset, index) => {
        it(`7-${index}. Should redirect on login button click: on ${device}`, () => {
            cy.viewport(device);
            acceptCookies();
            signUpButton().click();
            loginButton().should('exist');
            loginButton().contains(loginLocators.loginButtonText);
            loginButton().click();
            cy.url().should('eq', Cypress.env("LOGIN_URL"));
        });
    });
});

