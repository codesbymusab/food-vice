exports.reviews=async (req,res)=>{
    
    try{

        const restId=req.params.restaurantId
     
        const reviewRepo = new ReviewRepoImpl()
        const getReviews= new GetRestaurantReviews(reviewRepo)
        const restReviews=await getReviews.execute({id:restId})
        
        
        if(restReviews){
            res.status(200).json(restReviews);
        }

        res.status(400).json({ message: 'Restaurant not found' });


    }
    catch(error){
        console.log(error)
        res.status(400).json({message:error.message})
    }


}