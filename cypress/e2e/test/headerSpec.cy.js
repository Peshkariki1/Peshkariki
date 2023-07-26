/// <reference types="cypress"/>

import header from '../pageObject/header.js';
import { data } from '../../fixtures/orderData.json'

describe('Header', () => {

  before(() => {
  });

  beforeEach(() => {
    const userPhone = Cypress.env('userData').userPhone;
    const password = Cypress.env('userData').password;

    cy.login(userPhone, password);
    cy.visit('/');
    cy.title().should('contain', data.title);
  });

  it('Logo exists', () => {
    header.getLogo().should('be.visible');
  });
});
