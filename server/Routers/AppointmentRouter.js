const express = require("express");
const cors = require("cors")
const {Availability, BookAppointment} = require('../services/AppService');
const router=express.Router();


router.get('/api/availability/:doctorId',Availability)
router.post('/api/book-appointment/:doctorId',BookAppointment)

module.exports = router;

/*{
  "slot": "10:00 PM"
} */