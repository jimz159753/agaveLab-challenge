const Sequelize = require('sequelize');

module.exports = (sequelize) => {

	var products = sequelize.define('products', {
	code: Sequelize.STRING,
	name: Sequelize.STRING,
	price: Sequelize.STRING
	
	},{
	
	  timestamps: false
	
	})

	 return products;
}