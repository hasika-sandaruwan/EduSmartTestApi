const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    fullName:{type:String,required:true},
    avatar:{type:String,required:true},
    redDate:{type:Date,required:true},
    activeState:{type:Boolean,required:true},
});
module.exports = mongoose.model('User',UserSchema);