const jwt = require('jsonwebtoken')
const ads = require('../Models/carSchema');
const users = require('../Models/userSchema');
exports.adsAddController = async(req,res)=>{
    console.log("inside adsAddController function");
    
    const{
        model,
      distance,
      option,
      size,
      year,
      transmission,
      seats,
      location,
      price,
      images
    }=req.body
    const userId = req.payload
    const uploadimage = req.files?req.files.map((file) => file.filename):"";
    console.log("1",req.files);
    console.log("2",uploadimage)
   
    
    try {
        const addedAd = new ads({ 
            uploderId:userId,
            model,
            distance,
            option,
            size,
            year,
            transmission,
            seats,
            location,
            price,
            images:uploadimage})
        await addedAd.save()
        res.status(200).json(addedAd)
    
    } catch (error) {
        res.status(401).json(error)
    }
}

// get all ads

exports.getAdsController = async(req,res)=>{
    console.log("inside getController function");
    const searchValue = req.query.search
    console.log(searchValue);
    const query = {
        model:{$regex:searchValue ,$options:"i"}
    }

    try {
        const allAds = await ads.find(query)
    res.status(200).json(allAds)
    console.log("inside getAdsController function");
    } catch (error) {
        res.status(401).json(error)
    }
}

// get users-ads
exports.getUsersAdsController = async(req,res)=>{
    console.log("inside getUsersAdsController function");
    console.log(req.payload);
    const uploderId = req.payload
    try {
        const allAds = await ads.find({uploderId:uploderId})
    res.status(200).json(allAds)
    console.log(allAds);
    
    } catch (error) {
        res.status(401).json(error)
    }
}
// delete ad
exports.deleteAdController = async(req,res)=>{
    console.log("inside deleteAdController function");
    const adId = req.params.id;
    try {
        // const allusers = await users.find()
        const result = await ads.findByIdAndDelete({_id:adId})
    res.status(200).json(result)
    console.log("ok",result);
    
    } catch (error) {
        res.status(401).json(error)
    }
}
// get owner Details 
exports.getOwnerDetailsController = async(req,res)=>{
    console.log("inside getOwnerDetailsController function");
    const ownerId = req.params.id;
    console.log(ownerId);
    try {
        const user = await users.find({_id:ownerId})
    res.status(200).json(user)
    console.log("ok",user);
    
    } catch (error) {
        res.status(401).json(error)
    }

}