const EditUser = require("../../application/use-cases/user/EditUser")
const GetUser = require("../../application/use-cases/user/GetUser")
const UserRepoImpl = require("../../infrastructure/database/mongodb/repositories/UserRepoImpl")


exports.getUser=async (req,res)=>{

    try{
     
        const userRepo = new UserRepoImpl()
        const getUser=new GetUser(userRepo)
        const user=await getUser.execute({userId:req.body.userId})

        if(user){
            res.status(200).json({user:user});
        }

        res.status(400).json({ message: 'User not logged in' });
    }
    catch(error){
        console.log(error)
        res.status(400).json({message:error.message})
    }
    

}

exports.editUser = async (req, res) => {
    
    try {
     
        const userRepo = new UserRepoImpl()
        const editUser = new EditUser(userRepo)
        const user = await editUser.execute(req.body)
       
        if (user) {

            res.status(200).json({ message: 'User updated Successfully'})
        }
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message })

    }



}


