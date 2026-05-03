const SaveRestaurant = require("../../application/use-cases/saves/SaveRestaurant")
const SaveRepoImpl = require("../../infrastructure/database/mongodb/repositories/SaveRepoImpl")


exports.saveRestaurant=async (req,res)=>{

    try{
        
        const saveRepo = new SaveRepoImpl()
        const saveRest=new SaveRestaurant(saveRepo)
        const result=await saveRest.execute(req.body)

        if(result){
            res.status(200).json({message: result});
        }

        res.status(400).json({ message: 'Failed to save restaurant' });
    }
    catch(error){
        console.log(error)
        res.status(400).json({message:error.message})
    }
    

}







