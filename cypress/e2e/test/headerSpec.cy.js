const header = require('../pageObject/header');
const basePage = require('../pageObject/basePage');

describe('Header', () => {
  let userData;
  let data;

  before(() => {
    cy.fixture('data.json').then((fixtureData) => {
      userData = fixtureData.userData;
      data = fixtureData;
    });
  });

  beforeEach(() => {
    cy.login(userData.userPhone, userData.password);
    cy.visit('/');
    cy.title().should('contain', data.title);
  });

  it('Logo exists', () => {
    header.getLogo().should('be.visible');
  });
});
