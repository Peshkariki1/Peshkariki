/// <reference types="cypress"/>

import orderList from '../pageObject/ordersList.js';

describe('Orders Test', () => {
  let data;

  before(() => {
    cy.fixture('data.json').then((fixtureData) => {
      data = fixtureData;
    });
  });

  beforeEach(() => {
    cy.login(data.userData.userPhone, data.userData.password);
    cy.visit('/');
    cy.title().should('contain', data.title);
  });
})
