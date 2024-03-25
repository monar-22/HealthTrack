const express = require('express');
const router = express.Router();
const authenticate = require('../Authentication/Authentication')
const LoginService = require('../services/Authser');


router.get('/users',authenticate,async function (req, res) {
    var users=await LoginService.users()
    console.log("Router Working");
    res.json(users)
});

router.post("/registerauth",async(req,res)=>{
    var data=req.body
    var new_user=await LoginService.register(data)
    res.json(new_user)
});

router.post("/loginauth", async (req, res) => {
    var { uname,password } = req.body;
    var user = await LoginService.login(uname,password);
    if(user!=null)
    res.send(user.uname+":"+user.password+":"+user.role);
    else
    res.send("invalid");
});

router.put("/changePassword",async(req,res)=>{
    var data=req.body
    console.log(data)
    var user=await LoginService.changepassword(data)
    res.json(user)
})

router.put("/forgetPassword",async(req,res)=>{
    var data=req.body
    var user=await LoginService.forgetPassowrd(data)
    res.json(user)
})

module.exports = router;


/* 
"uname": "shii7",
        "password": "team7",
        "role": "user",
*/

/*shii7:team7:user */

/*Yato5:yuki:admin */