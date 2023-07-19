/// <reference types="cypress" />

import selectors from '../selectors';

class AddForAll {
  constructor() {
    const { sender, recipient, orderDetails, paymentMethods} = selectors.addForAll;
    this.senderStreetAdress = sender.STREET_ADRESS;
    this.senderAddressDropdown = sender.ADRESS_DROPDOWN;
    this.senderEntrance = sender.ENTRANCE;
    this.senderFloor = sender.FLOOR;
    this.senderApt = sender.APT;
    this.senderPhoneNumberInput = sender.PHONE_NUMBER_INPUT;
    this.senderOrderDaySelect = sender.ORDER_DAY_SELECT;
    this.senderOrderTimeLeftSelect = sender.ORDER_TIME_LEFT_SELECT;
    this.senderOrderTimeRightSelect = sender.ORDER_TIME_RIGHT_SELECT;

    this.recipientStreetAdress = recipient.STREET_ADRESS;
    this.recipientAddressDropdown = recipient.ADRESS_DROPDOWN;
    this.recipientEntrance = recipient.ENTRANCE;
    this.recipientFloor = recipient.FLOOR;
    this.recipientApt = recipient.APT;
    this.recipientPhoneNumberInput = recipient.PHONE_NUMBER_INPUT;
    this.recipientOrderDaySelect = recipient.ORDER_DAY_SELECT;
    this.recipientOrderTimeLeftSelect = recipient.ORDER_TIME_LEFT_SELECT;
    this.recipientOrderTimeRightSelect = recipient.ORDER_TIME_RIGHT_SELECT;

    this.itemName = orderDetails.ITEM_NAME;
    this.value = orderDetails.VALUE;
    this.selectWeight = orderDetails.SELECT_WEIGHT;
    this.inputAmount = orderDetails.INPUT_AMOUNT;
    this.paymentMethod = paymentMethods.TYPE_1;

    this.buttonStartOrder = selectors.addForAll.START_ORDER_BUTTON,

    this.successMsg = selectors.addForAll.SUCCESS_MSG;
    this.closePopup = selectors.addForAll.afterOrdered.CLOSE_POPUP;
    this.selectRegion = selectors.addForAll.SELECT_REGION
  }

  navigateToAddForAllPage() {
    cy.visit('https://alt10.peshkariki.ru/cabinet/AddForAll');
  }

  selectingRegion(option){
    cy.get(this.selectRegion).select(option)
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

  closePopUp() {
    cy.get(this.closePopUp).click()
  }

  invokeOrderNumber() {
    return cy.contains('Заказ').invoke('text').then((text) => {
      const orderNumber = text.match(/\d+/)[0];
      return orderNumber;
    })
  }
}

const addForAll = new AddForAll();
export default addForAll;