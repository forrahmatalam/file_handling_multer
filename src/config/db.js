const mongoose = require('mongoose');

const connectDB =async()=>{
   try{
       await mongoose.connect('mongodb://localhost:27017/file_handling_multer')
       console.log("connected to mongodb");
   }catch(err){
       console.log(err);
   }
}

module.exports=connectDB;