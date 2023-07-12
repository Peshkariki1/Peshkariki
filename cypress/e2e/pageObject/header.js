const selectors = require('../selectors');

class Header {
  constructor() {
    this.logo = selectors.header.logo;
    this.timeout = 5000;
    this.waitForNavigation = true;
  }

  getLogo() {
    return cy.get(this.logo, { timeout: this.timeout, waitForNavigation: this.waitForNavigation });
  }
}

const header = new Header();
module.exports = header;
