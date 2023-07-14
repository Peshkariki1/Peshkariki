/// <reference types="cypress"/>

import header from '../pageObject/header.js';
import cabinet from '../pageObject/cabinet.js';
import addForAll from '../pageObject/addForAll.js';

describe('Create Order', () => {
  let userData;
  let data;

  before(() => {
    cy.fixture('data.json').then((fixtureData) => {
      userData = fixtureData.userData;
      data = fixtureData;
    });
  });

  beforeEach(() => {
    cy.login(userData.userPhone, userData.password);
    cy.visit('/');
    cy.title().should('contain', data.title);
  });

  it('should display create order container', () => {
    const containerTitle = data.containerTitle;

    header.clickCreateOrderLink();
    cabinet.getTitle().should('have.text', containerTitle);

    cabinet.clickAddForAll()
    cy.url().should('contain', 'AddForAll')
  });

  it('fill in sender data', () => {
    addForAll.fillInSenderData(data.senderData.cyrillicAddress1, data.senderData.entrance, data.senderData.floor, data.senderData.apt, data.senderData.phoneNumber, data.senderData.pickupDate, data.senderData.pickupTimeFrom, data.senderData.pickupTimeTo)
  })
});
