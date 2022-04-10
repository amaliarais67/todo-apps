const TodoRoute = require('express').Router()
const TodoController = require('../controllers/TodoController')

TodoRoute.get('/', TodoController.getTodos)
TodoRoute.get('/create', TodoController.createPage)
TodoRoute.post('/create', TodoController.create)
TodoRoute.get('/update/:id', TodoController.updatePage)
TodoRoute.post('/update/:id', TodoController.update)
TodoRoute.get('/delete/:id', TodoController.delete)
TodoRoute.get('/:id', TodoController.findById)


module.exports = TodoRoute