/// <reference types="cypress"/>

import header from '../pageObject/header.js';
import cabinet from '../pageObject/cabinet.js';
import addForAll from '../pageObject/addForAll.js';
import orderList from '../pageObject/ordersList.js';
import { data } from '../../fixtures/orderData.json'

describe('Create Order', () => {
  let orderNumber;
  let initialCount;
  let textAsNumber;

  before(() => {
    
  })

  beforeEach(() => {
    cy.login(data.userData.userPhone, data.userData.password);
    cy.visit('/');
    cy.title().should('contain', data.title);
  });

data.orderData.forEach((item, index) => {
  it(`should display create order container ${index + 1}`, () => {   
    header.clickCreateOrderLink();
    cabinet.getTitle().should('have.text', item.containerTitle);

    cabinet.clickAddForAll()
    cy.url().should('contain', 'AddForAll')
  });

  it(`Check order count before creating a new order ${index + 1}`, () => {
    orderList.navigateToOrderListPage();
    orderList.findAllOrders().then((orders) => {
      initialCount = orders.length;
  
      orderList.verifyOrderCount().then((count) => {
        textAsNumber = count;
  
        expect(textAsNumber).to.equal(initialCount);
      })
    });
  });

  it(`fill in form ${index + 1}`, () => {
    const { senderData, recipientData, orderDetails } = item;
    addForAll.navigateToAddForAllPage()
    addForAll.selectingRegion(item.region)
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
      .and('contain', item.successMsg);

      addForAll.invokeOrderNumber().then((orderNum) => {
        orderNumber = orderNum;
      });
    });
   
    it(`Find order ${index + 1}`, () => {
      orderList.navigateToOrderListPage();
      orderList.findOrderWithNumber(orderNumber);
    }); 
  
    it(`Check order count after creating a new order ${index + 1}`, () => {
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

    it.skip(`Cancel Order ${index + 1}`, () => {
      orderList.navigateToOrderListPage();
      orderList.cancelOrder(orderNumber)
    })

    it(`Manage Order ${index + 1}`, () => {
      orderList.manadgeOrder(orderNumber)
    })
})
})
