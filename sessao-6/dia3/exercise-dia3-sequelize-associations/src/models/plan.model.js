module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
  planId: { primaryKey: true, type: DataTypes.INTEGER },
  coverage: { type: DataTypes.STRING },
  price: { type: DataTypes.DOUBLE },
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'Plans'
  });

  Plan.associate = (models) => {
    Plan.hasMany(models.Patient, { foreignKey: 'plan_id', as: 'patients'})
  };
  return Plan;
};