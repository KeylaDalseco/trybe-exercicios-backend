import { ModelDefined, Optional, Model, DataTypes } from 'sequelize';
import { User } from '../../types/User';
import db from '.';

export type UserInputtableFields = Optional<User, 'id'>;

type UserSequelizeModelCreator = ModelDefined<User, UserInputtableFields>;

export type UserSequelizeModel = Model<User, UserInputtableFields>;

const UserModel: UserSequelizeModelCreator = db.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'users',
  timestamps: false,
  underscored: true,
});

export default UserModel;