/// <reference types="cypress" />

import selectors from '../selectors';

class OrderList {
  constructor() {

    this.order = selectors.orderList.ORDER;
    this.orderNumber = selectors.orderList.ORDER_NUMBER;
    this.cancelOrderButton = selectors.orderList.CANCEL_ORDER_BUTTON;
    this.cancelReason = selectors.orderList.REASON_ORDER_CANCELATION;
    this.submitOrderCancellationButton = selectors.orderList.SUBMIT_ORDER_CANCELATION
    this.orderCount = selectors.orderList.ORDER_COUNT
  }

  navigateToOrderListPage() {
    cy.visit('https://alt10.peshkariki.ru/cabinet/ordersList/');
  }

  findAllOrdersRecursive() {
    return cy.get(this.orderCount).invoke('text').then((text) => {
      const numberValue = parseInt(text, 10);
  
      const checkOrders = () => {
        return cy.get(this.order).then((orders) => {
          if (orders.length >= numberValue) {
            return orders;
          } else {
            cy.get('footer').scrollIntoView();
            cy.wait(2000);
            return checkOrders();
          }
        });
      };
      return checkOrders();
    });
  }
 
  verifyOrderCount() {
      return cy.get(this.orderCount).invoke('text').then((text) => {
      const textAsNumber = parseInt(text, 10);
      return textAsNumber;
    });
  }

  findOrderWithNumber(orderNumber) {
    cy.get(this.orderNumber).contains(orderNumber)
  }

  cancelOrder(orderNumber) {
    cy.get(this.order).contains(orderNumber)
      .then((order) => {
        cy.wrap(order).find(this.cancelOrderButton).click();
    });
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
