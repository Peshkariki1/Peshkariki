const selectors = {
    homePage: {
      LOGIN_LINK: "ul[class='navigation-list'] a[class='btn-modal']",
    },

    loginPage: {
      USER_PHONE_INPUT: '[name="phone"]',
      PASSWORD_INPUT: '[name="password"]',
      LOGIN_BUTTON: "button[class='send btn-single']",
    },

    header: {
      CREATE_ORDER_LINK: "header[id='header'] li:nth-child(1) a:nth-child(1)",
      LOGO:'header .logo-link'
    },

    cabinet: {
      CREATE_ORDER_CONTAINER: ".modal-content-container",
      CONTAINER_TITLE: "div[class='white-block modal-block default-modal'] div[class='title']",
      ADD_FOR_ALL: "a[href='/cabinet/AddForAll']"
    },

    addForAll: {
      SELECT_REGION: "div[class='select-city'] select",
      sender: {
        STREET_ADRESS: 'div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) input',
        ADRESS_DROPDOWN: '.address-dropdown',
        ENTRANCE: '[placeholder="Подъезд"]',
        FLOOR: '[placeholder="Этаж"]',
        APT: '[placeholder="Кв./офис"]',
        PHONE_NUMBER_INPUT: 'div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) input[type="tel"]',
        ORDER_DAY_SELECT: 'div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > select:nth-child(1)',
        ORDER_TIME_LEFT_SELECT: 'div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > select:nth-child(2)',
        ORDER_TIME_RIGHT_SELECT: "div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > select:nth-child(2)"
      },
      recipient: {
        STREET_ADRESS: "div[class='order-block__animation-wrapper'] div[class='input address'] input",
        ADRESS_DROPDOWN: '.address-dropdown', 
        ENTRANCE: "div[class='order-block__animation-wrapper'] input[placeholder='Подъезд']",
        FLOOR: "div[class='order-block__animation-wrapper'] input[placeholder='Подъезд']",
        APT: "div[class='order-block__animation-wrapper'] div[class='order-input apartment'] input",
        PHONE_NUMBER_INPUT: "div[class='order-block__animation-wrapper'] div[class='order-block'] div[class='expand-block'] div[class='block'] div[class='sender-info'] div div[class='phone-input-wrapper'] input",
        ORDER_DAY_SELECT: "body > div:nth-child(7) > div:nth-child(2) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > span:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > select:nth-child(1)",
        ORDER_TIME_LEFT_SELECT: "div[class='order-block__animation-wrapper'] div[class='order-block'] div[class='expand-block'] div[class='block'] div[class='sender-info'] div div[class='order-input time-from'] select[name='time']",
        ORDER_TIME_RIGHT_SELECT: "div[class='order-block__animation-wrapper'] div[class='order-block'] div[class='expand-block'] div[class='block'] div[class='sender-info'] div div[class='order-input time-to'] select[name='time']"
      },

      orderDetails: {
        ITEM_NAME: "input[placeholder='Что везем']",
        VALUE: "input[placeholder='Ценность за шт.']", 
        SELECT_WEIGHT: "select[name='weight']",
        INPUT_AMOUNT: "div[class='input-group input-group-right'] input[type='number']",
      },
      paymentMethods: {
        TYPE_1: ":nth-child(1) > #chosenPaymentMethod",
        TYPE_2: ":nth-child(2) > #chosenPaymentMethod",
        TYPE_3: ":nth-child(3) > #chosenPaymentMethod",
        TYPE_4: ":nth-child(4) > #chosenPaymentMethod",
        TYPE_5: ":nth-child(5) > #chosenPaymentMethod"
      },

      START_ORDER_BUTTON: "button[class='start'] div",

      SUCCESS_MSG: ".modal-title", 

      afterOrdered: {
        OPTION_1: "#checkbox0",
        OPTION_2: "#checkbox1",
        OPTION_3: "#checkbox2",
        OPTION_4: "#checkbox3",
        OPTION_5: "#checkbox1",
        CLOSE_POPUP: ".close",
        APPLY: ".apply"
      }
    },

    orderList: {
      ORDER: ".order",
      ORDER_NUMBER: ".left-header",
      CANCEL_ORDER_BUTTON: ".order-data .order-action.transrarent",
      REASON_ORDER_CANCELATION: '[value="Получатель отказался от заказа"]',
      SUBMIT_ORDER_CANCELATION: '.black',
      ORDER_COUNT: "div[class='title'] div span[class='red']"
    }
}
  
export default selectors;