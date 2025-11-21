describe('Fluxo Principal da Aplicação', () => {
  beforeEach(() => {
    // Visita a url base configurada no cypress.config.js
    cy.visit('/')
  })

  it('Deve carregar a página inicial corretamente', () => {
    cy.contains('Faturamento').should('be.visible')
  })

  it('Deve exibir os dados do dashboard', () => {
    // Aguarda o carregamento dos dados
    cy.wait(1000)
    
    // Verifica se os cards estão visíveis
    cy.get('.bg-white').should('have.length.at.least', 1)
    
    // Verifica se o gráfico está presente
    cy.get('svg').should('exist')
  })

  it('Deve ser responsivo em mobile', () => {
    cy.viewport('iphone-x')
    
    // Verifica se o header mobile está visível
    cy.get('header.bg-secondary').should('be.visible')
    
    // Verifica se a bottom nav está visível
    cy.get('nav.fixed.bottom-0').should('be.visible')
    
    // Verifica se a sidebar desktop não está visível
    cy.get('aside.hidden.lg\\:flex').should('not.be.visible')
  })

  it('Deve exibir sidebar no desktop', () => {
    cy.viewport(1280, 720)
    
    // Verifica se a sidebar está visível
    cy.get('aside.hidden.lg\\:flex').should('be.visible')
    
    // Verifica se o header desktop está visível
    cy.get('header.hidden.lg\\:block').should('be.visible')
  })
})

