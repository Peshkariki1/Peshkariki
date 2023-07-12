/// <reference types="cypress"/>
const fixtures = require('../../fixtures/data');
import basePage from '../pageObject/basePage.js';

const data = fixtures.data;

describe('UI login', () => {
    let userData;
    let data;
  
    before(() => {
      cy.fixture('data.json').then((fixtureData) => {
        userData = fixtureData.userData;
        data = fixtureData;
      });
    });
  
    it('UI login', ()=> {
        basePage.openLoginPage();
        basePage.login();
        cy.title().should('contain', data.title)
    })
})
