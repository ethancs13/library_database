const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class UserBook extends Model {
    checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
    }
  }

UserBook.init(
  {
          id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          title: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          author: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
          },
          genre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
          },
          pages: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          image: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: "user",
              key: "id"
            }
          },
        },
        {
          sequelize,
          timestamps: false,
          freezeTableName: true,
          modelName: 'userBook',
        }
      );

module.exports = UserBook;