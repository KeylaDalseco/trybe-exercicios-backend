const { User } = require('../models');

const createUser = ({ username, password }) => User.create({ username, password });

const getUsers = () => User.findAll();

const getByUsername = (username) => User.findOne({ where: { username } });

const getByUserId = (userId) => User.findByPk(userId);

module.exports = {
  createUser,
  getUsers,
  getByUsername,
  getByUserId,
};
