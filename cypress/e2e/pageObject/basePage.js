/// <reference types="cypress" />

import selectors from '../selectors';

class BasePage {
    constructor() {
      // Инициализация объекта basePage
      // Например, инициализация переменных, настройка окружения и т.д.
      this.loginLink = selectors.homePage.loginLink;
      this.userPhone = selectors.loginPage.userPhone;
      this.passwordInput = selectors.loginPage.passwordInput;
      this.loginButton = selectors.loginPage.loginButton;
      this.baseUrl = 'https://alt10.peshkariki.ru';
      this.timeout = 5000; 
      this.waitForNavigation = true;

    }
    openLoginPage() {
        cy.visit(this.baseUrl);
        cy.get(this.loginLink).click();
    }

    login() {
        cy.get(this.userPhone).type('79990000007');
        cy.get(this.passwordInput).type('123456');
        cy.get(this.loginButton).click()
    }
}
  
const basePage = new BasePage();
export default basePage;