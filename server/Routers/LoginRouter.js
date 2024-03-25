const express = require("express");
const cors = require("cors")
const {login, register} = require('../services/LoginService');
const router=express.Router();


router.post("/login",login);    

router.post('/register',register);

module.exports = router;