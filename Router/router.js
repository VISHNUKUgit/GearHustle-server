const express = require('express')
const router  = new express.Router()
const userController = require('../Controller/userController')
//register API
router.post('/user/register',userController.register)


module.exports = router