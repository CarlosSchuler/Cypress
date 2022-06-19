
class SignupPage {
    go(){
        cy.visit('/')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')
    }
    fillForm(entregador){
        cy.get('input[name="fullName"]').type(entregador.name)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)
        cy.get('input[name="postalcode"]').type(entregador.address.postalcode)
        cy.get('input[type="button"][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(entregador.address.number)
        cy.get('input[name="address-details"]').type(entregador.address.details)
        // cy.get('input[name="address"]').should('have.value',entregador.address.street)
        // cy.get('input[name="district"]').should('have.value',entregador.address.district)
        // cy.get('input[name="city-uf"]').should('have.value',entregador.address.city_state)
        
        cy.contains('.delivery-method li', entregador.delivery_method).click()
        cy.get('input[accept^="image"]').attachFile('/imgs/'+ entregador.cnh)
    }

    submit(){
        cy.get('form button[type="submit"]').click()
    }

    modalShouldBe(expectedMessage){
        cy.get('.swal2-container .swal2-html-container').should('have.text',expectedMessage)
    }
    modalErrorShouldBe(expectedError){
        //cy.get('.alert-error').should('have.text',expectedError)
        cy.contains('.alert-error',expectedError).should('be.visible')
    }
}

export default new SignupPage
