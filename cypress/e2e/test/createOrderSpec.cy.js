/// <reference types="cypress"/>

import header from '../pageObject/header.js';
import cabinet from '../pageObject/cabinet.js';
import addForAll from '../pageObject/addForAll.js';
import orderList from '../pageObject/ordersList.js';

describe('Create Order', () => {
  let data;
  let orderNumber;
  let initialCount;
  let textAsNumber;

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

  it('Check order count before creating a new order', () => {
    orderList.navigateToOrderListPage();
    orderList.findAllOrders().then((orders) => {
      initialCount = orders.length;
  
      orderList.verifyOrderCount().then((count) => {
        textAsNumber = count;
  
        expect(textAsNumber).to.equal(initialCount);
      })
    });
  });

  it('fill in form', () => {
    const { senderData, recipientData, orderDetails } = data;
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
      orderDetails.itemName,
      orderDetails.value,
      orderDetails.weight,
      orderDetails.amount
    )

    addForAll.selectPaymentMethod()

    addForAll.startOrder()

    addForAll.getSuccessMessage()
      .should('exist')
      .and('contain', data.successMsg);

      addForAll.invokeOrderNumber().then((orderNum) => {
        orderNumber = orderNum;
      });
    });
   
    it('Find order', () => {
      orderList.navigateToOrderListPage();
      orderList.findOrderWithNumber(orderNumber);
    }); 
  
    it('Check order count after creating a new order', () => {
      orderList.navigateToOrderListPage();
      orderList.findAllOrders().should('have.length', initialCount + 1);
      orderList.findAllOrders().then((orders) => {
        let newCount = orders.length;
    
        orderList.verifyOrderCount().then((count) => {
          textAsNumber = count;
    
          expect(textAsNumber).to.equal(newCount);
        })
      });
    });

    it('Manage Order', () => {
      orderList.manadgeOrder(orderNumber)
    })
})

