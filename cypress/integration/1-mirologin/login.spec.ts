/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import randomer from "complete-randomer";
import { loginpagelocators } from "../helpers/loginpagelocators";


describe('test suite', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    })

    it('Miro Login test suite',  () => {
        loginpagelocators.loginAsUser()
        cy.get('.List--1r2wrpd > :nth-child(4) > .Button--1qfp3li > .Box--8euad8').click();
        cy.wait(5000);

        cy.findByText(loginpagelocators.submitBtnTxt)
        cy.get(loginpagelocators.userNameTxtbox).type('sonal pawar');
        const randomEmail = randomer.EMAIL.SINGLE('Outlook')
        process.env['randomEmail'] = randomEmail
        cy.get(loginpagelocators.emailTxtbox).type(randomEmail);
        cy.get(loginpagelocators.userPassTxtBox).type('Sonal@250990');

       let a = cy.get(loginpagelocators.checkboxTerms).then((el: any) => {
           console.log(el);
           el[0].click();
       });

        cy.get(loginpagelocators.submitBtn, { timeout: 10000 }).should('be.visible');
        cy.get(loginpagelocators.submitBtn).click();
        cy.wait(5000);
        cy.findByText(loginpagelocators.txtCheckYourEmail)
        cy.get('h1').should('have.text', loginpagelocators.txtCheckYourEmail)

              
    });

    it('Miro Login test using existing Email', () => {
        loginpagelocators.loginAsUser()
        cy.get('.List--1r2wrpd > :nth-child(4) > .Button--1qfp3li > .Box--8euad8').click();
        cy.wait(5000);

        
        console.log(process.env.randomEmail)
        cy.get(loginpagelocators.userNameTxtbox).type('sonal pawar');
        cy.get(loginpagelocators.emailTxtbox).type(process.env.randomEmail);
        cy.get(loginpagelocators.userPassTxtBox).type('Sonal@25099090');

        let a = cy.get(loginpagelocators.checkboxTerms).then((el: any) => {
            console.log(el);
            el[0].click();
        });
 
        cy.get(loginpagelocators.submitBtn, { timeout: 10000 }).should('be.visible');
        cy.get(loginpagelocators.submitBtn).click();
        cy.wait(5000);
        cy.findByText(loginpagelocators.emailErrorMessage)
        
    });


});

