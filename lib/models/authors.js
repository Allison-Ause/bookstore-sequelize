'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Authors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Authors.hasMany(models.Books, {
        foreignKey: 'author_id',
      });
    }
  }
  Authors.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Authors',
    }
  );
  return Authors;
};
