const mongoose = require("mongoose");
const Schema = mongoose.Schema


const PatientSchema = new Schema({
    PatientID: {
        type: String,
        unique: true,
    },
    UserName: {
        type: String,
        required: true,
    },
    
    email: {
        type: String,
        required: true,
    },
    Password: {
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
      Birthplace: {
        type: String,
        required: true,
    },
    EmergencyContact: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },

},{timestamps:true});

PatientSchema.pre("save", function (next) {
    const currentYear = new Date().getFullYear().toString();
    const randomDigits = Math.floor(10000 + Math.random() * 90000).toString().substring(0, 5);
    const generatedID = currentYear + randomDigits;
    this.PatientID = 'D-' + generatedID; 
    next();
  });
module.exports = mongoose.model("Patients", PatientSchema);