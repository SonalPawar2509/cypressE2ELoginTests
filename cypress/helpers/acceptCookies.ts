const acceptCookies = () : void => {
    cy.waitFor(5000);
    cy.acceptCookies();
};

export default acceptCookies;
