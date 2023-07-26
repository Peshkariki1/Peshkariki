/// <reference types="cypress"/>
import basePage from '../pageObject/basePage.js';
import { data } from '../../fixtures/loginData.json'

describe('UI login', () => {
    before(() => {
    });
  data.userData.forEach((item, index) => {
    it(`UI successful login ${index + 1}`, ()=> {
      basePage.openLoginPage();
      basePage.login(item.userPhone, item.password);
      cy.title().should('contain', item.title)
    })
  })  
  
  data.userData1.forEach((item, index) => {
    it.only(`UI unsuccessful login ${index + 1}`, ()=> {
      basePage.openLoginPage();
      basePage.login(item.userPhone, item.password);
      basePage.getErrorMsg('contain', item.error);
    })
  })
})
