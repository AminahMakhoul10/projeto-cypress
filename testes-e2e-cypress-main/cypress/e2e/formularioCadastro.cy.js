describe ('Formulario de cadrastro',() => {
    beforeEach(() =>{
    cy.visit('http://localhost:3001');
})

it('Usuário deve conseguir se cadastrar com sucesso' , ()=> {
    cy.getByData('botao-cadastro').click() 
    cy.getByData('nome-input').type('Paula')
    cy.getByData('email-input').type('paula@gmail.com')
    cy.getByData('senha-input').type('12345')
    cy.getByData('checkbox-input').click()
    cy.getByData('botao-enviar').click()
    cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso')
})

})