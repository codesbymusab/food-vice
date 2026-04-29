const express=require('express')
const router=express.Router()
const reviewCntrl=require('../controllers/reviewController')

router.get('/:restaurantId',restCntrl.reviews)

module.exports=router
