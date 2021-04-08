const express = require('express')

const TaskController = require('./controllers/TaskController')

const routes = express.Router()

routes.get('/tasks', TaskController.list)

module.exports = routes
