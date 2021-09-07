const { DataTypes } = require('sequelize')

module.exports = (sequelize, type) => {
  sequelize.define('user',{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      isEmail: true
    },
    userName: DataTypes.STRING,
    password: DataTypes.STRING
  })
}
