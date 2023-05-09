/// <reference types="cypress" />

const cepBaseUrl = 'https://cep-v2-americanas-npf.b2w.io/cep/';

describe('Cenário válido - Retorna 200 pois o CPF existe', () => {
  it('Cenário válido - Valida um CEP de Ponta Grossa, PR', () => {
    cy.request({
      method: 'GET',
      url: cepBaseUrl + '84016570'
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.address).to.equal('Rua Padre Cícero Romão Batista');
      expect(response.body.number).to.equal('84016570');
      expect(response.body.city).to.equal('Ponta Grossa');
      expect(response.body.longitude).to.equal(-50.137444);
      expect(response.body.state).to.equal('PR');
      expect(response.body.id).to.equal('84016570-23042');
      expect(response.body.latitude).to.equal(-25.0568489);
      expect(response.body.neighborhood).to.equal('Jardim Carvalho');
      expect(response.body.blockDelivery).to.equal(false);
    });

    it('Cenário inválido - Retorna 404 pois o CPF não existe', () => {
      cy.request({
          method: 'GET',
          url: cepBaseUrl + '5555555',
          failOnStatusCode: false
      }) 
          .then((response) => {
              expect(response.status).to.equal(404)
              expect(response.body.httpStatusCode).to.equal(404)
              expect(response.body.errorCode).to.equal('404')
              expect(response.body.message).to.equal('Recurso não encontrado')
              expect(response.body.info).to.equal('http://api.b2winc.com/doc/error/404')
          })
    });
  });
});
