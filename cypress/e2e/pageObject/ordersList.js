/// <reference types="cypress" />

import selectors from '../selectors';

class OrderList {
  constructor() {

    this.order = selectors.orderList.ORDER;
    this.orderNumber = selectors.orderList.ORDER_NUMBER;
    this.cancelOrderButton = selectors.orderList.CANCEL_ORDER_BUTTON;
    this.cancelReason = selectors.orderList.REASON_ORDER_CANCELATION;
    this.submitOrderCancellationButton = selectors.orderList.SUBMIT_ORDER_CANCELATION;
    this.orderCount = selectors.orderList.ORDER_COUNT;
    this.editeButton = selectors.orderList.EDITE_BUTTON;
    this.selectCancelReasons = selectors.selectCancelReason;
    this.completeDeleteButton = selectors.orderList.COMPLETE_DELETE;
    this.deleteSuccessMsg = selectors.orderList.SUCCESS_MSG1;
  };

  navigateToOrderListPage() {
    cy.visit(Cypress.config().baseUrl + '/cabinet/ordersList/');
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
  };
 
  verifyOrderCount() {
      return cy.get(this.orderCount).invoke('text').then((text) => {
      const textAsNumber = parseInt(text, 10);
      return textAsNumber;
    });
  };

  findOrderWithNumber(orderNumber) {
    cy.get(this.orderNumber).contains(orderNumber)
  };

  submitOrderCancellation() {
    cy.get(this.cancelReason).click();
    cy.get(this.submitOrderCancellationButton).click();
  };

  navigateToEditOrderPage(orderNumber) {
    cy.visit(Cypress.config().baseUrl + '/cabinet/orderDetails/' + orderNumber);
  };
  
  clickEditeButton() {
    cy.get(this.editeButton).click()
  };

  clickCancelButton() {
    cy.get(this.cancelOrderButton).click()
  };

  selectCancelReason(option){
    const cancelReasonChoise = this.selectCancelReasons[option];
    cy.get(cancelReasonChoise).click()
  };
  
  compliteDElete(){
    cy.get(this.completeDeleteButton).click()
  };

  checkSuccesDelete() {
    return cy.get(this.deleteSuccessMsg)
  }  
}


const orderList = new OrderList();
export default orderList;
