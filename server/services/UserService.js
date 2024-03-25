const mongoose = require('mongoose');
const userModel = require('../models/UserModel');

mongoose.connect("mongodb://127.0.0.1:27017/doctorDatabase")
.then(() => console.log("Connect to DB"))
.catch((err) => console.log(err));

const UserService = {
    getDoctor:async(req,res) => {
        try{
            const data = await userModel.find({});
        return res.json({"success":true,result:data});
        }
        catch(err){
            return res.json({"error":err});
        }
        
    },
    createDoctor:async(req,res) => {
        const body = req.body;
        try{
            const data = new userModel(body);
            await data.save();
            return res.json({"success":true,result:data});
        }
        catch(err){
            return res.json({"success":false});
        }
    },
    updateDoctor:async(req,res) => {
        const {id} = req.params;
        const body=req.body;
        const result = await userModel.findByIdAndUpdate(id, body);
        return res.send({result});
    },
    deleteDoctor:async(req,res) => {
        const id = { _id : new mongoose.Types.ObjectId(req.params.id)};

        try{
            await userModel.deleteOne(id);
            return res.json({"success":true});
        }
        catch(err){
            return res.json({"success":false});
        }

    }
}

module.exports = UserService;