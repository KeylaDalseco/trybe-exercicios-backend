const { Profile, Account } = require('../models');

const getAccountById = async (id) => {
  const accounts = await Account.findAll({
    where: { id },
    include: [{ model: Profile, as: 'profile' }],
  });
  return accounts;
};

const getById = async (id) => {
  const accounts = await Account.findByPk(id);
  return accounts;
};

const saveAccount = async (email, password) => {
  if (!email || !password) {
    return ({ message: 'Verifique se todos os campos foram preenchidos da forma correta!' });
  }

  try {
    return Account.create({ email, password });
  } catch (error) {
    return ({ message: 'Erro ao cadastrar uma conta!' });
  }
};

const validateProfileFields = (firstName, lastName, phone, accountId) => {
  if (!firstName || !lastName || !phone || !accountId) {
    return ({ message: 'Verifique se todos os campos foram preenchidos da forma correta!' });
  }
};

const saveProfile = async (firstName, lastName, phone, accountId) => {
  const invalidFieldsError = validateProfileFields(firstName, lastName, phone, accountId);

  if (invalidFieldsError) return invalidFieldsError;

  try {
    return Profile.create({ firstName, lastName, phone, accountId });
  } catch (error) {
    return false;
  }
};

const saveAccountAndProfile = async ({ email, password, firstName, lastName, phone }) => {
  const account = await saveAccount(email, password);

  if (account.message) {
    return account;
  }

  const profile = await saveProfile(firstName, lastName, phone, account.id);

  return profile;
};

module.exports = {
  getAccountById,
  getById,
  saveAccountAndProfile,
};