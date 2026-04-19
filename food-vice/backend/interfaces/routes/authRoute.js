const authCtr=require('../controllers/authController')
const app=require('express')
const router=app.Router()

router.post('/signup',authCtr.signupUser)
router.post('/login',authCtr.loginUser)
router.post('/google',authCtr.googleSignIn)
router.get('/signout',authCtr.signOut)

module.exports=router

