/// <reference types="cypress" />

export function getHomeNavBtn() {
  return cy.get('#menu-item-63 > a');
}

export function getSobreNavBtn() {
  return cy.get('#menu-item-71 > a');
}
export function getQuemSomosNavBtn() {
  return cy.get('#menu-item-72 > a');
}
export function getBlogNavBtn() {
  return cy.get('#menu-item-116 > a');
}
export function getContatoNavBtn() {
  return cy.get('#menu-item-191 > a');
}
