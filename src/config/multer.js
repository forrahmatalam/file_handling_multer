const multer = require('multer');

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
       cb(null,"uploads")
    },
    fileName:(req,file,cb)=>{
console.log("in file name"+file)
cb(null,Date.now()+file.originalname)
    }
})