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


describe('Miro Login Test Suite', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    })

    it('1.Miro Login test suite',  () => {
        cy.fixture('1.login/login.json').then((loginFixture) => {
            acceptCookies();
            signUpButton().click();

            const randomEmail = randomer.EMAIL.SINGLE(loginFixture.email_domain)
            process.env['randomEmail'] = randomEmail

            doFormSignup(loginFixture.userName, randomEmail, loginFixture.password);

            checkYourEmailText();
            checkYourEmailText().should('have.text', checkEmailLocators.checkYourEmailText);
        });
    });

    it('2. Should throw an error while signup for existing user', () => {
        cy.fixture('1.login/login.json').then((loginFixture) => {
            acceptCookies();
            signUpButton().click();

            doFormSignup(loginFixture.userName, process.env.randomEmail || '', loginFixture.password);

            errorMessageDuplicateEmail().should('exist');
        });
    });

    it('3. Should show message on weak password', () => {
        cy.fixture('1.login/login.json').then((loginFixture) => {
            console.log(loginFixture)
            acceptCookies();
            signUpButton().click();

            const randomEmail = randomer.EMAIL.SINGLE(loginFixture.email_domain)

            doFormSignup(loginFixture.userName, randomEmail, loginFixture.passwords.weak, false);

            infoMessageWeakPassword().should('exist');
        });
    });

    it('4. Should show message on medium password', () => {
        cy.fixture('1.login/login.json').then((loginFixture) => {
            acceptCookies();
            signUpButton().click();

            const randomEmail = randomer.EMAIL.SINGLE(loginFixture.email_domain)
            doFormSignup(loginFixture.userName, randomEmail, loginFixture.passwords.medium, false);

            infoMessageMediumPassword().should('exist');
        });
    });

    it('5. Should show message on good password', () => {
        cy.fixture('1.login/login.json').then((loginFixture) => {
            acceptCookies();
            signUpButton().click();

            const randomEmail = randomer.EMAIL.SINGLE(loginFixture.email_domain)
            doFormSignup(loginFixture.userName, randomEmail, loginFixture.passwords.good, false);

            infoMessageGoodPassword().should('exist');
        });
    });

    it('6. Should contain miro app logo on signup page', () => {
        acceptCookies();
        signUpButton().click();
        miroLogo().should('exist');
    });

    it('7. Should redirect on login button click', () => {
        acceptCookies();
        signUpButton().click();
        loginButton().should('exist');
        loginButton().contains(loginLocators.loginButtonText);
        loginButton().click();
        cy.url().should('eq', Cypress.env("LOGIN_URL"));
    });
});

