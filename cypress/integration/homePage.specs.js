/// <reference types="cypress" />
import {
  checkFullUrl,
  checkPartialUrl,
  totalyCheckPageTitle,
  partialyCheckPageTitle,
} from '../../pages/GeneralPage';

import {
  goToHomePage,
  clickOnSobreNavBtn,
  clickOnBlogNavBtn,
  clickOnContatoNavBtn,
  clickOnQuemSomosNavBtn,
  clickOnHomeNavBtn,
  getConhecaOSiteBtn,
  getIntroText,
  getLeiaOsArtigosBtn,
  getListaDeClientesContainer,
  getBlogPostsContainer,
  getCarouselBlogPosts,
} from '../../pages/HomePage';

describe('Home page test', () => {
  before(() => {
    goToHomePage();
  });
  it('Should be on homepage', () => {
    partialyCheckPageTitle('Conteúdo Digital');
    totalyCheckPageTitle(
      'Conteúdo Digital | Comunicação, marketing e mercado digital'
    );
    checkFullUrl('https://www.conteudodigital.net.br/');
  });
  context('Navigation bar tests', () => {
    it('Should go to Sobre page by navigation bar', () => {
      clickOnSobreNavBtn();
      checkPartialUrl('/sobre');
      totalyCheckPageTitle('SOBRE | Conteúdo Digital');
    });
    it('Should go to Quem Somos page by navigation bar', () => {
      clickOnQuemSomosNavBtn();
      checkPartialUrl('/quem-somos');
      totalyCheckPageTitle('QUEM SOMOS | Conteúdo Digital');
    });
    it('Should go to Home page by the navigation bar', () => {
      clickOnHomeNavBtn();
      checkFullUrl('https://www.conteudodigital.net.br/');
    });
    it('Should go to Blog page by navigation bar', () => {
      clickOnBlogNavBtn();
      checkPartialUrl('/blog');
      totalyCheckPageTitle('BLOG | Conteúdo Digital');
    });
    it('Should go to Contato page by navigation bar', () => {
      clickOnContatoNavBtn();
      checkPartialUrl('/#contact');
    });
  });
  context('Intro section validation', () => {
    afterEach(() => {
      goToHomePage();
    });
    it('Intro text is visible and correct', () => {
      getIntroText()
        .should('be.visible')
        .and(
          'have.text',
          'Comunicação, marketing e mercado digital em um só lugar'
        );
    });
    it('Should go to Sobre page when click on the red button "conheça o site"', () => {
      getConhecaOSiteBtn().should('be.visible').click();
      checkPartialUrl('/sobre');
      totalyCheckPageTitle('SOBRE | Conteúdo Digital');
    });
    it('Should go to Blog page when click on the green button "leia os artigos"', () => {
      getLeiaOsArtigosBtn().should('be.visible').click();
      checkPartialUrl('/blog');
      totalyCheckPageTitle('BLOG | Conteúdo Digital');
    });
  });
  context('"Com quem já trabalhamos" section validadions', () => {
    afterEach(() => {
      goToHomePage();
    });
    it('Should have 7 visible badges', () => {
      getListaDeClientesContainer()
        .scrollIntoView()
        .children()
        .should('have.length', 7)
        .and('be.visible');
    });
  });
  context('"Blog" section validations', () => {
    // afterEach(() => {
    //   goToHomePage();
    // });
    it('Should have Carrousel with 4 posts displayed', () => {
      getBlogPostsContainer()
        .scrollIntoView()
        .children()
        .should('have.length', 5);
    });
    it('Should have 4 active posts', () => {
      getCarouselBlogPosts().should('have.length', 4);
    });
    //create test for carousel navigation left and right
  });
});
