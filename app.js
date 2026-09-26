const express = require('express');
const config = require('./src/config/db');
const fileRoute = require('./src/routes/file.route');

config();



const app =express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("main get se aya hu")
});

app.use("/",fileRoute);


module.exports=app;