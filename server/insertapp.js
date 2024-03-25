const mongoose = require("mongoose");
const AppointModel = require("./models/AppointmentModel");

const demo = async () => {  
  await mongoose.connect("mongodb://127.0.0.1:27017/doctorDatabase");
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
  
  AppointModel.insertMany(exampleDoctors)
    .then(savedDoctors => {
      console.log('Example doctors saved:', savedDoctors);
    })
    .catch(err => {
      console.log('Failed to save the example doctors:', err);
    });


};

demo()
  .then(() => {
    console.log("Inserted data");
  })
  .catch((err) => {
    console.error(err);
  });