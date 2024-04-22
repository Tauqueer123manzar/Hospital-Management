const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const UserSchema=new Schema({
      name:{
        type:String,
        required:true
      },
      Email:{
        type:String,
        required:true
      },
      password:{
        type:String,
        required:true
      },
      phone:{
        type:Number,
        required:true
      },
      location:{
        type:String
      },
      Country:{
        type:String,
        required:true
      }
});

const User=mongoose.model("User",UserSchema);

module.exports=User;