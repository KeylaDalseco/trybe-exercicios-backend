import { expect } from 'chai';
import Mocha from 'mocha';
import path from 'path';
import transactionService from '../src/services/transactions.service';
import transactionModel from '../src/database/models/transaction.model';
import MochaRunner from './utils/MochaRunner';

const mochaOptions: Mocha.MochaOptions = {
  reporter: function(){} as unknown as Mocha.ReporterConstructor,
  checkLeaks: true,
  allowUncaught: true,
  diff: true,
  fullTrace: true,
};

const studentTestPath = path.resolve(__dirname, '..', 'tests', 'unit', 'services', 'transactions.service.test.ts');

const expectedSuccessTestTitle = 'deve ser possível criar uma transação com sucesso';
const expectedEmptyFieldTestTitle = 'deve retornar um erro quando um nome não é enviado';

jest.mock('../src/services/transactions.service.ts');

describe('02 - Crie testes unitários para a função `create`, da camada `Service`', function () {
  test('2.1 - Valida os testes quando os campos são corretos - modifica erroneamente a implementação do Service, o teste de SUCESSO falha', async function () {
    (transactionService.create as jest.Mock).mockImplementation(() => null);
    const runner = new MochaRunner(expectedSuccessTestTitle, mochaOptions);
    const run = await runner.execute([studentTestPath]);
    expect(run.testResult).to.be.eq('failed');
  }); 
  test('2.1 - Valida os testes quando os campos são corretos - sem modificar a implementação do Service, o teste de SUCESSO passa', async function () {
    jest.unmock('../src/services/transactions.service.ts');

    const runner = new MochaRunner(expectedSuccessTestTitle, mochaOptions);
    const run = await runner.execute([studentTestPath]);      
    expect(run.testResult).to.be.eq('passed');
  });
  test('2.1 - Valida os testes quando os campos são corretos - modifica corretamente a implementação do Service, o teste de SUCESSO passa', async function () {
    jest.mock('../src/services/transactions.service.ts');
    (transactionService.create as jest.Mock).mockImplementation(async (data) => ({ status: 'SUCCESSFUL', data }));
    const runner = new MochaRunner(expectedSuccessTestTitle, mochaOptions);
    const run = await runner.execute([studentTestPath]);      
    expect(run.testResult).to.be.eq('passed');
  });

  test('2.2 - Valida os testes quando o campo `name` é vazio - quando a implementação não tem a verificação do name, o teste de nome vazio falha', async function () {
    jest.mock('../src/services/transactions.service.ts');
    (transactionService.create as jest.Mock).mockImplementation(async (transaction) => {
      if (!transaction.price) return { status: 'INVALID_DATA', data: { message: 'Price is required' } };
      if (!transaction.type) {
        return { status: 'INVALID_DATA', data: { message: 'Type is required' } };
      }
      if (!transaction.userId) return { status: 'INVALID_DATA', data: { message: 'userId is required' } };

      const newTransaction = await transactionModel.create(transaction);

      return { status: 'SUCCESSFUL', data: newTransaction.dataValues };
    });

    const runner = new MochaRunner(expectedEmptyFieldTestTitle, mochaOptions);
    const run = await runner.execute([studentTestPath]);      
    expect(run.testResult).to.be.eq('failed');
  });

  test('2.2 - Valida os testes quando o campo `name` é vazio - sem modificar a implementação do Service, o teste de nome vazio passa', async function () {
    jest.unmock('../src/services/transactions.service.ts');

    const runner = new MochaRunner(expectedEmptyFieldTestTitle, mochaOptions);
    const run = await runner.execute([studentTestPath]);      
    expect(run.testResult).to.be.eq('passed');
  });
});
