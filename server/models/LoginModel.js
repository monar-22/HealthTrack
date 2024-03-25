const mongoose =require("mongoose");

const LogSchema= new mongoose.Schema({
    fname:{type:String,required:true},//required:true indicates Not null
    lname:{type:String,required: true},
    uname:{type:String,required: true,unique: true},
    mailid:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,required:true}
});

const LoginModel = mongoose.model("Login",LogSchema);

module.exports = LoginModel;