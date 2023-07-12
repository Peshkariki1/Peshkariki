const header = require('../pageObject/Header');
const basePage = require('../pageObject/basePage');

describe('Header', () => {
    
  beforeEach(() => {
    basePage.openLoginPage();
    basePage.login();
  });

  it('Logo exists', () => {
    header.getLogo().should('be.visible');
  });
});
