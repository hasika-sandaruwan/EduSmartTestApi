const mongoose = require('mongoose');
const SubjectSchema = new mongoose.Schema({
    title:{type:String,required:true},
    name:{type:String,required:true},
    credits:{type:Number,required:true},
    hours:{type:Number,required:true},
    lecturer:{type:String,required:true}
});
module.exports = mongoose.model('Subject',SubjectSchema);
