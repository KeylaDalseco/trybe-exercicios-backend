// src/services/employee.service.js

const { Address, Employee } = require('../models/');
const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
// Ajustamos para usar a configuração correta para nosso ambiente
const sequelize = new Sequelize(config[env]);

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' }, // tipo um join, inclui os enderessos
  });

  return users;
};

// o campo include manipula os dados que serão retornados
// attributes: o exclude tira uma coluna desejada

const getById = async (id) => {
  const employee = await Employee.findOne({
      where: { id },
    });
  return employee;
};

// TRANSACTIONS
const insert = async ({ firstName, lastName, age, city, street, number }) => {
  const result = await sequelize.transaction(async (t) => {
    const employee = await Employee.create({
      firstName, lastName, age,
    }, { transaction: t });

    await Address.create({
      city, street, number, employeeId: employee.id
    }, { transaction: t });
    return employee;
  });

  return result;
  // Se chegou até aqui é porque as operações foram concluídas com sucesso,
  // não sendo necessário finalizar a transação manualmente.
  // `result` terá o resultado da transação, no caso um empregado e o endereço cadastrado
};

module.exports = {
  getAll,
  getById,
  insert
};