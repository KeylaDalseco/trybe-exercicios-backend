import { ModelDefined, Optional, Model, DataTypes } from 'sequelize';
import { Package } from '../../types/Package';
import db from '.';

export type PackageInputtableFields = Optional<Package, 'id'>;

type PackageSequelizeModelCreator = ModelDefined<Package, PackageInputtableFields>;

export type PackageSequelizeModel = Model<Package, PackageInputtableFields>;

const PackageModel: PackageSequelizeModelCreator = db.define('Package', {
  destination: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: { type: DataTypes.DECIMAL(10, 2) },
}, {
  tableName: 'packages',
  timestamps: false,
  underscored: true,
});

export default PackageModel;