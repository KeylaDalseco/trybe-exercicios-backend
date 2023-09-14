import { expect } from 'chai';
import Mocha from 'mocha';
import path from 'path';
import mocks from './utils/mocks';
import transactionController from '../src/controllers/transactions.controller';
import MochaRunner from './utils/MochaRunner';

const mochaOptions: Mocha.MochaOptions = {
  reporter: function(){} as unknown as Mocha.ReporterConstructor,
  checkLeaks: true,
  allowUncaught: true,
  diff: true,
  fullTrace: true,
};

const studentTestPath = path.resolve(__dirname, '..', 'tests', 'unit', 'controllers', 'transactions.controller.test.ts');

const expectedSuccessTestTitle = 'deve salvar ao enviar dados válidos';
const expectedEmptyFieldTestTitle = 'deve retornar um erro se enviar um nome inválido';

jest.mock('../src/controllers/transactions.controller.ts');

describe('03 - Crie testes unitários para a função `create`, da camada `Controller`', function () {
  test('3.1 - Valida os testes quando os campos são corretos - modifica erroneamente a implementação do Controller, o teste de SUCESSO falha', async function () {
    (transactionController.create as jest.Mock).mockImplementation(() => null);
    const runner = new MochaRunner(expectedSuccessTestTitle, mochaOptions);
    const run = await runner.execute([studentTestPath]);
    expect(run.testResult).to.be.eq('failed');
  }); 
  test('3.1 - Valida os testes quando os campos são corretos - sem modificar a implementação do Controller, o teste de SUCESSO passa', async function () {
    jest.unmock('../src/controllers/transactions.controller.ts');

    const runner = new MochaRunner(expectedSuccessTestTitle, mochaOptions);
    const run = await runner.execute([studentTestPath]);      
    expect(run.testResult).to.be.eq('passed');
  });

  test('3.2 - Valida os testes quando o campo `name` é vazio - modifica erroneamente a implementação do Controller, o teste de nome vazio falha', async function () {
    jest.mock('../src/controllers/transactions.controller.ts');
    (transactionController.create as jest.Mock).mockImplementation(async(_req, res) => 
    {
      return res.status(201).json(mocks.transactionWithoutName);
    });

    const runner = new MochaRunner(expectedEmptyFieldTestTitle, mochaOptions);
    const run = await runner.execute([studentTestPath]);      
    expect(run.testResult).to.be.eq('failed');
  });
  test('3.2 - Valida os testes quando o campo `name` é vazio - sem modificar a implementação do Controller, o teste de nome vazio passa', async function () {
    jest.unmock('../src/controllers/transactions.controller.ts');

    const runner = new MochaRunner(expectedEmptyFieldTestTitle, mochaOptions);
    const run = await runner.execute([studentTestPath]);      
    expect(run.testResult).to.be.eq('passed');
  });
});
