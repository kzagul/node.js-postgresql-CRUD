const Router = require('express')
const router = new Router()

//link to contacts controller
const contactsController = require('../controller/contacts.controller')

//GET
router.get('/contacts', contactsController.getContacts)
router.get('/contacts/:id', contactsController.getContactsById)
//POST

//PUT

//DELETE


module.exports = router