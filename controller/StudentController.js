const StudentSchema = require('../model/StudentSchema');
const jwt = require('jsonwebtoken');
const saveStudent = (req, resp) => {

    const token = req.body.token || req.query.token || req.headers['authorization'];
    if (!token) {
        return resp.status(403).send("a token is required to authenticate the user!");
    }

    try {
        const decode = jwt.verify(token, process.env.PRIVATE_KEY);
        const studentSchema = new StudentSchema({
            name: req.body.name,
            dob: req.body.dob,
            course: req.body.course,
            contact: req.body.contact,
            address: req.body.address
        });
        studentSchema.save().then(result => {
            resp.status(201).json({message: 'Successfully Saved!'});
        }).catch(error => {
            resp.status(500).json({message: 'something went wrong!', error});
        })

    } catch (e) {
        return resp.status(401).json("Invalid Token");
    }


};
module.exports = {saveStudent};
