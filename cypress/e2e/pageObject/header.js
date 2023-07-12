const selectors = require('../selectors');

class Header {
  constructor() {
    this.logo = selectors.header.logo;
    this.createOrderLink = selectors.header.createOrderLink
  }

  getLogo() {
    return cy.get(this.logo, { timeout: this.timeout, waitForNavigation: this.waitForNavigation });
  }

  clickCreateOrderLink() {
    cy.get(this.createOrderLink).click()
  }
}

const header = new Header();
module.exports = header;
