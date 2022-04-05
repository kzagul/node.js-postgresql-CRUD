const Router = require('express')
const router = new Router()

const sportInstitutionController = require('../controller/sportinstitution.controller')

router.get('/sportinstitution', sportInstitutionController.getSportInstitutions)
router.get('/sportinstitution/:id', sportInstitutionController.getSportInstitutionById)
router.post('/sportinstitution', sportInstitutionController.postSportInstitution)
router.put('/sportinstitution/:id', sportInstitutionController.putSportInstitution)
router.delete('/sportinstitution/:id', sportInstitutionController.deleteSportInstitution)

module.exports = router