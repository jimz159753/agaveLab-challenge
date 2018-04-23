const Sequelize = require('sequelize');


const sequelize = new Sequelize('store', 'postgres', '12345678', {
  dialect: 'postgres'
})

module.exports = sequelize;
