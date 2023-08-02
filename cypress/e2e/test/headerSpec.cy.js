/// <reference types="cypress"/>

import header from '../pageObject/header.js';
import { data } from '../../fixtures/orderData.json'

describe('Header', () => {

  before(() => {
  });

  beforeEach(() => {
    const userPhone = Cypress.env('users')[0].USER_PHONE;
    const password = Cypress.env('users')[0].PASSWORD;

    cy.login(userPhone, password);
    cy.visit('/');
    cy.title().should('contain', data.title);
  });

  it('AT_003.001 | Logo exists', () => {
    header.getLogo().should('be.visible');
  });
});