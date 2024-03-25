const mongoose = require("mongoose");
const UserModel = require("../models/UserModel");
mongoose.connect("mongodb://127.0.0.1:27017/doctorDatabase");

const SearchService = {
  getBySpecialist: async (specialistValue) => {
    return await UserModel.find({ specialist: specialistValue });
  },
};

module.exports = SearchService;