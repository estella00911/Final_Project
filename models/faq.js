'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Faq extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Faq.belongsTo(models.Faq_Category)
    }
  };
  Faq.init({
    question: DataTypes.TEXT,
    answer: DataTypes.TEXT,
    // FaqCategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Faq',
  });
  return Faq;
};