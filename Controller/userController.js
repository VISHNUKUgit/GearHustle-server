const users = require('../Models/userSchema')
const jwt = require('jsonwebtoken')
exports.register = async(req,res)=>{
    console.log("inside register controller function");
    const {username,email,password} = req.body
    try{
        const existingUser = await users.findOne({email})
        // const existingUsers = await users.find()
        // res.status(200).json(existingUser)
        if (existingUser){
            res.status(406).json("Account already exist, Please Login...")
            // console.log("Account already exist Please Login...");
        }else{
            const newUser = new users({
                username,email,password,mob:"",whatsapp:"",profile:""
            })
            await newUser.save()
            res.status(200).json(newUser)   
        }
    }
    catch(err){
        res.status(401).json(`error:${err}`);
        
    }
    
}
exports.loginController = async(req,res)=>{
    console.log("inside loginController function");
    const {email,password} = req.body
    try{
        const existingUser = await users.findOne({email,password})
        // const allUser = await users.find()
        // console.log(allUser);
        if (existingUser!== null && existingUser !== undefined){
            const token = jwt.sign({userid:existingUser._id},"ss9876")
            res.status(200).json({existingUser,token})
            
        }else{
            res.status(404).json(`incorrect Email / password`)
        }
    }
    catch(err){
        res.status(401).json(`error:${err}`);
        
    }
    
}
exports.profileUpdateController = async(req,res)=>{
    console.log("inside updateController function");
    const{ username,
        email,
        password,
        mob,
        whatsapp,profile }=req.body
    const userId = req.payload
    const uploadimage = req.file?req.file.filename:profile
    try {
        const updatedUser = await users.findByIdAndUpdate({_id:userId},{username,email,password,mob,whatsapp,profile:uploadimage},{new:true})
        await updatedUser.save()
        res.status(200).json(updatedUser)
    
    } catch (error) {
        res.status(401).json(error)
    }
}