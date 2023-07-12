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
    }
}
  
export default selectors;