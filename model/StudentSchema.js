const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({
    name:{type:String,required:true},
    dob:{type:Date,required:true},
    course:{type:Object,required:true},
    contact:{type:String,required:true},
    address:{type:String}
});
module.exports = mongoose.model('Student',StudentSchema);
