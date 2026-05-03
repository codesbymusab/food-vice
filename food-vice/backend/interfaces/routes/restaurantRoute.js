const express=require('express')
const router=express.Router()
const restCntrl=require('../controllers/restaurantController')

router.get('/recommended',restCntrl.recommendedRest)
router.get('/toprated',restCntrl.topRatedRest)
router.get('/nearby',restCntrl.nearbyRest)
router.get('/details/:id',restCntrl.restDetails)
router.get('/similar/:id',restCntrl.similarRest)
router.get('/cuisines',restCntrl.restCuisines)
router.get('/photos/:id',restCntrl.restPhotos)
module.exports=router
