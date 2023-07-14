/// <reference types="cypress"/>
import basePage from '../pageObject/basePage.js';

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
        basePage.login(userData.userPhone, userData.password);
        cy.title().should('contain', data.title)
    })
})
