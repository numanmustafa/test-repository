import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";



  When("user is on {string} page", (url) => {
    cy.url().should("contain", url)
 
  });
  
  When("user is on browse page", () => {
    cy.url().should("contain", "browse")
 
  });



  
 
  