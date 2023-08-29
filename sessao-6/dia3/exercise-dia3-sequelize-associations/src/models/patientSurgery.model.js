// src/models/PatientSurgery.js

module.exports = (sequelize, DataTypes) => {
  const PatientSurgery = sequelize.define(
    'PatientSurgery',
    {
      patientId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'Patient',
          key: 'id'
        }
      },
      surgeryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'Surgery',
          key: 'id'
        }
      },
    },
    { 
      timestamps: false,
      tableName: 'Patient_surgeries',
      underscored: true,
    },
  );

  PatientSurgery.associate = (models) => {
    models.Surgery.belongsToMany(models.Patient, {
      as: 'patients',
      through: PatientSurgery,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
    });
    models.Patient.belongsToMany(models.Surgery, {
      as: 'surgeries',
      through: PatientSurgery,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    });
  };

  return PatientSurgery;
};
