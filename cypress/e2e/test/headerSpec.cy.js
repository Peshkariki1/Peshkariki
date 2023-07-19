/// <reference types="cypress"/>

import header from '../pageObject/header.js';
import { data } from '../../fixtures/orderData.json'

describe('Header', () => {

  before(() => {
  });

  beforeEach(() => {
    cy.login(data.userData.userPhone, data.userData.password);
    cy.visit('/');
    cy.title().should('contain', data.title);
  });

  it('Logo exists', () => {
    header.getLogo().should('be.visible');
  });
});
