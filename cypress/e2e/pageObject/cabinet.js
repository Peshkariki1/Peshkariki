/// <reference types="cypress" />

const selectors = require('../selectors');

class Cabinet {
  constructor() {
    this.createOrderContainerSelector = selectors.cabinet.CREATE_ORDER_CONTAINER;
    this.containerTitleSelector = selectors.cabinet.CONTAINER_TITLE;
    this.addForAll = selectors.cabinet.ADD_FOR_ALL;
  }

  getCreateOrderContainer() {
    return cy.get(this.createOrderContainerSelector);
  }

  getTitle() {
    return cy.get(this.containerTitleSelector).should('be.visible').invoke('text');
  }
  
  clickAddForAll() {
    cy.get(this.addForAll).click()
  }
}

const cabinet = new Cabinet();
module.exports = cabinet;
