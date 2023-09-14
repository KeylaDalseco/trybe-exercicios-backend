import { expect } from 'chai';
import sinon from 'sinon';

import TransactionModel from '../../../src/database/models/transaction.model';
import transactionMock from '../../../tests/mocks/transactions.mock';
import transactionsService from '../../../src/services/transactions.service';


describe('TransactionService', function () {
  beforeEach(function () { sinon.restore(); });

  describe('#create', function () {
    it('deve ser possível criar uma transação com sucesso', async function () {
      // Arrange
    const mockCreateReturn = TransactionModel.build(transactionMock.validTransactionFromDB);
      sinon.stub(TransactionModel, 'create')
        .resolves(mockCreateReturn);
      // Act
      const serviceResponse = await transactionsService.create(transactionMock.validTransactionFromDB);
      // Assert
      expect(serviceResponse.status).to.eq('SUCCESSFUL');
      expect(serviceResponse.data).to.be.deep.eq(transactionMock.validTransactionFromDB);
    });

    it('deve retornar um erro quando um nome não é enviado', async function () {
      // Arrange
      const mockCreateReturn = TransactionModel.build(transactionMock.emptyNameTransaction);
      sinon.stub(TransactionModel, 'create')
        .resolves(mockCreateReturn);
      // Act
      const serviceResponse = await transactionsService.create(transactionMock.emptyNameTransaction);
      // Assert
      expect(serviceResponse.status).to.eq('INVALID_DATA');
      expect(serviceResponse.data).to.deep.eq({ message: "Name is required"});
    });
  });
});