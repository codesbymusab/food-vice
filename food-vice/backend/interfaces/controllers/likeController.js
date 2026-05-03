const LikeReview = require("../../application/use-cases/reviews/LikeReview")
const LikeRepoImpl = require("../../infrastructure/database/mongodb/repositories/LikeRepoImpl")


exports.likeReview=async (req,res)=>{

    try{
        
        const likeRepo = new LikeRepoImpl()
        const likeRev=new LikeReview(likeRepo)
        const result=await likeRev.execute(req.body)

        if(result){
            res.status(200).json({message: result});
        }

        res.status(400).json({ message: result });
    }
    catch(error){
        console.log(error)
        res.status(400).json({message:error.message})
    }
    

}







