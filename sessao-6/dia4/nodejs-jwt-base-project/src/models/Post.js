module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'posts',
  });

  Post.associate = (models) => {
    Post.belongsTo(
      models.User,
      { foreignKey: { name: 'userId', field: 'user_id' }, as: 'users' },
      );
  };

  return Post;
};