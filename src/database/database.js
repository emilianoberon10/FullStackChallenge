const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.MYSQL_USER, process.env.MYSQL_USER, process.env.MYSQL_PASS,{
  host: 'remotemysql.com',
  dialect: 'mysql'
})

const modelDefiners = [
	require('./models/users.model'),
	require('./models/budgets.model'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize, Sequelize)
}
  sequelize.sync({force: true})
    .then(() => console.log('sync models'))
    
module.exports = sequelize
