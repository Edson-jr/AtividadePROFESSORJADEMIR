const Sequelize = require('sequelize')
const sequelize = require('../db.js')

const schema = 'dbo'

class Task extends Sequelize.Model{}
Task.init({
	Tarefa:  Sequelize.STRING,
	Descrição: Sequelize.STRING,
	Status: Sequelize.STRING
},{
	sequelize,
	modelName: 'lista de tarefas',
	schema
})

sequelize.sync();

module.exports = Task;