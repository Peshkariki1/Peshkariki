/// <reference types="cypress" />

import selectors from '../selectors';

class Profile {
    constructor() {
       this.userName = selectors.userProfile.userName;
       this.userPhone = selectors.userProfile.userPhone;
       this.userEmail = selectors.userProfile.userEmail;
       this.userPassword = selectors.userProfile.userPassword;
       this.userCity = selectors.userProfile.userCity;
       this.userSite = selectors.userProfile.userSite;
       this.msg = selectors.userProfile.msgSuc;

    }

    GetUserName(){
       return cy.get(this.userName).invoke('text')
    }

    GetUserCity(){
        return cy.get(this.userCity).invoke('text')
     }

     
    GetUserSite(){
        return cy.get(this.userSite).invoke('text')
     }


    changeUserName(userName, userCity, userSite){
        if (userName !== ""){
        cy.get(this.userName).clear().type(userName).blur()
        }
        if(userCity !== ""){
            cy.get(this.userCity).select(userCity).blur()
        }
        if(userSite !== ""){
            cy.get(this.userSite).clear().type(userSite).blur()
        }
    }

    getMsg(){
        return cy.get(this.msg).invoke('text');
    }

    checkMsgNotExists() {
        cy.get(this.msg).should('not.exist');
      }

}

const profile = new Profile();
export default profile;