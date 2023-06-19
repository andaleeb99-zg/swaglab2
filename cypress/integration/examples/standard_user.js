beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.log('Cache and cookies cleared');
    cy.reload()
});
describe("this is a test for the login in standard user",()=>{
    it("this is to test login hen the username and the password are coorecr",()=>{
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        
        for ( let i = 0 ; i < 6 ;i++)
         {let myArray =  cy.get('div#inventory_container').find('.btn').eq(i).click()
           
        }


    })
})
