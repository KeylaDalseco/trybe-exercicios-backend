// eslint-disable-next-line max-lines-per-function
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
  }, {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'Accounts',
    underscored: true,
  });
  Account.associate = (models) => {
    Account.hasOne(models.Profile, { foreignKey: 'accountId', as: 'profile' });
    Account.hasMany(models.Comment, { foreignKey: 'accountId', as: 'comments' });
  };
  return Account;
};