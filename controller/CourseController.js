const CourseSchema = require('../model/CourseSchema');

const saveCourse = (req, resp) => {
    const courseSchema = new CourseSchema({
        name:req.body.name,
        startDate:req.body.startDate,
        batch:req.body.batch,
        branch:req.body.branch,
        subjects:req.body.subjects
    });

    courseSchema.save().then(result=>{
        resp.status(201).json({message:'Successfully Saved!'});
    }).catch(error=>{
        resp.status(500).json({message:'something went wrong!',error});
    })
};

module.exports = {saveCourse};
