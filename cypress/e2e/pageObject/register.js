import data from '../../fixtures/registerData.json'
import selectors from '../selectors';

class RegisterPage {
    constructor() {
      this.registerTypes = selectors.registerPage.registerType;
      this.inputName = selectors.registerPage.INPUT_NAME;
      this.inputPassword = selectors.registerPage.INPUT_PASSWORD;
      this.inputPhone = selectors.registerPage.INPUT_PHONE;
      this.confirmPhoneBtn = selectors.registerPage.CONFIRM_PHONE_BTN;
      this.confirmCodeInput = selectors.registerPage.CONFIRM_CODE_INPUT;
      this.inputEmail = selectors.registerPage.INPUT_EMAIL;
      this.promocodeLink = selectors.registerPage.PROMOCODE_LINK;
      this.promocodeInput = selectors.registerPage.PROMOCODE_INPUT;
      this.agrimentCheckbox = selectors.registerPage.AGRIMENT_CHECKBOX;
      this.submiteRegistration = selectors.registerPage.REGISTER_SUBMIT_BTN;
    }

    selectRegistrationType(option){
        const registerType = this.registerTypes[option];
        cy.get(registerType).click()
    }

    fillInRegistrationData(name, phone, password, email) {
        if (name !== "") {
            cy.get(this.inputName)
            .should('exist')
            .and('have.attr', "placeholder", data.data.placeholder1Text)
            .clear()
            .should('be.empty')
            .type(name, { parseSpecialCharSequences: false });
        };
        if (password !== "") {
            cy.get(this.inputPassword)
            .should('exist')
            .and('have.attr', "placeholder", data.data.placeholder2Text)
            .clear()
            .should('be.empty')
            .type(password, { parseSpecialCharSequences: false });
        };
        if (email !== "") {
            cy.get(this.inputEmail)
            .should('exist')
            .and('have.attr', "placeholder", data.data.placeholder3Text)
            .clear()
            .should('be.empty')
            .type(email, { parseSpecialCharSequences: false });
        };
        if (phone !== "") {
            cy.get(this.inputPhone)
            .should('exist')
            .and('have.attr', "placeholder", data.data.placeholder5Text)
            .clear()
            .should('be.empty')
            .type(phone, { parseSpecialCharSequences: false });
        };
    }

    getCodeConfirmation(code) {
        cy.get(this.agrimentCheckbox)
            .should('exist')
            .click();

        cy.get(this.confirmPhoneBtn)
            .should('exist')
            .click();

        cy.get(this.confirmCodeInput).type(code);
    }
       
    addPromocode(promocode) {
        cy.get(this.promocodeLink)
            .should('exist')
            .click()
        if (promocode !== "") {
            cy.get(this.promocodeInput)
            .should('exist')
            .and('have.attr', 'placeholder', data.data.placeholder4Text)
            .clear()
            .should('be.empty')
            .type(promocode, { parseSpecialCharSequences: false });
        } 
    }   
          
    submitRegistration(){
        cy.get(this.submiteRegistration)
        .should('exist')
        .invoke('attr', 'disabled', 'false')
        .click()
    }  
}

  
const registerPage = new RegisterPage();
export default registerPage;