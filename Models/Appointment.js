const mongoose = require("mongoose");
const Schema = mongoose.Schema


const AppointmentSchema = new Schema({
    AppointmentID: {
        type: String,
        unique: true,
    },
    Time: {
        type: String,
        required: true,
    },
    
    Date: {
        type: String,
        required: true,
    },
    Sector: {
        type: String,
        required: true,
    },
    PatientName: {
        type: String,
        required: true,
      },

    Hospital: {
        type: String,
        required: true,
    },
    Address: {
    type: String,
    required: true,
    },    
    DoctorsDiagnosis: {
    type: String,
    required:true,
    },

},{timestamps:true});

AppointmentSchema.pre("save", function (next) {
    const currentYear = new Date().getFullYear().toString();
    const randomDigits = Math.floor(10000 + Math.random() * 90000).toString().substring(0, 5);
    const generatedID = currentYear + randomDigits;
    this.AppointmentID = 'AP-' + generatedID; 
    next();
  });
module.exports = mongoose.model("Appointment", AppointmentSchema);