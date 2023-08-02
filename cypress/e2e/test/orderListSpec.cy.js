/// <reference types="cypress"/>

import orderList from '../pageObject/ordersList.js';
import { data } from '../../fixtures/orderListdata.json'

describe('Orders Test', () => {

  before(() => {

  });

  beforeEach(() => {
    const userPhone = Cypress.env('users')[0].USER_PHONE;
    const password = Cypress.env('users')[0].PASSWORD;
    
    cy.login(userPhone, password);
    cy.visit('/');
    cy.title().should('contain', data.title);
  });

  it('AT_004.001 | Verify url orderListPage is correct', () => {
    orderList.navigateToOrderListPage()
    cy.url().should('contain', data.orderListTitle);
  })
})