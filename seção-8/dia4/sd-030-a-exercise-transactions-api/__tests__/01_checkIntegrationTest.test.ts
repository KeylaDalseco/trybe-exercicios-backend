import { expect } from 'chai';
import { runHardMockTests, runHardTests } from './utils/MochaHardRunner';

describe('01 - Crie testes de integração para a funcionalidade de cadastrar transações', function () {
  test('1.1 - Valida os testes com os campos corretos - modifica erroneamente a implementação do Controller, o teste de sucesso falha', async function () {

    const original = 'src/controllers/transactions.controller.ts'
    const mock = '__tests__/utils/transactions.controller.bad'
    const result = await runHardMockTests(original, mock);
    expect(result.stats.failures).to.be.greaterThanOrEqual(1);
  });

  test('1.1 - Valida os testes com os campos corretos - sem modificar a implementação do Controller, o teste de sucesso passa', async function () {

    const result = await runHardTests();
    expect(result.stats.failures).to.be.equal(0);
  });

  test('1.2 - Valida os testes quando o campo `name` é vazio - modifica erroneamente a implementação do Controller, o teste de nome vazio falha', async function () {
    const original = 'src/controllers/transactions.controller.ts'
    const mock = '__tests__/utils/transactions.controller.bad.name'
    const result = await runHardMockTests(original, mock);
    expect(result.stats.failures).to.be.greaterThanOrEqual(1);
  });
});
