/// <reference types="cypress"/>
import basePage from '../pageObject/basePage.js';
import { data } from '../../fixtures/loginData.json'


describe('UI login', () => {
  beforeEach(() => {

  });

  Cypress.env('users').forEach((user, index) => {
    it(`UI successful login ${index + 1}`, () => {
      basePage.loginWithCredentials(user.userPhone, user.password);
      cy.title().should('contain', data.userData[index].title);
    });
  });

  Cypress.env('users1').forEach((user, index) => {
    it(`UI unsuccessful login ${index + 1}`, () => {
      basePage.loginWithCredentials(user.userPhone, user.password);
      basePage.getErrorMsg('contain', data.userData1[index].error);
    });
  });
});
