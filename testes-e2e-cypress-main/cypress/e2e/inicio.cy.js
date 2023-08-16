describe('Pagina Inicial', () => {
    beforeEach (()=> {
      cy.visit('http://localhost:30001');
    })  
    
    it('Deve renderizar o titulo principal', () => {
      cy.get('[data-test="titulo-principal"]').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!');
    });
  
    it('Deve renderizar o titulo 1 card', () => {
      cy.get('.Inicio_vantagens__itens__6aJyb > :nth-child(1) > h3').contains('Conta e cartão gratuitos');
    });
    it('Deve renderizar o titulo 2 card', () => {
      cy.get('.Inicio_vantagens__itens__6aJyb > :nth-child(2) > h3').contains('Saques sem custo');
    });
  
  
  
  });
  