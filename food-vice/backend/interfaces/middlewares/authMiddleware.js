const AuthServiceImpl = require('../../infrastructure/services/JWT/AuthServiceImp');


exports.verifyAuth = async (req, res, next) => {



    try {

       
        const token = req.cookies.token;

        
        if (!token) {
            return res.status(401).json({ error: 'User not logged in' });
        }

        const auth = new AuthServiceImpl()
    
        const decoded = await auth.verifyToken(token)
     
        req.userId=decoded.userId

        next();

    } catch (e) {
        console.log(e)
        res.status(403).json({ error: 'Token invalid or expired' });
    }
};