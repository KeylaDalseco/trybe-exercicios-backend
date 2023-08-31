/**
* @param {import('sequelize').Sequelize} sequelize
* @param {import('sequelize').DataTypes} DataTypes
* @returns {import('sequelize').ModelCtor<import('sequelize').Model<{
  *  id: number
  * }, any>>}
  */
  
  const model = (sequelize, DataTypes) => {
    const TaskModel = sequelize.define('Task', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      description: DataTypes.STRING,
      check: DataTypes.BOOLEAN
    }, { timestamps: false, tableName: 'tasks',  underscored: true});
  
  
    return TaskModel;
  }
  
  module.exports = model;