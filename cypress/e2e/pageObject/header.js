const selectors = require('../selectors');

class Header {
  constructor() {
    this.logo = selectors.header.LOGO;
    this.createOrderLink = selectors.header.CREATE_ORDER_LINK;
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
