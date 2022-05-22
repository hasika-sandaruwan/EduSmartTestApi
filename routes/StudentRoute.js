const express = require('express');
const StudentController = require('../controller/StudentController');

const router = express.Router(); //

router.post('/register', StudentController.saveStudent);
module.exports = router;