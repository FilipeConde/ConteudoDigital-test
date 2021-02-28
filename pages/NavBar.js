/// <reference types="cypress" />

export function getHomeBtn() {
  return cy.get('#menu-item-63 > a');
}

export function getSobreBtn() {
  return cy.get('#menu-item-71 > a');
}
export function getQuemSomosBtn() {
  return cy.get('#menu-item-72 > a');
}
export function getBlogBtn() {
  return cy.get('#menu-item-116 > a');
}
export function getContatoBtn() {
  return cy.get('#menu-item-191 > a');
}
