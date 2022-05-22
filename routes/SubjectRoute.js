const express = require('express');
const subjectController = require('../controller/SubjectController');

const router = express.Router(); //

router.post('/save', subjectController.saveSubject);
module.exports = router;

//======================
/*
* POST=>{body,headers}==>[body]-->req.body.**** (data save, login, sign up)
* GET=>{headers}==>[headers]-->req.headers.*** (get data from the database)
* PUT=>{body,headers}==>[body]-->req.body.**** (update)
* DELETE=>{headers}==>[headers]-->req.headers.*** (delete data from the database)
* OPTION-->
* */
