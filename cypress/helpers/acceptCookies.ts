const acceptCookies = () : void => {
    cy.waitFor(10000);
    cy.acceptCookies();
};

export default acceptCookies;
