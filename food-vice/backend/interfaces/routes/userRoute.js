const express=require('express')
const userCtrl=require('../controllers/userController')
const { verifyAuth } = require('../middlewares/authMiddleware')
const router=express.Router()

router.use(verifyAuth)
router.put('/edit',userCtrl.editUser)
router.get('/me',userCtrl.getUser)
module.exports=router