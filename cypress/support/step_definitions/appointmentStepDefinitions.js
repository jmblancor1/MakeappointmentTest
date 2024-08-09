const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('user signs in with {string} and {string}', (userName, password) => {
  cy.visit('https://katalon-demo-cura.herokuapp.com/');
  cy.get('#btn-make-appointment').click();
  cy.get('#txt-username').type(userName);
  cy.get('#txt-password').type(password);
  cy.get('#btn-login').click({ force: true });
  cy.exceptions();
});

When('user fills the {string}, {string} and additional information', (facility, comment) => {
  const date = new Date(2024, 7, 5); // Mes es cero-indexado: 7 = agosto
  cy.get('#combo_facility').select(facility);
  cy.selectDate(date);
  //cy.closePopup(); 
  cy.get('#txt_comment', { timeout: 40000 }).type(comment);
  cy.get('#btn-book-appointment').click();
});

Then('user verifies creation of the appointment with the facility {string}', (successMessage) => {
  cy.contains(successMessage).should('be.visible');
});

