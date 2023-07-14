/// <reference types="cypress" />

import selectors from '../selectors';

class BasePage {
    constructor() {
      this.loginLink = selectors.homePage.loginLink;
      this.userPhone = selectors.loginPage.userPhone;
      this.passwordInput = selectors.loginPage.passwordInput;
      this.loginButton = selectors.loginPage.loginButton;
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