/// <reference types="cypress" />

export function partialyCheckPageTitle(text) {
  cy.title().should('include', text);
}

export function totalyCheckPageTitle(text) {
  cy.title().should('eq', text);
}

export function checkFullUrl(value) {
  cy.url().should('eq', value);
}

export function checkPartialUrl(value) {
  cy.url().should('include', value);
}

export function navigate(value) {
  cy.visit(value);
}
