const mongoose=require("mongoose");
const LoginModel=require("./models/LoginModel");
const demo=async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/doctorDatabase')
    await LoginModel.insertMany([
         {fname:"Ronoroa",lname:"Zoro",uname:"Zoro3",mailid:"zo12@gmail.com",password:"one",role:"user"},
         {fname:"yato",lname:"kami",uname:"Yato5",mailid:"yaboku@gmail.com",password:"yuki",role:"admin"},
         {fname:"uzumaki",lname:"naruto",uname:"Naruto7",mailid:"nine@gmail.com",password:"believe",role:"user"},
         {fname:"tanj",lname:"eto",uname:"Tangiro",mailid:"nes@gmail.com",password:"nez",role:"user"},
    ])

    mongoose.connection.close();
}
demo().then(()=>{console.log("inserted data")}).catch((err)=>{console.log()})