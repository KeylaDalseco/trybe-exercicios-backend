const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { passengerModel } = require('../../../src/models');
const { passengerFromDB, passengerFromModel } = require('../mocks/passenger.mock');

describe('Realizando testes - PASSENGER MODEL:', function () {
  it('Recuperando passenger por id com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([[passengerFromDB]]);
    
    const inputData = 1;
    const passenger = await passengerModel.findById(inputData);

    expect(passenger).to.be.an('object');
    expect(passenger).to.be.deep.equal(passengerFromModel);
  });

  afterEach(function () {
    sinon.restore();
  });
});