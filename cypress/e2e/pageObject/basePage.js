import data from '../../fixtures/loginData.json'
import selectors from '../selectors';



class BasePage {
    constructor() {
      this.loginLink = selectors.homePage.LOGIN_LINK;
      this.userPhone = selectors.loginPage.USER_PHONE_INPUT;
      this.passwordInput = selectors.loginPage.PASSWORD_INPUT;
      this.loginButton = selectors.loginPage.LOGIN_BUTTON;
      this.errorMsg = selectors.loginPage.ERROR;
      this.loginBlock = selectors.homePage.LOGIN_BLOCK;
    }
    openLoginPage() {
        cy.visit('/');
        cy.get(this.loginLink).click();
        cy.get(this.loginBlock).should('contain.text', data.blockText)
    }

    login(phone, password) {
        if (phone !== "") {
            cy.get(this.userPhone)
            .should('exist')
            .and('have.attr', "placeholder", data.placeholder1Text)
            .clear()
            .should('be.empty')
            .type(phone, { parseSpecialCharSequences: false });
        }
        if (password !== "") {
            cy.get(this.passwordInput)
            .should('exist')
            .and('have.attr', "placeholder", data.placeholder2Text)
            .clear()
            .should('be.empty')
            .type(password, { parseSpecialCharSequences: false });
        }
            cy.get(this.loginButton)
            .should('exist')
            .click()
    }

    validatePassword(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/;
        return passwordRegex.test(password);
      }
    
      validateUserPhoneOrEmail(userPhone) {
        const phoneRegex = /^\d+$/;
        const emailRegex = /^[a-zA-Z0-9!#$%&'*+\-\/=?^_`{|}~]+(\.[a-zA-Z0-9!#$%&'*+\-\/=?^_`{|}~]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?)*$/;
        return phoneRegex.test(userPhone) || emailRegex.test(userPhone);
      }

      getUserPhoneField() {
        return cy.get(this.userPhone)
      }

      getUserPassword(){
        return cy.get(this.passwordInput)
      }

    loginWithCredentials(userPhone, password) {
        this.openLoginPage();
        this.login(userPhone, password);
    }

    getErrorMsg(){
       return cy.get(this.errorMsg);
    }
}
  
const basePage = new BasePage();
export default basePage;