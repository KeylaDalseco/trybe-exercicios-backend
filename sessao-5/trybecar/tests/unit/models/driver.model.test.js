const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { driverModel } = require('../../../src/models');
const { driversBD,
  driverById, driverIdFromDB, driverIdFromModel } = require('../mocks/driver.mock');

describe('Testando o model de drivers', function () { 
  it('Exibindo todos os motoristas', async function () {
    sinon.stub(connection, 'execute').resolves([driversBD]);

    const allDrivers = await driverModel.findAll();
    expect(allDrivers).to.be.an('array');
    expect(driversBD).to.have.lengthOf(5);
    expect(allDrivers).to.be.deep.equal(driversBD);
  });

  it('Exibindo motorista pelo id', async function () {
    sinon.stub(connection, 'execute').resolves([[driverById]]);

    const driver = await driverModel.findById(4);
    console.log(driverById);
    expect(driver).to.be.an('array');
    expect(driver).to.have.lengthOf(1);
    expect(driver).to.be.deep.equal([driverById]);
  });

  it('Inserindo driver com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([driverIdFromDB]);

    const inputData = { name: 'Edson Nascimento' };
    const result = await driverModel.insert(inputData);
    expect(result).to.equal(driverIdFromModel);
  });
  afterEach(function () {
    sinon.restore();
  });
});