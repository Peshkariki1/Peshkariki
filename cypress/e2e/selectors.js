const selectors = {
  homePage: {
    LOGIN_LINK: "ul[class='navigation-list'] a[class='btn-modal']",
    LOGIN_BLOCK: ".modal-block",
    REGISTER_BTN: ".nav-item.registration",  
  },

  registerPage: {
    REGISTER_BLOCK_TITLE: ".modal-block .title",
    registerType: {
      REGISTER_TYPE_PERSON: ".modal-buttons .reg-type:nth-child(1)",
      REGISTER_TYPE_ENTITY: ".modal-buttons .reg-type:nth-child(2)",
      REGISTER_TYPE_COURIER: ".modal-buttons .reg-type:nth-child(3)",
    },
    INPUT_NAME: '[placeholder="Ваше Имя"]',
    INPUT_PASSWORD: '[name="password"]',
    INPUT_EMAIL: '[placeholder="Электронная почта"]',
    INPUT_PHONE: '.phone-input',
    CONFIRM_PHONE_BTN: '.confirm',
    CONFIRM_CODE_INPUT: '[name="confirmCode"]',
    AGRIMENT_CHECKBOX: '#agreement-checkbox',
    PROMOCODE_LINK: '.promocode',
    PROMOCODE_INPUT: '[placeholder="Промокод (если есть)"]',
    REGISTER_SUBMIT_BTN: '.send.btn-single'
  },

  loginPage: {
    USER_PHONE_INPUT: '[name="phone"]',
    PASSWORD_INPUT: '[name="password"]',
    LOGIN_BUTTON: "button[class='send btn-single']",
    ERROR: ".v-toast__item.v-toast__item--error.v-toast__item--top .v-toast__text"
  },

  header: {
    CREATE_ORDER_LINK: "header[id='header'] li:nth-child(1) a:nth-child(1)",
    LOGO: "header .logo-link",
  },

  cabinet: {
    CREATE_ORDER_CONTAINER: ".modal-content-container",
    CONTAINER_TITLE:
      "div[class='white-block modal-block default-modal'] div[class='title']",
    ADD_FOR_ALL: "a[href='/cabinet/AddForAll']",
  },

  addForAll: {
    SELECT_REGION: "div[class='select-city'] select",
    sender: {
      STREET_ADRESS:'.address-input-field.has-suggestion',
      CLEAR_ADRESS_FIELD: ".icon-cross.has-tooltip",
      ADRESS_DROPDOWN: ".address-dropdown",
      DROPDOWN_ITEM: ".dropdown-item",
      ENTRANCE: '[placeholder="Подъезд"]',
      FLOOR: '[placeholder="Этаж"]',
      APT: '[placeholder="Кв./офис"]',
      PHONE_NUMBER_INPUT:
        'div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) input[type="tel"]',
      ORDER_DAY_SELECT:
        "div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > select:nth-child(1)",
      ORDER_TIME_LEFT_SELECT:
        "div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > select:nth-child(2)",
      ORDER_TIME_RIGHT_SELECT:
        "div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > select:nth-child(2)",
      ADDITION_INFORMATION_SPAN:
        "section:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span:nth-child(3)",
      SENDER_NAME: "input[placeholder='Имя отправителя']",
      SENDER_COMMENT: "textarea[placeholder='Комментарий к адресу']",
    },

    recipient: {
      STREET_ADRESS:
        ".order-block__animation-wrapper .input.address input",
      ADRESS_DROPDOWN: ".address-dropdown",
      ENTRANCE:
        ".order-block__animation-wrapper input[placeholder='Подъезд']",
      FLOOR:
        ".order-block__animation-wrapper input[placeholder='Подъезд']",
      APT: ".order-block__animation-wrapper .order-input.apartment input",
      PHONE_NUMBER_INPUT:
        ".order-block__animation-wrapper .order-block .expand-block .block .sender-info .phone-input-wrapper input",
      ORDER_DAY_SELECT:
        "body > div:nth-child(7) > div:nth-child(2) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > span:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > select:nth-child(1)",
      ORDER_TIME_LEFT_SELECT:
        ".order-block__animation-wrapper .order-block .expand-block .block .sender-info .order-input.time-from select[name='time']",
      ORDER_TIME_RIGHT_SELECT:
        ".order-block__animation-wrapper .order-block .expand-block .block .sender-info .order-input.time-to select[name='time']",
      ADDITIONAL_INFORMATION:
        ".order-block__animation-wrapper .sender-info .addition-info-switcher",
      GET_MONEY_CHECKBOX: ".label-checkbox input[type='checkbox']",
      RECIPIENT_NAME: "input[placeholder='Имя получателя']",
      RECIPIENT_COMMENT: "textarea[spellcheck='false']",
    },

    orderDetails: {
      ITEM_NAME: 'input[placeholder="Что везем"]',
      VALUE: "input[placeholder='Ценность за шт.']",
      SELECT_WEIGHT: "select[name='weight']",
      INPUT_AMOUNT:
        "div[class='input-group input-group-right'] input[type='number']",
    },

    orderDetailsButtons: {
      FLOWERS: ".suggestion-btn:first-child",
      SURPRICE: ".suggestion-btn:nth-child(2)",
      FRAGILE: ".suggestion-btn:nth-child(3)",
      LONG_ITEM: ".suggestion-btn:nth-child(4)",
      OTHER: ".suggestion-btn:last-child",
    },

    ADD_ITEM: ".orders-bag .addition-info-switcher",

    orderDetailsSecondItem:{
      ITEM_NAME: '.order-detail-info__animation-wrapper:nth-child(2) input[placeholder="Ценность за шт."]',
      VALUE: ".order-detail-info__animation-wrapper:nth-child(2) input[placeholder='Ценность за шт.']",
      SELECT_WEIGHT: '.order-detail-info__animation-wrapper:nth-child(2) [name="weight"]',
      INPUT_AMOUNT: '.order-detail-info__animation-wrapper:nth-child(2) [type="number"]',
    },

    orderDetailsButtons2: {
      FLOWERS: ".order-detail-info__animation-wrapper:nth-child(2) .suggestion-btn:first-child",
      SURPRICE: ".order-detail-info__animation-wrapper:nth-child(2) .suggestion-btn:nth-child(2)",
      FRAGILE: ".order-detail-info__animation-wrapper:nth-child(2) .suggestion-btn:nth-child(3)",
      LONG_ITEM: ".order-detail-info__animation-wrapper:nth-child(2) .suggestion-btn:nth-child(4)",
      OTHER: ".order-detail-info__animation-wrapper:nth-child(2) .suggestion-btn:last-child"
    },

    DO_YOU_HAVE_PAID_DELIVERY: " section:nth-child(1) > div:nth-child(1) > span:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > span:nth-child(1)",
    DELIVERY_PRICE: '[placeholder="0"]',

    ADD_ADRESS: "add-address-button",
    
    paymentMethodOptions: {
      TYPE_1: ":nth-child(1) > #chosenPaymentMethod",
      TYPE_2: ":nth-child(2) > #chosenPaymentMethod",
      TYPE_3: ":nth-child(3) > #chosenPaymentMethod",
      TYPE_4: ":nth-child(4) > #chosenPaymentMethod",
      TYPE_5: ":nth-child(5) > #chosenPaymentMethod",
    },

    PROMOCODE: ".input-with-icon",

    ADDITIONAL_OPTIONS_BUTTONS: ".additional-options",
    additionalOptions: {
      ADDITIONAL_PAYMENT: ".additional-wrap .paid-delivery:nth-child(2) input:nth-child(1)",
      ORGANIZATION: '[placeholder="Например, Юлмарт"]',
      ORDER_NUMBER: '[placeholder="Внутренний номер"]'
    },

    servicesList:{
      OPTION_1: ".services-list .service-item:nth-child(1) input",
      OPTION_2: ".services-list .service-item:nth-child(2) input",
      OPTION_3: ".services-list .service-item:nth-child(3) input",
      OPTION_4: ".services-list .service-item:nth-child(4) input",
      OPTION_5: ".services-list .service-item:nth-child(5) input",
      OPTION_6: ".services-list .service-item:nth-child(6) input",
      OPTION_7: ".services-list .service-item:nth-child(7) input",
      OPTION_8: ".services-list .service-item:nth-child(8) input",
      OPTION_9: ".services-list .service-item:nth-child(9) input",
      OPTION_10: ".services-list .service-item:nth-child(10) input",
      OPTION_11: ".services-list .service-item:nth-child(11) input",
      OPTION_12: ".services-list .service-item:nth-child(12) input",
      OPTION_13: ".services-list .service-item:nth-child(13) input",
      OPTION_14: ".services-list .service-item:nth-child(14) input",
      OPTION_15: ".services-list .service-item:nth-child(15) input",
      OPTION_16: ".services-list .service-item:nth-child(16) input",
      OPTION_17: ".services-list .service-item:nth-child(17) input",
      OPTION_18: ".services-list .service-item:nth-child(18) input",
      OPTION_19: ".services-list .service-item:nth-child(19) input",
      OPTION_20: ".services-list .service-item:nth-child(20) input",
      OPTION_21: ".services-list .service-item:nth-child(21) input",
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
      APPLY: ".apply",
    },

    deleveryType: {
      BY_FOOT: ".delivery-buttons button:first-child",
      BY_CAR: ".delivery-buttons button:nth-child(2)",
      UNIVERSAL: ".delivery-buttons button:nth-child(3)",
      BY_BOXTRACK: ".delivery-buttons button:last-child",
    },
  },

  orderList: {
    ORDER: ".order",
    ORDER_NUMBER: ".left-header",
    CANCEL_ORDER_BUTTON: '.order-links [type="button"]:last-child',
    REASON_ORDER_CANCELATION: '[value="Получатель отказался от заказа"]',
    SUBMIT_ORDER_CANCELATION: ".black",
    ORDER_COUNT: ".title .red",
    EDITE_BUTTON: '.order-links [type="button"]:first-child',
    COMPLETE_DELETE: ".actions button:last-child",
    SUCCESS_MSG1: ".v-toast__text",
  },
  selectCancelReason: {
    REASON_1: ".reasons-list li:nth-child(1) input",
    REASON_2: ".reasons-list li:nth-child(2) input",
    REASON_3: ".reasons-list li:nth-child(3) input",
    REASON_4: ".reasons-list li:nth-child(4) input",
    REASON_5: ".reasons-list li:nth-child(5) input",
    REASON_6: ".reasons-list li:nth-child(6) input",
  }
};

export default selectors;
