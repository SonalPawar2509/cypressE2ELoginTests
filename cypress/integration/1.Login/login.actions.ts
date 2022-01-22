import {
    acceptTAC,
    submitButton,
    userEmailTextBox,
    userNameTextBox,
    userPasswordTextBox
} from "./login.objects";

export const doFormSignup = (userNameText: string, email: string, password: string, submit = true) => {
    submitButton().should('exist');
    userNameTextBox().type(userNameText);
    userEmailTextBox().type(email);
    userPasswordTextBox().type(password);
    acceptTAC().click({force: true});
    submitButton().should('be.visible');
    if (submit) {
        submitButton().click();
    }
}
