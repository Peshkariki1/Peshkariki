/// <reference types="cypress" />

import selectors from '../selectors';

class OrderList {
  constructor() {
    this.order = selectors.orderList.order;
    this.orderNumber = selectors.orderList.orderNumber;
  }

  navigateToOrderListPage() {
    cy.visit('https://alt10.peshkariki.ru/cabinet/ordersList/');
  }

  findAllOrders() {
    return cy.get(this.order);
  }

  findOrderWithNumber(orderNumber) {
    return cy.get(this.orderNumber).contains(orderNumber);
  }
}

const orderList = new OrderList();
export default orderList;
