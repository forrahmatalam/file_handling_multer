const express = require('express');

const router = express.Router();




router.post("/file",(req,res)=>{
    try{
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