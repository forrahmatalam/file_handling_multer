const express = require('express');
const upload = require('../config/multer');

const router = express.Router();




router.post("/file",upload.single('image'),(req,res)=>{
    try{
        
        let file = req.file;
        console.log(file);
        let data =req.body;
        console.log(data);

      res.status(200).json({
            message:"file recieved sucessfully"
        })
    }catch(err){
        res.status(500).json({
            message:"internal server error"
        })
    }
})


module.exports=router;