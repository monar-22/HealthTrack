const mongoose = require('mongoose');
const RegisterModel = require('../models/RegisterModel');


mongoose.connect("mongodb://127.0.0.1:27017/doctorDatabase");

const LoginService = {
    register:async(req,res) => {

        RegisterModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
    },
    login:async(req,res) => {
        const {email,password} = req.body;
        RegisterModel.findOne({email:email})
        .then((user) => {
            if(user){
               if(user.password === password) res.json(user);
               else res.json({"success" : false});
            }
            else{
                res.json("No record existed")
            }
        })
    }
}
;
module.exports = LoginService;