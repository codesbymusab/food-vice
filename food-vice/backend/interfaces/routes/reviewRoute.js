const express=require('express')
const router=express.Router()
const reviewCntrl=require('../controllers/reviewController')

router.get('/:restaurantId',reviewCntrl.restReviews)

module.exports=router
