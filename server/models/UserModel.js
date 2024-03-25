const mongoose = require("mongoose");

const schemaData = mongoose.Schema({
    name : String,
    specialist : String,
    description : String,
    mobile : Number
})

const userModel = mongoose.model("doctor",schemaData);
module.exports = userModel;


