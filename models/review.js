const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {

}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "user", 
            key: "id"
        }
    },
    book_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "books",
            key: "id",
        }
    }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'review',
  }
);

module.exports = Review;

// Review is saved and the post is updated to display the Review, the Review creator’s username, and the date created