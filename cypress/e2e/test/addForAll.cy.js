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


  beforeEach(() => {
    const userPhone = Cypress.env('users')[0].USER_PHONE;
    const password = Cypress.env('users')[0].PASSWORD;

    cy.login(userPhone, password);
    cy.visit('/');
    cy.title().should('contain', data.title);
  });

data.orderData.forEach((item, index) => {
  it(`AT_001.001 | should display create order container ${index + 1}`, () => {   
    header.clickCreateOrderLink();
    cabinet.getTitle().should('have.text', item.containerTitle);

    cabinet.clickAddForAll()
    cy.url().should('contain', 'AddForAll');
  });

  // it(`AT_001.002 | Check order count before creating a new order ${index + 1}`, () => {
  //   orderList.navigateToOrderListPage();
  //   orderList.findAllOrdersRecursive().then((initialOrders) => {
  //     initialCount = initialOrders.length;
  //     orderList.verifyOrderCount().then((count) => {
  //       textAsNumber = count;
  //       expect(textAsNumber).to.equal(initialCount);
  //     });
  //   });
  // });
  
  it(`AT_001.003 | fill in form ${index + 1}`, () => {
    const { senderData, recipientData, orderDetails, paymentMethodToClick, selectServiceToClick, deliveryTypeToClick, promocode, additionalOptions } = item;
    addForAll.navigateToAddForAllPage();
    addForAll.selectingRegion(item.region);
    addForAll.selectDeliveryType(deliveryTypeToClick);
  
    addForAll.fillInSenderData(
      senderData.cyrillicAddress1,
      senderData.entrance,
      senderData.floor,
      senderData.apt,
      senderData.phoneNumber,
      senderData.pickupDate,
      senderData.pickupTimeFrom,
      senderData.pickupTimeTo
    );

    addForAll.fillInRecipientData(
      recipientData.cyrillicAddress1,
      recipientData.entrance,
      recipientData.floor,
      recipientData.apt,
      recipientData.phoneNumber,
      recipientData.pickupDate,
      recipientData.pickupTimeFrom,
      recipientData.pickupTimeTo
    );

    addForAll.addOrderDatails(
      orderDetails.itemName,
      orderDetails.value,
      orderDetails.weight,
      orderDetails.amount
    );
    
    addForAll.addPromocode(promocode);

    addForAll.selectPaymentMethod(paymentMethodToClick);

    addForAll.addAdditionalOptions(
      additionalOptions.payment, 
      additionalOptions.companyName, 
      additionalOptions.orderNumber);

    addForAll.selectService(selectServiceToClick);

    addForAll.startOrder();

    addForAll.getSuccessMessage()
      .should('exist')
      .and('contain', item.successMsg);

    addForAll.invokeOrderNumber().then((orderNum) => {
        orderNumber = orderNum;
      });
    });
   
    it(`AT_001.004 | Find order ${index + 1}`, () => {
      orderList.navigateToOrderListPage();
      orderList.findOrderWithNumber(orderNumber);
    }); 
  
    // it(`AT_001.005 | Check order count after creating a new order ${index + 1}`, () => {
    //   orderList.navigateToOrderListPage();
    //   orderList.findAllOrdersRecursive().then((orders) => {
    //     const newCount = orders.length;
    //     expect(newCount).to.equal(initialCount + 1);
    //   });
    // });

    it(`AT_001.006 | Manage Order - Change delivery date ${index + 1}`, () => {
      orderList.navigateToEditOrderPage(orderNumber);
      orderList.clickEditeButton();
      addForAll.selectOrderDeliveryDay(item.newPickupDate);
      addForAll.selectOrderDeliveryTime(item.newPickupTimeTo)
      addForAll.startOrder();
      addForAll.getSuccessMessage()
      .should('exist')
      .and('contain', item.successMsg1);
    });


    it(`AT_001.007 | Cancel Order ${index + 1}`, () => {
      orderList.navigateToEditOrderPage(orderNumber);
      orderList.clickCancelButton();
      orderList.selectCancelReason(item.selectCancelReason);
      orderList.compliteDElete();
      orderList.checkSuccesDelete().should('contain', item.successMsg2)
    });
  });
});