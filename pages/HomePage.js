/// <reference types="cypress" />
import { navigate as go } from './GeneralPage';
import {
  getBlogBtn,
  getContatoBtn,
  getHomeBtn,
  getQuemSomosBtn,
  getSobreBtn,
} from './NavBar';

export function navigate() {
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
