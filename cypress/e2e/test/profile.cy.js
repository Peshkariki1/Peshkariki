/// <reference types="cypress"/>

import basePage from '../pageObject/basePage.js';
import profile from '../pageObject/profile.js';
import { data } from '../../fixtures/profileData.json'


describe('Change profile data', () => {
beforeEach(() => {
    const userPhone = Cypress.env('users')[0].USER_PHONE;
    const password = Cypress.env('users')[0].PASSWORD;

    cy.login(userPhone, password);
    cy.visit('/');
    cy.title().should('contain', data.title);
    basePage.openCabinetMenu();
    basePage.getCountOfLinksNavigation().should('have.length', 12);
    basePage.openProfile();
    cy.url().should('contain', "profile")
  });

    data.userData.forEach((item, index) => {
            const initialUserName = item.userName;
            const initialUserCity = item.userCity;
            const initialUserSite = item.userSite;

        it(`AT_007.001 | should chenge user data ${index + 1}`, () => {
            profile.changeUserName(item.userName, item.userCity, item.userSite);
            profile.getMsg().should('contain', item.msgSucess);
        });

        it(`AT_007.002 | Verify that data was changed ${index + 1}`, () => {
        expect(item.defaultUserName).to.equal(initialUserName);
        expect(item.changetCity).to.equal(initialUserCity);
        expect(item.changedSite).to.equal(initialUserSite);
        })
    });

    data.userData1.forEach((item, index) => {
        const initialUserName = item.userName;
        const initialUserCity = item.userCity;
        const initialUserSite = item.userSite;

        it(`AT_007.003 | should chenge user data ${index + 1}`, () => {
        profile.changeUserName(item.userName, item.userCity, item.userSite);
        profile.getMsg().should('contain', item.msgErr);
    });

        it(`AT_007.004 | Verify that user name was not changade${index + 1}`, () => {
        expect(item.defaultUserName).to.equal(item.defaultUserName);
        expect(item.changetCity).to.equal(initialUserCity);
        expect(item.changedSite).to.equal(initialUserSite);
    });
});
    data.userData2.forEach((item, index) => {
        it(`AT_007.005 | should chenge user data ${index + 1}`, () => {
        profile.changeUserName(item.userName, item.userCity, item.userSite);
        profile.checkMsgNotExists();
    });
});

})