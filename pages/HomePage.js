/// <reference types="cypress" />
import { navigate as go } from './GeneralPage';
import {
  getBlogBtn,
  getContatoBtn,
  getHomeBtn,
  getQuemSomosBtn,
  getSobreBtn,
} from './NavBar';

export function goToHomePage() {
  go('http://www.conteudodigital.net.br/');
}

export function clickOnSobreBtn() {
  return getSobreBtn().click();
}

export function clickOnQuemSomosBtn() {
  return getQuemSomosBtn().click();
}

export function clickOnBlogBtn() {
  return getBlogBtn().click();
}

export function clickOnContatoBtn() {
  return getContatoBtn().click();
}

export function clickOnHomeBtn() {
  return getHomeBtn().click();
}

export function getConhecaOSiteBtn() {
  return cy.get('.buttons > .red-btn');
}

export function getLeiaOsArtigosBtn() {
  return cy.get('.green-btn');
}

export function getIntroText() {
  return cy.get('.intro-text');
}
