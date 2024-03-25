
const mongoose = require('mongoose');

const DoctorSchema =new mongoose.Schema({
    name: String,
    availableSlots: [String],
  });

const DoctorModel = mongoose.model("Appoint",DoctorSchema);

module.exports =DoctorModel;