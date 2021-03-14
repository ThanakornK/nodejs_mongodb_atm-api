const express = require('express')
const router = express.Router()

const AccountController = require('../controllers/AccountController')

router.post('/', AccountController.show)
router.post('/add', AccountController.add)
router.post('/updateBalance', AccountController.updateBalance)
router.post('/delete', AccountController.destroy)

module.exports = router