const express = require('express');
const CourseController = require('../controller/CourseController');

const router = express.Router(); //

router.post('/save', CourseController.saveCourse);
module.exports = router;