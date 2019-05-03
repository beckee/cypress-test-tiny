describe('page', () => {
    it('works', () => {
    });

    it('location.replace', () => {
        cy.visit("http://localhost/~rjulius/cypress/index.html");
        cy.get("#button1").click();
    })

    it('location.replace promise', () => {
    cy.visit("http://localhost/~rjulius/cypress/index.html");
      cy.get("#button2").click();
    })
})
