const Task  = require('../models/task')

module.exports = {
	async list(req, res){
		try{
			const tasks = await Task.findAll()
			return res.json(tasks)
		} catch(err){
			return console.error(err)
		}
	}
}