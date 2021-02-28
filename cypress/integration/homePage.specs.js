/// <reference types="cypress" />
import {
  checkFullUrl,
  checkPartialUrl,
  totalyCheckPageTitle,
  partialyCheckPageTitle,
} from '../../pages/GeneralPage';

import {
  getBlogBtn,
  getContatoBtn,
  getHomeBtn,
  getQuemSomosBtn,
  getSobreBtn,
} from '../../pages/NavBar';

import {
  navigate,
  clickOnSobreBtn,
  clickOnBlogBtn,
  clickOnContatoBtn,
  clickOnQuemSomosBtn,
  clickOnHomeBtn,
} from '../../pages/HomePage';

describe('Home page test', () => {
  it('Should be on homepage', () => {
    navigate();
    partialyCheckPageTitle('Conteúdo Digital');
    totalyCheckPageTitle(
      'Conteúdo Digital | Comunicação, marketing e mercado digital'
    );
    checkFullUrl('https://www.conteudodigital.net.br/');
  });
  it('Should go to Sobre page by navigation bar', () => {
    clickOnSobreBtn();
    checkPartialUrl('/sobre');
  });
  it('Should go to Quem Somos page by navigation bar', () => {
    clickOnQuemSomosBtn();
    checkPartialUrl('/quem-somos');
  });
  it('Should go to Home page by the navigation bar', () => {
    clickOnHomeBtn();
    checkFullUrl('https://www.conteudodigital.net.br/');
  });
  it('Should go to Blog page by navigation bar', () => {
    clickOnBlogBtn();
    checkPartialUrl('/blog');
  });
  it('Should go to Contato page by navigation bar', () => {
    clickOnContatoBtn();
    checkPartialUrl('/#contact');
  });
});
