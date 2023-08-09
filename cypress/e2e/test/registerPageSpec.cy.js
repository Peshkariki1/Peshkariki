/// <reference types="cypress"/>
import basePage from '../pageObject/basePage.js';
import registerPage from '../pageObject/register.js';
import { data } from '../../fixtures/registerData.json'


describe('UI Registration', () => {
  beforeEach(() => {
    basePage.openRegisterPage(data.blockText)
  });

  data.userData.forEach((user, index) => {
    it(`AT_005.001 | UI successful registration for user or courier ${index + 1}`, () => {
      const { name, phone, password, email, promocode, registerType, code} = user;
      registerPage.selectRegistrationType(registerType);
      registerPage.fillInRegistrationData(name, phone, password, email);
      registerPage.getCodeConfirmation(code);
      registerPage.addPromocode(promocode);
      //registerPage.submitRegistration();
      //cy.url().should('include', '/cabinet/ordersList/');

    });
  });

data.userData1.forEach((user, index) => {
    it(`AT_005.002 | UI successful registration for companies ${index + 1}`, () => {
        const { name, phone, password, email, registerType, code} = user;
        registerPage.selectRegistrationType(registerType);
        registerPage.fillInRegistrationData(name, phone, password, email);
        registerPage.getCodeConfirmation(code);
        //registerPage.submitRegistration();
        //cy.url().should('include', '/cabinet/ordersList/');
      });
    });
});