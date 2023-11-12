const mongoose = require("mongoose");
const Schema = mongoose.Schema


const doctorsSchema = new Schema({
    DoctorID: {
        type: String,
        unique: true,
    },
    UserName: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
      },

    firstName: {
        type: String,
        required: true,
    },
    middleName: {
    type: String,
    },    
    prefix: {
    type: String,
    },


    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true,
      },
    birthday: {
        type: Date,
        required: true,
      },
    contactNumber: {
        type: String,
        required: true,
    },
    MaritalStatus: {
        type: String,
        enum: ["Single", "Married", "Separated", "Widowed", "Divorced", "Others"],
      },
      LicenseNumber: {
        type: String,
        required: true,
    },
    Specialization: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },

},{timestamps:true});

doctorsSchema.pre("save", function (next) {
    const currentYear = new Date().getFullYear().toString();
    const randomDigits = Math.floor(10000 + Math.random() * 90000).toString().substring(0, 5);
    this.DoctorID = currentYear + randomDigits;
    next();
  });
module.exports = mongoose.model("Doctors", doctorsSchema);