const express= require("express");
const app=express();
const path = require("path");
const User=require("../Backend Desing/model/User.js")
let port=8080;
                //    MongoDb connection is there
const mongoose = require('mongoose');
main().then((res)=>{
    console.log("!.......... MongoDb connection successfully........!");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Hospital-data');
}

               // router is making there
app.get("/login",(req,res)=>{
    res.send("Login server is runing now , You can login there");
})

app.get("/user",async(req,res)=>{
    let simpledata=new User({
        name:"Md Tauqueer manzar",
        Email:"tauqueer@gmail.com",
        password:"Taaj@123",
        phone:7549200441,
        location:'Hyderabad',
        Country:"India"
    });
    await simpledata.save();
    console.log("database connection success");
    res.send("Testing is sucess");
});

               // listen port is there

app.listen(port,()=>{
    console.log(`server is runing now on the port ${port}`);
})
