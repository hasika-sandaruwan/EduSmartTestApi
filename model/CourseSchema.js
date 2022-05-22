const mongoose = require('mongoose');
const CourseSchema = new mongoose.Schema({
    name:{type:String,required:true},
    startDate:{type:Date,required:true},
    batch:{type:String,required:true},
    branch:{type:String,required:true},
    subjects:{type:Array}
});
module.exports = mongoose.model('Course',CourseSchema);
