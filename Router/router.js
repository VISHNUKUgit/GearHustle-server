const express = require('express')
const router  = new express.Router()
const userController = require('../Controller/userController')
const jwtMiddleware = require('../Middleware/jwtMiddleware')
const multerConfig = require('../Middleware/multerMiddleware')
const multiMulterConfig = require('../Middleware/multipleMulter')
const adsController = require('../Controller/adsController')
//register API
router.post('/user/register',userController.register)
// Login API
router.post('/user/login',userController.loginController)
// Update Profile
router.put('/update/user',jwtMiddleware,multerConfig.single('profile'),userController.profileUpdateController)
// Add ad
router.post('/ads/user', jwtMiddleware,multiMulterConfig.array('images',7),adsController.adsAddController)
// get ALL Ads
router.get('/all_Ads',adsController.getAdsController)
// get All user 
router.get('/all_Ads/user', jwtMiddleware,adsController.getUsersAdsController)
// Delete Ad
router.delete('/delete_ad/:id', jwtMiddleware,adsController.deleteAdController)
// get owner Details
router.get('/owner/details/:id',jwtMiddleware,adsController.getOwnerDetailsController)

module.exports = router 