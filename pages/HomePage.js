/// <reference types="cypress" />
import { navigate as go } from './GeneralPage';
import {
  getBlogNavBtn,
  getContatoNavBtn,
  getHomeNavBtn,
  getQuemSomosNavBtn,
  getSobreNavBtn,
} from './NavBar';

export function goToHomePage() {
  go('http://www.conteudodigital.net.br/');
}

export function clickOnSobreNavBtn() {
  return getSobreNavBtn().click();
}

export function clickOnQuemSomosNavBtn() {
  return getQuemSomosNavBtn().click();
}

export function clickOnBlogNavBtn() {
  return getBlogNavBtn().click();
}

export function clickOnContatoNavBtn() {
  return getContatoNavBtn().click();
}

export function clickOnHomeNavBtn() {
  return getHomeNavBtn().click();
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

export function getListaDeClientesDiv() {
  return cy.get('.client-list > div');
}
