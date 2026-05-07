const SignupUser = require("../../application/use-cases/user/SignupUser")
const LoginUser = require("../../application/use-cases/user/loginUser")
const GoogleSignIn = require("../../application/use-cases/user/GoogleSignIn")
const UserRepoImpl = require("../../infrastructure/database/mongodb/repositories/UserRepoImpl")
const JWTAuthRepoImpl = require("../../infrastructure/services/JWT/AuthServiceImp")
const GoogleAuthRepoImpl= require("../../infrastructure/services/OAuth/AuthServicesImp")

exports.signupUser = async (req, res) => {

    try {
   
        const userRepo = new UserRepoImpl()
        const signupUser = new SignupUser(userRepo)
        const user = await signupUser.execute(req.body)

        if (user) {
            return res.status(201).json({ message: 'User created Successfully', user: user })
        }
        return res.status(400).json({ message: 'User creation failed' })
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message })

    }



}


exports.loginUser = async (req, res) => {

    try {


        const userRepo = new UserRepoImpl()
        const authRepo = new JWTAuthRepoImpl()
        const loginUser = new LoginUser(userRepo, authRepo)
        const {user,token} = await loginUser.execute(req.body)

        

        if (token) {
            res.cookie('token', token, { httpOnly: true, secure: process.env.EVIRONMENT==='Production', maxAge: 7 * 24 * 60 * 60, sameSite: 'lax', path: '/' })
            return res.status(201).json({ message: 'User logged in Successfully',user:user })
        }
        return res.status(400).json({ message: 'Login failed' })
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message })

    }



}


exports.googleSignIn = async (req, res) => {

    try {
   
        const oAuthRepo = new GoogleAuthRepoImpl()
        const jwtAuthRepo=new JWTAuthRepoImpl()
        const userRepo = new UserRepoImpl()
        const googleSignIn = new GoogleSignIn(userRepo,oAuthRepo,jwtAuthRepo)

         const {user,token}  = await googleSignIn.execute(req.body)
        
        if (token) {
            res.cookie('token', token, { httpOnly: true, secure: process.env.EVIRONMENT==='Production', maxAge: 7 * 24 * 60 * 60, sameSite: 'lax', path: '/' })
            return res.status(201).json({ message: 'User logged in Successfully',user:user  })
        }
        return res.status(400).json({ message: 'Google sign-in failed' })
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message })

    }



}

exports.signOut=async (req,res)=>{

    try {
        
        res.clearCookie('token')
        res.status(201).json({ message: 'User logged out Successfully' })
        
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message })

    }
    
}



  