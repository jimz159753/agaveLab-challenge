const Sequelize = require('sequelize');

module.exports = (sequelize) => {

	var users = sequelize.define('users', {
	code: Sequelize.STRING,
	name: Sequelize.STRING,
	
	},{
	
	  timestamps: false
	
	})

	 return users;
}