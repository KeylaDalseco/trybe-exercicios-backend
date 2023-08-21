const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { travelModel } = require('../../../src/models');
const {
  travelIdFromDB,
  travelIdFromModel,
  travelFromDB,
  travelFromModel,
  travelWithWaypointsFromDB,
  travelWithWaypointsFromModel,
  travelByStatusFromDB,
  travelByStatusFromModel,
  returnFromDB,
} = require('../mocks/travel.mock');

describe('Realizando testes - TRAVEL MODEL:', function () {
  it('Inserindo travel sem waypoints com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([travelIdFromDB]);

    const inputData = { startingAddress: 'starting street', endingAddress: 'end street' };
    const insertId = await travelModel.insert(inputData);

    expect(insertId).to.be.a('number');
    expect(insertId).to.equal(travelIdFromModel);
  });

  it('Inserindo travel com waypoints com sucesso', async function () {
    sinon.stub(connection, 'execute')
      .onFirstCall()
      .resolves([travelIdFromDB])
      .onSecondCall()
      .resolves(null);

    const inputData = {
      startingAddress: 'starting street',
      endingAddress: 'end street',
      waypoints: [{ address: 'middle street', stopOrder: 1 }],
    };
    const insertId = await travelModel.insert(inputData);

    expect(insertId).to.be.a('number');
    expect(insertId).to.equal(travelIdFromModel);
  });

  it('Recuperando travel por id sem waypoints com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([[travelFromDB]]);

    const inputData = 42;
    const travel = await travelModel.findById(inputData);

    expect(travel).to.be.an('object');
    expect(travel).to.be.deep.equal(travelFromModel);
  });

  it('Recuperando travel por id com waypoints com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([travelWithWaypointsFromDB]);

    const inputData = 1;
    const travel = await travelModel.findById(inputData);

    expect(travel).to.be.an('object');
    expect(travel).to.be.deep.equal(travelWithWaypointsFromModel);
  });

  it('Recuperando travel por status id com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([travelByStatusFromDB]);

    const WAITING_DRIVER = 1;
    const travels = await travelModel.findByStatus(WAITING_DRIVER);

    expect(travels).to.be.an('array');
    expect(travels).to.be.deep.equal(travelByStatusFromModel);
  });

  it('Alterando travel(status da corrida) com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves(returnFromDB);

    const travelId = 1;
    const inputData = { driverId: 1, travelStatusId: 2 }; // Motorista a caminho
    const result = await travelModel.update(travelId, inputData);

    expect(result[0].affectedRows).to.be.equal(1);
    expect(result[0].changedRows).to.be.equal(1);
  });

  afterEach(function () {
    sinon.restore();
  });
});
