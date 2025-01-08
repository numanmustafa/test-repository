import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

  Given("user opens OneBlog", () => {
    cy.visit("https://app.oneblog.live")
    // cy.cookiesAcceptButton().click()
  });

  When("user navigates to Browse page", () => {
    cy.menuBrowseButton().click()
 
  });

  When("user navigates to Library page", () => {
    cy.menuLibraryButton().click()
 
  });
 
  