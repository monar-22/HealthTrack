const mongoose = require('mongoose');
const AppointmentModel = require('../models/AppointmentModel');

mongoose.connect("mongodb://127.0.0.1:27017/doctorDatabase");

const AppointService = {
    
 Availability:(req, res) => {
    const { doctorId } = req.params;
    AppointmentModel.findById(doctorId)
      .then(doctor => {
        if (!doctor) {
          res.status(404).json({ error: 'Doctor not found' });
        } else {
          res.json({ availableSlots: doctor.availableSlots });
        }
      })
      .catch(err => {
        res.status(500).json({ error: 'Failed to fetch doctor availability' });
      });
  },
  
  // API endpoint to book an appointment
  BookAppointment:(req, res) => {
    const { doctorId } = req.params;
    const { slot } = req.body;
  
    AppointmentModel.findById(doctorId)
      .then(doctor => {
        if (!doctor) {
          res.status(404).json({ error: 'Doctor not found' });
        } else if (!doctor.availableSlots.includes(slot)) {
          res.status(400).json({ error: 'Slot is not available for booking' });
        } else {
          doctor.availableSlots = doctor.availableSlots.filter(s => s !== slot);
          return doctor.save();
        }
      })
      .then(updatedDoctor => {
        if (!updatedDoctor) {
          res.status(404).json({ error: 'Doctor not found' });
        } else {
          res.json({ message: 'Appointment booked successfully' });
        }
      })
      .catch(err => {
        res.status(500).json({ error: 'Failed to book an appointment' });
      });
  }
}
;
module.exports = AppointService;

