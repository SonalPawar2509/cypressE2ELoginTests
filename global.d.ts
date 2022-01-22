declare module "complete-randomer" {
    const randomer = any;
    export default randomer;
}

declare namespace Cypress {
    interface Chainable<Subject> {
        acceptCookies(): Chainable<Subject>
    }
}
