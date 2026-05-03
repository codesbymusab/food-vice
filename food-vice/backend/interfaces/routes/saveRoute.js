const express=require('express')
const saveCtrl=require('../controllers/saveController')
const { verifyAuth } = require('../middlewares/authMiddleware')
const router=express.Router()

router.post('/restaurant',saveCtrl.saveRestaurant)
router.post('/reel',saveCtrl.saveRestaurant)
module.exports=router