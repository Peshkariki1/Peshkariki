/// <reference types="cypress" />

import selectors from '../selectors';

class OrderList {
  constructor() {
    this.order = selectors.orderList.order;
    this.orderNumber = selectors.orderList.orderNumber;
    this.cancelOrderButton = selectors.orderList.CANCEL_ORDER_BUTTON;
    this.cancelReason = selectors.orderList.REASON_ORDER_CANCELATION;
    this.submitOrderCancellationButton = selectors.orderList.SUBMIT_ORDER_CANCELATION
    this.orderCount = selectors.orderList.ORDER_COUNT
  }

  navigateToOrderListPage() {
    cy.visit('https://alt10.peshkariki.ru/cabinet/ordersList/');
  }

  findAllOrders() {
    for (let i = 0; i < 5; i++) {
      cy.wait(2000);
      cy.get('footer').scrollIntoView();
      cy.wait(2000);
    }
    return cy.get(this.order);
  }
  
  verifyOrderCount() {
      return cy.get(this.orderCount).invoke('text').then((text) => {
      const textAsNumber = parseInt(text, 10);
      return textAsNumber;
    });
  }

  findOrderWithNumber(orderNumber) {
    cy.get(this.orderNumber).contains(orderNumber);
  }

  submitOrderCancellation() {
    cy.get(this.cancelReason).click();
    cy.get(this.submitOrderCancellationButton).click();
  }

  manadgeOrder(orderNumber){
    cy.visit(`https://alt10.peshkariki.ru/cabinet/AddForAll/edit/${orderNumber}`)
  }
  
}

const orderList = new OrderList();
export default orderList;
