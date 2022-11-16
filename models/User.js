const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        trim:true
    },
    age:{
        type:Number,
    },
    regid:{
        type:String,
        trim:true,
        required:true
    }
},{timestamps:true});
mongoose.models={};
export default mongoose.model("User",UserSchema)