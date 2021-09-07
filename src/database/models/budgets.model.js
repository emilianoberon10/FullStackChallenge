const { DataTypes } = require('sequelize')

module.exports = (sequelize, type) => {
  sequelize.define('budget',{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email:{
      type: DataTypes.STRING,
      isEmail: true
    },
    concept: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    date: { 
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW
   },
   action: DataTypes.STRING
  })
}
