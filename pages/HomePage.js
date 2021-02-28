/// <reference types="cypress" />

export function navigate() {
  cy.visit('http://www.conteudodigital.net.br/');
}

export function partialyCheckPageTitle(text) {
  cy.title().should('include', text);
}

/*export function totalyCheckPageTitle(text) {
  cy.title().should('have.text', text);
}*/
