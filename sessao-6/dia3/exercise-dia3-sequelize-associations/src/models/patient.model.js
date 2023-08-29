module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    patientId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    fullname: {
      type: DataTypes.STRING,
    },
    planId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  }, {
    timestamps: false,
    tableName: 'Patients',
    underscored: true,
  });
  Patient.associate = (models) => {
    Patient.belongsTo(models.Plan, { foreignKey: 'plan_id', as: 'plan' })
  };
  return Patient;
};