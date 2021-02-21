/// <reference types="cypress" />

describe('First test', () => {
  it('Accesses the "about" red button', () => {
    cy.visit('https://www.conteudodigital.net.br/');
    cy.get('.buttons > .red-btn').click();
    cy.url().should('contain', '/sobre');
    cy.get('.entry-header > .entry-title').should('have.text', 'SOBRE');
  });
});
