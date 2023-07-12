/// <reference types="cypress" />

const selectors = require('../selectors');

class Cabinet {
  constructor() {
    this.createOrderContainerSelector = selectors.cabinet.createOrderContainer;
    this.containerTitleSelector = selectors.cabinet.containerTitle;
    this.addForAll = selectors.cabinet.addForAll;
  }

  getCreateOrderContainer() {
    return cy.get(this.createOrderContainerSelector);
  }

  getTitle() {
    return cy.get(this.containerTitleSelector);
  }

  clickAddForAll() {
    cy.get(this.addForAll).click()
  }
}

const cabinet = new Cabinet();
module.exports = cabinet;
