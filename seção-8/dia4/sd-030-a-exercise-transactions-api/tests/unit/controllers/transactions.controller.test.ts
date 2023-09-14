import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import transactionService from '../../../src/services/transactions.service';
import transactionController from '../../../src/controllers/transactions.controller';
import transactionMock from '../../../tests/mocks/transactions.mock';

chai.use(sinonChai);

describe('TransactionController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  describe('#create', function () {
    it('deve salvar ao enviar dados válidos', async function () {
      // Arrange
      req.body = transactionMock.validTransaction
      sinon.stub(transactionService, 'create').resolves({
        status: 'SUCCESSFUL',
        data: transactionMock.validTransactionFromDB
      });
      // Act
      await transactionController.create(req, res)

      // Assert
      expect(res.status).to.have.been.calledWith(201)
      expect(res.json).to.have.been.calledWith(transactionMock.validTransactionFromDB)
    });
  });
  it('deve retornar um erro se enviar um nome inválido', async function () {
    // Arrange
    req.body = transactionMock.emptyNameTransaction
    sinon.stub(transactionService, 'create').resolves({
      status: 'INVALID_DATA',
      data: { message: 'Name is required'}
    });
    // Act
    await transactionController.create(req, res)

    // Assert
    expect(res.status).to.have.been.calledWith(400)
    expect(res.json).to.have.been.calledWith({ message: 'Name is required' })
  });
  });