const Sequelize = require('sequelize')
const sequelize = new Sequelize('ApiSe', 'sa', 'juninho99', {
	dialect: 'mssql',
	dialectOptions: {
		options:{
			useUTC: false,
			dateFirst: 1,
		}
	}
})

module.exports = sequelize