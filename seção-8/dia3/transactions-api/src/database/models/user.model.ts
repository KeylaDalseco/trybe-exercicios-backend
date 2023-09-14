import { ModelDefined, Optional, DataTypes, Model } from 'sequelize';
import db from './index';
import { User } from '../../types/User';

// retirando o id, porque será criado pelo banco de dados autoamticamente.Tipamos com o user
export type UserInputtableFields = Optional<User, 'id'>;

// modelo de criação do model - definimos aqui com o modelDefined - passa 2 parametros
type UserSequelizeModelCreator = ModelDefined<User, UserInputtableFields>;

// aqui é para poder usar no service seguindo esse modelo
export type UserSequelizeModel = Model<User, UserInputtableFields>;

// AQUI USAMOS O DB INVÉS DO SEQUELIZE PARA CRIAR O MODEL
const UserModel: UserSequelizeModelCreator = db.define('User', {
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  name: DataTypes.STRING,
}, {
  tableName: 'users',
  timestamps: false,
  underscored: true,
});

export default UserModel;