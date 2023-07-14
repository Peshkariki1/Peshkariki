/// <reference types="cypress" />

import selectors from '../selectors';

class AddForAll {
  constructor() {
    const { sender, recipient, orderDetails, paymentMethods} = selectors.addForAll;
    this.senderStreetAdress = sender.streetAdress;
    this.senderAddressDropdown = sender.addressDropdown;
    this.senderEntrance = sender.entrance;
    this.senderFloor = sender.floor;
    this.senderApt = sender.apt;
    this.senderPhoneNumberInput = sender.phoneNumberInput;
    this.senderOrderDaySelect = sender.orderDaySelect;
    this.senderOrderTimeLeftSelect = sender.orderTimeLeftSelect;
    this.senderOrderTimeRightSelect = sender.orderTimeRightSelect;

    this.recipientStreetAdress = recipient.streetAdress;
    this.recipientAddressDropdown = recipient.addressDropdown;
    this.recipientEntrance = recipient.entrance;
    this.recipientFloor = recipient.floor;
    this.recipientApt = recipient.apt;
    this.recipientPhoneNumberInput = recipient.phoneNumberInput;
    this.recipientOrderDaySelect = recipient.orderDaySelect;
    this.recipientOrderTimeLeftSelect = recipient.orderTimeLeftSelect;
    this.recipientOrderTimeRightSelect = recipient.orderTimeRightSelect;

    this.itemName = orderDetails.itemName;
    this.value = orderDetails.value;
    this.selectWeight = orderDetails.selectWeight;
    this.inputAmount = orderDetails.inputAmount;
    this.paymentMethod = paymentMethods.type1;

    this.buttonStartOrder = selectors.addForAll.buttonStartOrder,

    this.successMsg = selectors.addForAll.successMsg;
  }

  navigateToAddForAllPage() {
    cy.visit('https://alt10.peshkariki.ru/cabinet/AddForAll');
  }

  fillInSenderData(address1, entrance, floor, apt, phoneNumber, orderDay, orderTimeFrom, orderTimeTo) {
    cy.get(this.senderStreetAdress).clear().type(address1);
    cy.get(this.senderAddressDropdown).first().click();
    cy.get(this.senderEntrance).type(entrance);
    cy.get(this.senderFloor).type(floor);
    cy.get(this.senderApt).type(apt);
    cy.get(this.senderPhoneNumberInput).type(phoneNumber);
    cy.get(this.senderOrderDaySelect).select(orderDay);
    cy.get(this.senderOrderTimeLeftSelect).select(orderTimeFrom);
    cy.get(this.senderOrderTimeRightSelect).select(orderTimeTo);
  }

  fillInRecipientData(address1, entrance, floor, apt, phoneNumber, orderDay, orderTimeFrom, orderTimeTo) {
    cy.get(this.recipientStreetAdress).clear().type(address1);
    cy.get(this.recipientAddressDropdown).first().click();
    cy.get(this.recipientEntrance).type(entrance);
    cy.get(this.recipientFloor).type(floor);
    cy.get(this.recipientApt).type(apt);
    cy.get(this.recipientPhoneNumberInput).type(phoneNumber);
    cy.get(this.recipientOrderDaySelect).select(orderDay);
    cy.get(this.recipientOrderTimeLeftSelect).select(orderTimeFrom);
    cy.get(this.recipientOrderTimeRightSelect).select(orderTimeTo);
  }

  addOrderDatails(itemName, value, weight, amount){
    cy.get(this.itemName).type(itemName)
    .get(this.value).type(value)
    .get(this.selectWeight).select(weight)
    .get(this.inputAmount).clear().type(amount)
  }

  selectPaymentMethod() {
    cy.get(this.paymentMethod).click()

  }

  startOrder(){
    cy.get(this.buttonStartOrder).click()
  }

  getSuccessMessage() {
    return cy.get(this.successMsg);
  }
}

const addForAll = new AddForAll();
export default addForAll;