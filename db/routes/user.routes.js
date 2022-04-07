const Router = require('express')
const router = new Router()

//link to locate controller
const userController = require('../controller/user.controller')

//GET
router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getUserById)

module.exports = router

