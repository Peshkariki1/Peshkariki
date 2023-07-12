const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  defaultCommandTimeout: 7000,
  waitForNavigation: true,
    reporter: 'cypress-mochawesome-reporter',
    e2e: {
      baseUrl: 'https://alt10.peshkariki.ru',
      setupNodeEvents(on, config) {
      screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },  
})