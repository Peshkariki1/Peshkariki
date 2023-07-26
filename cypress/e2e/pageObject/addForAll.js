/// <reference types="cypress" />

import selectors from '../selectors';

class AddForAll {
  constructor() {
    const { sender, recipient, orderDetails } = selectors.addForAll;
    this.senderStreetAddress = sender.STREET_ADRESS;
    this.clearAdress = sender.CLEAR_ADRESS_FIELD;
    this.senderAddressDropdown = sender.ADRESS_DROPDOWN;
    this.senderDropdownItem = sender.DROPDOWN_ITEM;
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
    this.paymentMethod = selectors.addForAll.paymentMethodOptions;
    this.promocode = selectors.addForAll.PROMOCODE;
    this.servicesListOption = selectors.addForAll.servicesList;

    this.successMsg = selectors.addForAll.SUCCESS_MSG;
    this.closePopup = selectors.addForAll.afterOrdered.CLOSE_POPUP;
    this.selectRegion = selectors.addForAll.SELECT_REGION;
    this.deleveryType = selectors.addForAll.deleveryType;
    
    this.additionalOptionButtons = selectors.addForAll.ADDITIONAL_OPTIONS_BUTTONS;
    this.additionalsPayment = selectors.addForAll.additionalOptions.ADDITIONAL_PAYMENT;
    this.additionalCompanyName = selectors.addForAll.additionalOptions.ORGANIZATION;
    this.additionalOrderNumber = selectors.addForAll.additionalOptions.ORDER_NUMBER;

    this.buttonStartOrder = selectors.addForAll.START_ORDER_BUTTON;
  }

  navigateToAddForAllPage() {
    cy.visit('https://alt10.peshkariki.ru/cabinet/AddForAll');
  };

  selectingRegion(option){
    cy.get(this.selectRegion).select(option, {force: true})
  };

  fillInSenderData(address, entrance, floor, apt, phoneNumber, orderDay, orderTimeFrom, orderTimeTo) {
    cy.get(this.senderStreetAddress).clear().type(address).then(()=> {
      cy.get(this.senderAddressDropdown).first().click();
    })
  
    cy.get(this.senderEntrance).type(entrance);
    cy.get(this.senderFloor).clear().type(floor);
    cy.get(this.senderApt).clear().type(apt);
    cy.get(this.senderPhoneNumberInput).clear().type(phoneNumber);
    cy.get(this.senderOrderDaySelect).select(orderDay);
    cy.get(this.senderOrderTimeLeftSelect).select(orderTimeFrom);
    cy.get(this.senderOrderTimeRightSelect).select(orderTimeTo);
  };

  fillInRecipientData(address, entrance, floor, apt, phoneNumber, orderDay, orderTimeFrom, orderTimeTo) {
    cy.get(this.recipientStreetAdress).type(address);
    cy.get(this.recipientAddressDropdown).first().click()
    cy.get(this.recipientEntrance).clear().type(entrance);
    cy.get(this.recipientFloor).clear().type(floor);
    cy.get(this.recipientApt).clear().type(apt);
    cy.get(this.recipientPhoneNumberInput).clear().type(phoneNumber);
    cy.get(this.recipientOrderDaySelect).select(orderDay);
    cy.get(this.recipientOrderTimeLeftSelect).select(orderTimeFrom);
    cy.get(this.recipientOrderTimeRightSelect).select(orderTimeTo);
  };

  addOrderDatails(itemName, value, weight, amount){
    cy.get(this.itemName).type(itemName)
    .get(this.value).type(value)
    .get(this.selectWeight).select(weight)
    .get(this.inputAmount).clear().type(amount)
  };

  startOrder(){
    cy.get(this.buttonStartOrder).click()
  };

  getSuccessMessage() {
    return cy.get(this.successMsg);
  };

  closePopUp() {
    cy.get(this.closePopUp).click()
  };

  invokeOrderNumber() {
    return cy.contains('Заказ').invoke('text').then((text) => {
      const orderNumber = text.match(/\d+/)[0];
      return orderNumber;
    });
  };

  selectPaymentMethod(option) {
    const paymentMethodSelector = this.paymentMethod[option];
    cy.get(paymentMethodSelector).click();
  };

  selectService(option) {
    const serviceSelector = this.servicesListOption[option];
    cy.wait(2000);
    cy.get('footer').scrollIntoView();
    cy.get(serviceSelector).click();
  };

  selectDeliveryType(option) {
    const deleveryTypeSelector = this.deleveryType[option];
    cy.get(deleveryTypeSelector).click()
  };

  addPromocode(option) {
    cy.get(this.promocode).type(option)
  };

  addAdditionalOptions(value, companyName, orderNumber) {
    cy.get(this.additionalOptionButtons).click()
    cy.get(this.additionalsPayment).type(value)
    cy.get(this.additionalCompanyName).type(companyName)
    cy.get(this.additionalOrderNumber).type(orderNumber)
  };
};

const addForAll = new AddForAll();
export default addForAll;