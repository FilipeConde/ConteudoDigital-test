/// <reference types="cypress" />
import {
  navigate,
  //totalyCheckPageTitle,
  partialyCheckPageTitle,
} from '../../pages/HomePage';

describe('Home page test', () => {
  it('Should be on homepage', () => {
    navigate();
    partialyCheckPageTitle('Conteúdo Digital');
  });
});
