const express = require('express');
const cors = require('cors');
const router = express.Router();
const {getDoctor,createDoctor,updateDoctor,deleteDoctor} = require('../services/UserService');

router.use(cors())
router.use(express.json())
router.use(express.urlencoded({extended:true}))

router.get('/get',getDoctor);
router.post('/create',createDoctor);
router.patch('/update/:id',updateDoctor);
router.delete('/delete/:id',deleteDoctor);

module.exports = router;