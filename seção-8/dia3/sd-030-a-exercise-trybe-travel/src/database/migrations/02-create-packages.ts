import { Model, QueryInterface, DataTypes } from 'sequelize'; 

import { Package } from '../../types/Package';

export default { 
  up(queryInterface: QueryInterface) { 
    return queryInterface.createTable<Model<Package>>('packages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      destination: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      category: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: DataTypes.FLOAT,
      }
    });
  },
  down(queryInterface: QueryInterface) { 
    return queryInterface.dropTable('users') 
  } 
};