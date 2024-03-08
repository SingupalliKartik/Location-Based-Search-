const mongoose = require("mongoose");
const validator = require('validator');


const Sport = new mongoose.Schema({
    GameName:{
        type:String,
    },
    Levels:{
     type:String
    },
    Location:{
        type:String
    },
    Email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
               throw new Error("Email is invalid")
            }
           }
    },

})



const register = new mongoose.model("UserSportData",Sport);
module.exports = register;