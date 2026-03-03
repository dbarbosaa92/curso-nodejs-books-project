//importaçoes
const express = require('express')
const router = express.Router()

const TaskController = require('../controller/TaskController')

//inicio da criaçao das rotas
router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.post('/remove', TaskController.removeTask)
router.get('/edit/:id', TaskController.updateTask)
router.post('/edit/:id', TaskController.updateTaskPost)
router.post('/updateStatus', TaskController.toggleTaskStatus)
router.get('/', TaskController.showTasks)

module.exports = router