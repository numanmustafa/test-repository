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

  Given('user is on the browse page', () => {
    cy.visit('https://app.oneblog.live/browse')
  });

  When("user filters for author", () => {
    cy.get(".card-author").eq(0).should('exist').invoke('text').as('author1')
    cy.get('.ng-select-container').contains("Author").click();
    cy.get('@author1').then(author1 => {
      // Ensure the page title element exists and contains the expected text
  
      cy.get(".d-flex").contains(author1).click();
    });
    
  });

  Then("list is filtered for selected author", () => {
    cy.get('@author1').then(author1 => {
      // Ensure the page title element exists and contains the expected text
  
      cy.get(".ng-select-container").should("contain", author1);
      cy.get(":nth-child(1) > .card-body").should("contain", author1);
    });
  
  });


  
 
  