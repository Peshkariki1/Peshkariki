/// <reference types="cypress"/>

import basePage from '../pageObject/basePage.js';

describe('create order', () => {

    beforeEach(() => {
    cy.login()
    cy.visit('/')
})
  
    it('Create order', ()=> {
    cy.title().should('contain', 'Мои заказы')
    })
})