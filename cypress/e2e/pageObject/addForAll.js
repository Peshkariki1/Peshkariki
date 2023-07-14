/// <reference types="cypress" />

import selectors from '../selectors';

class AddForAll {
    constructor() {
      this.streetAdress = selectors.addForAll.sender.streetAdress
      this.addressDropdown = selectors.addForAll.sender.addressDropdown
      this.entrance = selectors.addForAll.sender.entrance
      this.floor = selectors.addForAll.sender.floor
      this.apt = selectors.addForAll.sender.apt
      this.phoneNumberInput = selectors.addForAll.sender.phoneNumberInput
      this.orderDaySelect = selectors.addForAll.sender.orderDaySelect
      this.orderTimeLeftSelect = selectors.addForAll.sender.orderTimeLeftSelect
      this.orderTimeRightSelect = selectors.addForAll.sender.orderTimeRightSelect
      
    }
    fillInSenderData(address1, entrance, floor, apt, phoneNumber, orderDay, orderTimeFrom, orderTimeTo) {
        cy.visit('https://alt10.peshkariki.ru/cabinet/AddForAll');
        cy.get(this.streetAdress).type(address1)
          .get(this.addressDropdown) 
          .first()
          .click()
        cy.get(this.entrance).type(entrance)
        cy.get(this.floor).type(floor)
        cy.get(this.apt).type(apt)
        cy.get(this.phoneNumberInput).type(phoneNumber)
        cy.get(this.orderDaySelect).select(orderDay)
        cy.get(this.orderTimeLeftSelect).select(orderTimeFrom)
        cy.get(this.orderTimeRightSelect).select(orderTimeTo)
    }
}
  
const addForAll = new AddForAll();
export default addForAll;