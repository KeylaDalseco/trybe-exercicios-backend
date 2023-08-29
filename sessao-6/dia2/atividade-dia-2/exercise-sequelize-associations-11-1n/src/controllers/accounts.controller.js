const serviceAccounts = require('../services/account.service');

const getAccountById = async (req, res) => {
  try {
    const { id } = req.params;
    const account = await serviceAccounts.getAccountById(Number(id));

    if (!account) {
      return res.status(404).json({ message: 'Nenhuma conta cadastrada' });
    }

    return res.status(200).json(account);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const account = await serviceAccounts.getById(Number(id));
    
    if (!account) {
      return res.status(404).json({ message: 'Nenhuma conta cadastrada' });
    }
    return res.status(200).json(account);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

const saveAccountAndProfile = async (req, res) => {
  try {    
    const save = await serviceAccounts.saveAccountAndProfile(req.body);

    if (save.message) {
      return res.status(404).json(save);
    }

    return res.status(200).json({ message: 'Conta cadastrada com sucesso' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

module.exports = {
  getAccountById,
  getById,
  saveAccountAndProfile,
};