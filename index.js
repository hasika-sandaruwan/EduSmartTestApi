/* // node-->express.js [java-->spring]
* express (npm i express)
* mongoose (npm i mongoose)
* nodemon (npm i nodemon -g [linux users--> sudo npm i nodemon -g])
* dotenv (npm i dotenv)
* body-parser (npm i body-parser)
* */
const express=require('express');
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config();


const bodyParser = require('body-parser');

/*=======================*/
const UserRoute = require('./routes/UserRoute');
const SubjectRoute = require('./routes/SubjectRoute');
const CourseRoute = require('./routes/CourseRoute');
const StudentRoute = require('./routes/StudentRoute');
/*=======================*/

const port=process.env.SERVER_PORT;
const app=express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// enable cors filters
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/EduSmart',()=>{
    app.listen(port,()=>{
        console.log(`EduSmart Api up & Running on port : ${port}`);
    });
});

app.get('/',(req,resp)=>{
    return resp.json('Server Works!');
});

/*=======================*/
app.use('/api/v1/user',UserRoute);
app.use('/api/v1/subject',SubjectRoute);
app.use('/api/v1/course',CourseRoute);
app.use('/api/v1/student',StudentRoute);
/*=======================*/
// http://127.0.0.1:3000/api/v1/user/sign-up [POST]