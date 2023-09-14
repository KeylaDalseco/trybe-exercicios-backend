import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import authMiddleware from '../../../src/middlewares/auth.middleware';
import UserModel from '../../../src/database/models/user.model';
import loginMock from '../../mocks/login.mock';

chai.use(sinonChai);

describe('AuthMiddlware', function () {
  const req = {} as Request;
  const res = {} as Response;
  let nextFunction: NextFunction;

  const tokenRequired = 'Token é obrigatório';

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);

    nextFunction = sinon.spy() as NextFunction;
    
    sinon.restore();
  });

  it('deve retornar um erro ao acontecer uma exception', async function () {
    // Arrange
    req.headers = { authorization: 'teste' };
    sinon.stub(jwt, 'verify')
      .callsFake(() => { throw new Error('JsonWebTokenError: jwt malformed'); });
    
    // Act
    await authMiddleware(req, res, nextFunction);

    // Assert
    expect(res.status).to.have.been.calledWith(401);
    expect(res.json).to.have.been.calledWith({ message: 'Token inválido' });
    expect(nextFunction).not.to.have.been.calledWith();
  });
  
  it('deve retornar um erro ao não enviar um token', async function () {
    // Arrange
    req.headers = {};
    
    // Act
    await authMiddleware(req, res, nextFunction);

    // Assert
    expect(res.status).to.have.been.calledWith(401);
    expect(res.json).to.have.been.calledWith({ message: tokenRequired });
    expect(nextFunction).not.to.have.been.calledWith();
  });

  it('deve retornar um erro ao enviar um token vazio', async function () {
    // Arrange
    req.headers = { authorization: '' };
    
    // Act
    await authMiddleware(req, res, nextFunction);

    // Assert
    expect(res.status).to.have.been.calledWith(401);
    expect(res.json).to.have.been.calledWith({ message: tokenRequired });
    expect(nextFunction).not.to.have.been.calledWith();
  });

  it('deve retornar um erro ao enviar um token com usuário que não existe', async function () {
    // Arrange
    req.headers = { authorization: 'token' };
    sinon.stub(jwt, 'verify').callsFake(() => ({ email: loginMock.notExistingUserBody.email }));
    sinon.stub(UserModel, 'findOne').resolves(null);

    // Act
    await authMiddleware(req, res, nextFunction);

    // Assert
    expect(res.status).to.have.been.calledWith(401);
    expect(res.json).to.have.been.calledWith({ message: 'Token inválido' });
    expect(nextFunction).not.to.have.been.calledWith();
  });

  it('deve chamar next ao enviar um token válido', async function () {
    // Arrange
    // const next = sinon.stub() as NextFunction;
    req.headers = { authorization: 'token' };
    sinon.stub(jwt, 'verify').callsFake(() => ({ email: loginMock.existingUser.email }));
    const mockFindOneReturn = UserModel.build(loginMock.existingUser);
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

    // Act
    await authMiddleware(req, res, nextFunction);

    // Assert
    expect(nextFunction).to.have.been.calledWith();
    expect(res.status).to.not.have.been.calledWith();
    expect(res.json).to.not.have.been.calledWith();
  });
});
