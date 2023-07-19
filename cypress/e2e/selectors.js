const selectors = {
    homePage: {
      loginLink: "ul[class='navigation-list'] a[class='btn-modal']",
    },

    loginPage: {
      userPhone: '[name="phone"]',
      passwordInput: '[name="password"]',
      loginButton: "button[class='send btn-single']",
    },

    header: {
      createOrderLink: "header[id='header'] li:nth-child(1) a:nth-child(1)",
      logo:'header .logo-link'
    },

    cabinet: {
      createOrderContainer: ".modal-content-container",
      containerTitle: "div[class='white-block modal-block default-modal'] div[class='title']",
      addForAll: "a[href='/cabinet/AddForAll']"
    },

    addForAll: {
      sender: {
        streetAdress: '[placeholder="Невский проспект, д 28"]',
        addressDropdown: '.address-dropdown',
        entrance: '[placeholder="Подъезд"]',
        floor: '[placeholder="Этаж"]',
        apt: '[placeholder="Кв./офис"]',
        phoneNumberInput: 'div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) input[type="tel"]',
        orderDaySelect: 'div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > select:nth-child(1)',
        orderTimeLeftSelect: 'div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > select:nth-child(2)',
        orderTimeRightSelect: "div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > select:nth-child(2)"
      },
      recipient: {
        streetAdress: '[placeholder="Марата, д 53"]',
        addressDropdown: '.address-dropdown', 
        entrance: "div[class='order-block__animation-wrapper'] input[placeholder='Подъезд']",
        floor: "div[class='order-block__animation-wrapper'] input[placeholder='Подъезд']",
        apt: "div[class='order-block__animation-wrapper'] div[class='order-input apartment'] input",
        phoneNumberInput: "div[class='order-block__animation-wrapper'] div[class='order-block'] div[class='expand-block'] div[class='block'] div[class='sender-info'] div div[class='phone-input-wrapper'] input",
        orderDaySelect: "body > div:nth-child(7) > div:nth-child(2) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > span:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > select:nth-child(1)",
        orderTimeLeftSelect: "div[class='order-block__animation-wrapper'] div[class='order-block'] div[class='expand-block'] div[class='block'] div[class='sender-info'] div div[class='order-input time-from'] select[name='time']",
        orderTimeRightSelect: "div[class='order-block__animation-wrapper'] div[class='order-block'] div[class='expand-block'] div[class='block'] div[class='sender-info'] div div[class='order-input time-to'] select[name='time']"
      },

      orderDetails: {
        itemName: "input[placeholder='Что везем']",
        value: "input[placeholder='Ценность за шт.']", 
        selectWeight: "select[name='weight']",
        inputAmount: "div[class='input-group input-group-right'] input[type='number']",
      },
      paymentMethods: {
        type1: ":nth-child(1) > #chosenPaymentMethod",
        type2: ":nth-child(2) > #chosenPaymentMethod",
        type3: ":nth-child(3) > #chosenPaymentMethod",
        type4: ":nth-child(4) > #chosenPaymentMethod",
        type5: ":nth-child(5) > #chosenPaymentMethod"
      },

      buttonStartOrder: "button[class='start'] div",

      successMsg: ".modal-title", 

      afterOrdered: {
        option1: "#checkbox0",
        option2: "#checkbox1",
        option3: "#checkbox2",
        option4: "#checkbox3",
        option5: "#checkbox1",
        closePopup: ".close",
        apply: ".apply"
      }
    },

    orderList: {
      order: ".order",
      orderNumber: ".left-header",
      CANCEL_ORDER_BUTTON: ".order .delivery-data .order-data .actions",
      REASON_ORDER_CANCELATION: '[value="Получатель отказался от заказа"]',
      SUBMIT_ORDER_CANCELATION: '.black',
      ORDER_COUNT: "div[class='title'] div span[class='red']"
    }
}
  
export default selectors;