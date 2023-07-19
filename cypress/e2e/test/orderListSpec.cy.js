/// <reference types="cypress"/>

import orderList from '../pageObject/ordersList.js';
import { data } from '../../fixtures/orderData.json'

describe('Orders Test', () => {

  before(() => {

  });

  beforeEach(() => {
    cy.login(data.userData.userPhone, data.userData.password);
    cy.visit('/');
    cy.title().should('contain', data.title);
  });
})
