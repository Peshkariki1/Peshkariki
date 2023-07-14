/// <reference types="cypress"/>

import header from '../pageObject/header.js';
import cabinet from '../pageObject/cabinet.js';
import addForAll from '../pageObject/addForAll.js';

describe('Create Order', () => {
  let data;

  before(() => {
    cy.fixture('data.json').then((fixtureData) => {
      data = fixtureData;
    });
  });

  beforeEach(() => {
    cy.login(data.userData.userPhone, data.userData.password);
    cy.visit('/');
    cy.title().should('contain', data.title);
  });

  it('should display create order container', () => {
   
    header.clickCreateOrderLink();
    cabinet.getTitle().should('have.text', data.containerTitle);

    cabinet.clickAddForAll()
    cy.url().should('contain', 'AddForAll')
  });

  it('fill in form', () => {
    const { senderData, recipientData, orderDatails} = data;
    addForAll.navigateToAddForAllPage()
    addForAll.fillInSenderData(
      senderData.cyrillicAddress1,
      senderData.entrance,
      senderData.floor,
      senderData.apt,
      senderData.phoneNumber,
      senderData.pickupDate,
      senderData.pickupTimeFrom,
      senderData.pickupTimeTo
      )
    addForAll.fillInRecipientData(
      recipientData.cyrillicAddress1,
      recipientData.entrance,
      recipientData.floor,
      recipientData.apt,
      recipientData.phoneNumber,
      recipientData.pickupDate,
      recipientData.pickupTimeFrom,
      recipientData.pickupTimeTo
    )
    addForAll.addOrderDatails(
      orderDatails.itemName,
      orderDatails.value,
      orderDatails.weight,
      orderDatails.amount
    )

    addForAll.selectPaymentMethod()

    addForAll.startOrder()

    addForAll.getSuccessMessage()
    .should('exist')
    .and('contain', data.successMsg);
  })
});
