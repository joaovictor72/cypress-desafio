# cypress-desafio
Get CEP do desafio de Chapter Deal
- Teste de CEP válido da api https://cep-v2-americanas-npf.b2w.io/cep/

Pré Requisitos:
- Node.js, NPM e Cypress instalados na máquina
Instrução para execução:
- Faça o clone do repositório na sua máquina
- Na pasta raiz do projeto execute o comando npx cypress run --spec "cypress/integration/getCPF.js" para rodar o teste em específico 

Cenários:
- GET no endpoint do CPF VÁLIDO 'https://cep-v2-americanas-npf.b2w.io/cep/84016570, retornando o status code 200
- GET no endpoint do CPF INVÁLIDO 'https://cep-v2-americanas-npf.b2w.io/cep/5555555, retornando o status code 400


