/// <reference types="cypress"/>

import orderList from '../pageObject/ordersList.js';
import { data } from '../../fixtures/orderListdata.json'

describe('Orders Test', () => {

  before(() => {

  });

  beforeEach(() => {
    const userPhone = Cypress.env('USER_PHONE');
    const password = Cypress.env('PASSWORD');
    
    cy.login(userPhone, password);
    cy.visit('/');
    cy.title().should('contain', data.title);
  });

  it('Verify url orderListPage is correct', () => {
    orderList.navigateToOrderListPage()
    cy.url().should('contain', data.orderListTitle);
  })
})
