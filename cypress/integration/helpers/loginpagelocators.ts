export class loginpagelocators{

    static loginAsUser() {
        cy.acceptCookies()
    
    }

    static userNameTxtbox = '#name'

    static emailTxtbox = '#email'

    static userPassTxtBox = '#password'

    static checkboxTerms = '.mr-checkbox-1__check'

    static submitBtn = '[data-testid=mr-form-signup-btn-start-1]'

    static submitBtnTxt = 'Jetzt anfangen'
   
    static txtCheckYourEmail = 'Überprüfen Sie Ihre E-Mail'

    static emailErrorMessage = 'Tut uns Leid, diese E-Mail ist bereits registriert'
















}