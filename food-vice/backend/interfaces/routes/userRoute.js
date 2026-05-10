const express=require('express')
const userCtrl=require('../controllers/userController')
const { verifyAuth } = require('../middlewares/authMiddleware')
const router=express.Router()
const multer=require('multer')

const upload = multer({storage: multer.memoryStorage()})
router.use(verifyAuth)
router.put('/edit',upload.single("profilePhoto"),userCtrl.editUser)
router.get('/me',userCtrl.getUser)
router.get('/profile/:userId',userCtrl.getUserProfile)
router.post("/follow", userCtrl.toggleFollow);

module.exports=router