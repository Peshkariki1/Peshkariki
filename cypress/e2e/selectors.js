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
      }
    }
}
  
export default selectors;