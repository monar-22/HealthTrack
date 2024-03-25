
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Failed to connect to MongoDB', err));

// Create a Doctor model
const Doctor = mongoose.model('Appoint', {
  name: String,
  availableSlots: [String],
});

// Create example doctors and save them to the database
const exampleDoctors = [
  {
    name: 'Dr. John Doe',
    availableSlots: ['10:00 AM', '2:00 PM', '4:00 PM'],
  },
  {
    name: 'Dr. Kanna Yugar',
    availableSlots: ['11:00 AM', '3:00 PM', '5:00 PM'],
  },
  {
    name: 'Dr. Yashi Josh',
    availableSlots: ['9:00 AM', '1:00 PM', '6:00 PM'],
  },
];

Doctor.insertMany(exampleDoctors)
  .then(savedDoctors => {
    console.log('Example doctors saved:', savedDoctors);
  })
  .catch(err => {
    console.log('Failed to save the example doctors:', err);
  });

// API endpoint to check doctor availability
app.get('/api/availability/:doctorId', (req, res) => {
  const { doctorId } = req.params;
  Doctor.findById(doctorId)
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
});

// API endpoint to book an appointment
app.post('/api/book-appointment/:doctorId', (req, res) => {
  const { doctorId } = req.params;
  const { slot } = req.body;

  Doctor.findById(doctorId)
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
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});