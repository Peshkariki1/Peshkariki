/// <reference types="cypress" />

import selectors from '../selectors';

class BasePage {
    constructor() {
      this.loginLink = selectors.homePage.LOGIN_LINK;
      this.userPhone = selectors.loginPage.USER_PHONE_INPUT;
      this.passwordInput = selectors.loginPage.PASSWORD_INPUT;
      this.loginButton = selectors.loginPage.LOGIN_BUTTON;
    }
    openLoginPage() {
        cy.visit('/');
        cy.get(this.loginLink).click();
    }

    login(phone, password) {
        cy.get(this.userPhone).type(phone);
        cy.get(this.passwordInput).type(password);
        cy.get(this.loginButton).click()
    }
}
  
const basePage = new BasePage();
export default basePage;