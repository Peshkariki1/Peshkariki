// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const URL_API = 'https://alt10.peshkariki.ru';

Cypress.Commands.add('login', (userPhone, password) => {
    cy.request({
        url: `${URL_API}/eApis/frontend/auth/login`,
        method: 'POST',
        failOnStatusCode: false,
        form: true,
        body: {
          'LoginForm[username]': userPhone,
          'LoginForm[password]': password
        },
      })
      .then((response) => {
        const cookies = response.headers['set-cookie'];
        const token = cookies[0].split(';')[0].split('=')[1].trim();
        cy.setCookie('token', token, { path: '/' });
      });
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
