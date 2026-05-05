const express=require('express')
const router=express.Router()
const reviewCntrl=require('../controllers/reviewController')
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get('/:restaurantId',reviewCntrl.restReviews)
router.get('/user/:userId/',reviewCntrl.userReviews)
router.get('/recent/reviews',reviewCntrl.recentReviews)
router.post("/create", upload.array("files"), reviewCntrl.createReview);
module.exports=router
