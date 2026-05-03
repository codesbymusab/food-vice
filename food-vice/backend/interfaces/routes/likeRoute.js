const express=require('express')
const likeCtrl=require('../controllers/likeController')
const { verifyAuth } = require('../middlewares/authMiddleware')
const router=express.Router()


router.post('/review',likeCtrl.likeReview)
router.post('/reel',likeCtrl.likeReview)
module.exports=router