/// <reference types="cypress"/>
import basePage from '../pageObject/basePage.js';
import { userData, userData1 } from '../../fixtures/loginData.json'
import { users as envUsers } from '../../../cypress.env.json';


describe('UI login', () => {
  beforeEach(() => {

  });

  // it('AT_002.001 | Check the maximum allowed input value for the userPhone field should not exceed 256 characters', () => {
  //   basePage.openLoginPage();
  //   basePage.getUserPhoneField().then($userPhoneInput => {
  //     expect($userPhoneInput.attr('maxlength')).to.equal('256');
  //   });
  // });

  // it('AT_002.002 | Check the minimum allowed input value for the userPhone field should not exceed 256 characters', () => {
  //   basePage.openLoginPage();
  //   basePage.getUserPhoneField().then($userPhoneInput => {
  //     expect($userPhoneInput.attr('minlength')).to.equal('6');
  //   });
  // });

  // it('AT_002.003 | Check the maximum allowed input value for the password field should not exceed 256 characters', () => {
  //   basePage.openLoginPage();
  //   basePage.getUserPassword().then($userPassword => {
  //     expect($userPassword.attr('maxlength')).to.equal('255');
  //   });
  // });
        
  // it('AT_002.004 | Check the minimum allowed input value for the password field should not exceed 256 characters', () => {
  //   basePage.openLoginPage();
  //   basePage.getUserPassword().then($userPassword => {
  //     expect($userPassword.attr('minlength')).to.equal('8');
  //   });
  // });

  envUsers.forEach((user, index) => {
    it(`AT_002.005 | UI successful login ${index + 1}`, () => {
      basePage.loginWithCredentials(user.USER_PHONE, user.PASSWORD);
      cy.url().should('contain', userData[index].expectedUrl);
      cy.title().should('contain', userData[index].title);
    });
  });

 userData1.forEach((user, index) => {
    it(`AT_002.006 | UI unsuccessful login ${index + 1}`, () => {
      const { userPhone, password, error } = user;
      basePage.loginWithCredentials(userPhone, password);
      basePage.getErrorMsg().should('contain', error);
    });
  });
});