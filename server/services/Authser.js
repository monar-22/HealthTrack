const mongoose = require('mongoose');
const LoginModel=require('../models/LoginModel')
const SendMail=require('../mailSender/SendMail')

// mongoose.connect("mongodb://127.0.0.1:27017/Doctor")
// .then(() => console.log("Connect to DB"))
// .catch((err) => console.log(err));

const LoginService = {
    users:async()=>{
        await mongoose.connect("mongodb://127.0.0.1:27017/doctorDatabase")
        var usersData=await LoginModel.find()
       
        return usersData
    },
    register:async(userData)=>{
        await mongoose.connect("mongodb://127.0.0.1:27017/doctorDatabase")
        var user=await LoginModel.findOne({uname:userData.uname})
        if(user==null){
            var pDoc=await LoginModel.create(userData)
         
            return pDoc
        }
        else{
            return "Already have account? Login here"
        }
    },
    
    login: async (u, p) => {
        await mongoose.connect("mongodb://127.0.0.1:27017/doctorDatabase");
        var user = await LoginModel.findOne({ uname: u ,password:p});
        console.log(u,p);
        console.log(user);
       
        console.log(user);
        return user;
      },
      changepassword:async(userData)=>{
        await mongoose.connect("mongodb://127.0.0.1:27017/doctorDatabase")
        console.log(userData)
        var user=await LoginModel.findOneAndUpdate({uname:userData.uname},{password:userData.newPassword})
        console.log(user)
        if(user!=null)
        {
            return user
        }
        else
        {
            return null
        }
    },                 
    forgetPassowrd:async(userData)=>{
        await mongoose.connect("mongodb://127.0.0.1:27017/doctorDatabase")
        var otp=userData.otp
        if(SendMail.MailSender(userData.email)==otp){
            var forget=await UserModel.findOneAndUpdate(
                {uname:userData.uname},
                {password:userData.newPassword}
            )
            console.log(forget)
            if(forget!=null)
            {
               
                return UserModel.find({email:userData.email})
            }
            else{
                
                return "User name not found"
            }
        }
        else{
          
            return null
        }        
    }
}

module.exports = LoginService;