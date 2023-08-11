const { expect } = require('chai');
const sinon = require('sinon');
const { passengerModel, travelModel } = require('../../../src/models');
const { travelService } = require('../../../src/services');
const { passengerFromModel } = require('../mocks/passenger.mock');
const {
  travelWithWaypointsFromModel,
  travelIdFromModel,
  travelFromModel,
} = require('../mocks/travel.mock');

describe('Realizando testes - TRAVEL SERVICE:', function () {
  it('Inserindo travel sem waypoints com sucesso', async function () {
    sinon.stub(passengerModel, 'findById').resolves(passengerFromModel);
    sinon.stub(travelModel, 'insert').resolves(travelIdFromModel);
    sinon.stub(travelModel, 'findById').resolves(travelFromModel);

    const inputData = {
      passengerId: 1,
      startingAddress: 'starting street',
      endingAddress: 'end street',
    };
    const responseData = {
      id: 42,
      driverId: null,
      startingAddress: 'starting street',
      endingAddress: 'end street',
      requestDate: '2023-05-29T19:56:25.000Z',
      travelStatusId: 1,
      status: 'Aguardando Motorista',
      waypoints: [],
    };

    const responseService = await travelService.requestTravel(inputData);
    expect(responseService.status).to.equal('SUCCESSFUL');
    expect(responseService.data).to.deep.equal(responseData);
  });

  it('Inserindo travel com waypoints com sucesso', async function () {
    sinon.stub(passengerModel, 'findById').resolves(passengerFromModel);
    sinon.stub(travelModel, 'insert').resolves(travelIdFromModel);
    sinon.stub(travelModel, 'findById').resolves(travelWithWaypointsFromModel);

    const inputData = {
      passengerId: 1,
      startingAddress: 'Rua dos caramelos',
      endingAddress: 'Rua Mariana Alvarez Dutra',
      waypoints: [
        { address: 'Rua Quatro de Março', stopOrder: 1 },
        { address: 'Rua Sete de Setembro', stopOrder: 2 },
      ],
    };
    const responseData = {
      id: 1,
      driverId: null,
      startingAddress: 'Rua dos caramelos',
      endingAddress: 'Rua Mariana Alvarez Dutra',
      requestDate: '2023-05-29T19:56:52.000Z',
      travelStatusId: 1,
      status: 'Aguardando Motorista',
      waypoints: [
        { address: 'Rua Quatro de Março', stopOrder: 1 },
        { address: 'Rua Sete de Setembro', stopOrder: 2 },
      ],
    };

    const responseService = await travelService.requestTravel(inputData);
    expect(responseService.status).to.equal('SUCCESSFUL');
    expect(responseService.data.waypoints).to.have.lengthOf(2);
    expect(responseService.data).to.deep.equal(responseData);
  });

  it('Não insere travel com endereços iguais', async function () {
    const inputData = {
      passengerId: 1,
      startingAddress: 'same street',
      endingAddress: 'same street',
    };

    const responseService = await travelService.requestTravel(inputData);
    expect(responseService.status).to.equal('INVALID_VALUE');
    expect(responseService.data.message).to.equal('"endingAddress" contains an invalid value');
  });

  afterEach(function () {
    sinon.restore();
  });
});