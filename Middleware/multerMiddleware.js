const multer = require('multer')

const storage = multer.diskStorage({
    
    destination:(req,file,callback)=>{
        // 1.The standard callback pattern:callback(error, result);
        // 2.If you pass a success message as the first argument, it goes against this convention, and it might lead to confusion and unexpected behavior for developers working with your code. It's a good practice to follow established conventions to enhance the readability and maintainability of your code.
        // console.log("inside multer");
        callback(null,"./images/profile")

        // 3.Incorrect usage: Passing success message as the first argument
        // callback("This is a success message");

        //4. Correct usage: Passing null as the first argument for success
        // callback(null, "./images/profile");

    },
    filename:(req,file,callback)=>{
        const filename = `image_${Date.now()}_${file.originalname}`
        
        callback(null,filename)
    }
})

const fileFilter = (req,file,callback)=>{
    if(file.mimetype === 'image/png'  || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
        callback(null,true)
    }else
    {
        callback(null,false)
        return callback(new Error("Only png,jpg,jpeg files are allowed!!!"))
    }

}
const multerConfig  = multer({
    storage,fileFilter
})                          

module.exports = multerConfig