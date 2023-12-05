const multer = require('multer')

const storage = multer.diskStorage({
    
    destination:(req,file,callback)=>{
        
        callback(null,"./images/car")
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
const multiMulterConfig  = multer({
    storage,fileFilter
})                          

module.exports = multiMulterConfig