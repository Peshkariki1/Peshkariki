/// <reference types="cypress"/>

import basePage from '../pageObject/basePage.js';

beforeEach(() => {

});
  
describe('UI login', () => {
    it('UI login', ()=> {
        basePage.openLoginPage();
        basePage.login();
        cy.title().should('contain', 'Мои заказы')
    })
})
